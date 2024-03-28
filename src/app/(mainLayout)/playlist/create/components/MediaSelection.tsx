/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "@/styles/playlist-styles/Playlist-MediaSelection.module.css";
import { FaSearch } from "react-icons/fa";
import classNames from "classnames";
import { RiDeleteBinFill } from "react-icons/ri";
import { MediaData } from "./CurrentComponent";
import _ from "lodash";

interface MediaSelectionProps {
  selectedMedia: string | null;
  selectedTitles: MediaData[];
  onTitleAdd: (data:MediaData[]) => void; 
  currentPage: number;
}

interface SearchData {
  mediaName: string;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.NEXT_PUBLIC_TMDB_AUTH_KEY as string,
  },
};

const MAX_LIMIT : number = 10

export default function MediaSelection(props: MediaSelectionProps) {
  const [searchData, setSearchData] = useState<SearchData>({mediaName: ""});
  const [feedback, setFeedback] = useState({ message: "", positive: false });
  const [loader, setLoader] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [titleData, setTitleData] = useState<MediaData>(props.selectedTitles[0])
  const handleSearch = () => {
    
    if (searchData.mediaName.trim() !== "") {
      setLoader(true);
    }
    const uniqueId = Date.now();
  
    //(IIFE)
    (async () => {
      try {

        // 1. Search for the movie ID:
        const searchResponse = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchData["mediaName"]}&include_adult=false&language=en-US&page=1&year=${startDate?.getFullYear()}`,
          options
        ).then((response) => response.json());
          
        const movieId = searchResponse.results[0]?.id;
          console.log(movieId)
        if (movieId === undefined) {
          console.log("undefined movie")
          setLoader(false);
          setFeedback({ message: `Movie not found`, positive: false });
          return; // Early exit if movie not found
        }
  
        // 2. Fetch movie details and videos concurrently:
        const [movieDetailsResponse, videosResponse] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options).then((response) => response.json()),
          fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options).then((response) => response.json()),
        ]);
        console.log(movieDetailsResponse)
        const movieDetails = movieDetailsResponse;
        const videos = videosResponse.results; // Access the videos array
        const trailers = videos.filter((e: { type: string; }) => e.type == "Trailer")
        // 3. Combine movie details and videos into setTitleData:
        const titleData = {
          id: uniqueId,
          mediaName: movieDetails.original_title,
          mediaPoster: movieDetails.poster_path,
          mediaYear: new Date(movieDetails.release_date).getFullYear(),
          overview: movieDetails.overview,
          voteAverage: movieDetails.vote_average.toFixed(1),
          voteCount: movieDetails.vote_count,
          genres: movieDetails.genres.map((genre:{id:number, name:string}) => genre.name),
          imdb: movieDetails.imdb_id,
          trailer: trailers[0]?.key,
          tagline:movieDetails.tagline,
          cast:_.random(4,9)
        };
  
        setLoader(false);
        setFeedback({ message: "Movie Found: ", positive: true });
        setTitleData(titleData);
      } catch (error) {
        console.error(error);
      }
    })();
  };
  

  const handleAdd = () => {
    if (props.selectedTitles.length < MAX_LIMIT && searchData.mediaName !== "") {
      const isDuplicate = props.selectedTitles.some((media) => media.mediaName === titleData.mediaName && media.mediaYear === titleData.mediaYear);
      if (!isDuplicate) {
        const newData = {
          id: titleData.id,
          mediaName: titleData.mediaName,
          mediaPoster: titleData.mediaPoster,
          mediaYear: titleData.mediaYear,
          overview: titleData.overview,
          voteCount: titleData.voteCount,
          voteAverage: titleData.voteAverage,
          genres:titleData.genres,
          imdb: titleData.imdb,
          trailer: titleData.trailer,
          tagline: titleData.tagline,
          cast:titleData.cast

        };

        props.onTitleAdd([...props.selectedTitles, newData]);
        setFeedback({ message: `Successfully added: `, positive: true });
      } else {
        setFeedback({ message: `Duplicate titles are not allowed!`, positive: false });
      }
    } else {
      if (searchData.mediaName == "") {
        setFeedback({ message: `You must search for a title before adding!`, positive: false });
      } else {
        setFeedback({ message: `You've reached the max number of titles you can add!`, positive: false });
      }
 
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData({ mediaName: e.target.value });
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, key: number) => {
    const updatedData = props.selectedTitles.filter((media) => media.id !== key);
    props.onTitleAdd(updatedData);
    setFeedback({ message: `Deleted!`, positive: false });

  }
  

  return (
    <div className={`${props.currentPage > 2 ?"d-none": ""}`}>
      <div className="input-group mb-3">
        <span className={`input-group-text ${styles["light-border-input"]} border-end-0 ${styles["add-transition"]} bg-transparent pe-0`}>
          <FaSearch></FaSearch>
        </span>
        <input onChange={handleChange} placeholder="Enter the title name..." value={searchData.mediaName} type="text" className={`fw-light form-control border-start-0 ${styles["light-border-input"]} ph-color-white movieTitleInput`} />

        <div className={`${styles["date-picker"]}`}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showYearPicker
            className={`form-control fw-light  ${styles["light-border-input"]} ${styles["form-control-without-rounded-borders"]} col-5`}
            dateFormat="yyyy"
            onFocus={(e) => e.target.blur()}
          />
        </div>
          <button onClick={handleSearch} className={`${styles["nav-search"]} btn`}>Search</button>
      </div>
      <div className="d-flex align-items-baseline mb-5">
      <button onClick={handleAdd} className={`${styles["nav-next"]} btn`}>Add</button>
      
      </div>
      {feedback.message === "" ? (
        <h6 className="fw-light d-flex justify-content-center" role="status">
          Search for movies, add them and they will show up here!
        </h6>
      ) : (
        ""
      )}

<h5 className={`ms-3 p-0 fw-light text-center ${feedback.positive ? "text-success" : "text-danger"}`}>
          {feedback.message}{" "}
          {feedback.positive  ? (
            <>
              <span>{titleData.mediaName} ({titleData.mediaYear!})</span>
            </>
          ) : <>&nbsp;</>}
        </h5>
      <div className="text-center mb-5 mt-4">
        {titleData?.mediaPoster == undefined ? "" : loader ? (
          <div  className={`d-flex justify-content-center align-items-center mx-auto ${styles["loader-container"]}`} role="status">
            <span className="spinner-border" aria-hidden="true"></span>
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <Image className="rounded" alt="movie pic" width="250" height="350" src={`https://image.tmdb.org/t/p/original/${titleData.mediaPoster}`}></Image>
            <h5 className="mt-3">
              {titleData.mediaName} ({titleData.mediaYear})
            </h5>
          </>
        )}
      </div>
      <div className={`${styles["grid"]} text-center`}>
        {props.selectedTitles.map((media, i) =>
          media.mediaPoster === undefined ? <></> : (
            <div key={i}>
              <div className={`${styles["poster-container"]} position-relative d-inline-block`} >
                <Image className={`${styles["poster-image"]} rounded`} key={i} alt="movie pic" width="250" height="350" src={`https://image.tmdb.org/t/p/original/${media.mediaPoster}`}></Image>
                <div className={` ${styles["poster-delete"]}`}>
                  <button onClick={(e) => handleDelete(e, media.id)} type="button" className="btn btn-danger d-flex align-items-center text-center p-2">
                    <RiDeleteBinFill />
                  </button>
                </div>
              </div>
              <h5 className="mb-5 mt-3">
                {media.mediaName} ({media.mediaYear})
              </h5>
            </div>
          )
        )}
      </div>

     
    </div>
  );
}

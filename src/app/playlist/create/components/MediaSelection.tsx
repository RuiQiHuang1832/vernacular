/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "@/styles/Playlist.module.css";
import { FaSearch } from "react-icons/fa";
import classNames from "classnames";
import { RiDeleteBinFill } from "react-icons/ri";
import { MediaData } from "./CurrentComponent";
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
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzZmNzgyOWIwM2U3OTNlMDBlOWIwMWE0YmMwOGFiMSIsInN1YiI6IjY1YjQyNTQ5NTc1MzBlMDE4M2Q5ZjU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bDOJuoqg6i8xBBnyd9TuYflebJcnaNzG44ntIwqAaMw",
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

    const fullYear = startDate?.getFullYear()
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchData["mediaName"]}&include_adult=false&language=en-US&page=1&year=${fullYear}`, options)
      .then((response) => response.json())
      .then((searchResponse) => {
        const movieId = searchResponse.results[0]?.id;
        if (movieId == undefined) {
        setLoader(false);
        setFeedback({ message: `Movie not found`, positive: false });
        return Promise.reject('Movie not found');
        }
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options);
      }).then((secondResponse) => secondResponse.json())
      .then((response) => {
        console.log(response);
          setLoader(false);
          setFeedback({ message: ``, positive: false });
          setTitleData({
            id: uniqueId,
            mediaName: response.original_title,
            mediaPoster: response.poster_path,
            mediaYear: fullYear,
            overview: response.overview,
            voteAverage:response.vote_average.toFixed(1),
            voteCount: response.vote_count,
            genres: response.genres.map((genre: {id:number, name:string}) => genre.name),
            imdb:response.imdb_id
          })

      })
      .catch((err) => console.error(err));
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
          imdb: titleData.imdb
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
        <input onChange={handleChange} placeholder="Enter the title name..." value={searchData.mediaName} type="text" className={`form-control border-start-0 ${styles["light-border-input"]} ph-color-white movieTitleInput`} />

        <div style={{ flex: "0 0 15%" }}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showYearPicker
            className={`form-control   ${styles["light-border-input"]} ${styles["form-control-special-width"]} ${styles["form-control-without-rounded-borders"]} col-5`}
            dateFormat="yyyy"
            onFocus={(e) => e.target.blur()}
          />
        </div>
          <button onClick={handleSearch} className={`${styles["nav-search"]} btn`}>Search</button>
      </div>
      <div className="d-flex align-items-baseline">
      <button onClick={handleAdd} className={`${styles["nav-next"]} btn`}>Add</button>
        <h5 className={`ms-3 fw-light ${feedback.positive ? "text-success" : "text-danger"}`}>
          {feedback.message}{" "}
          {feedback.positive && props.selectedTitles.length !== 0 ? (
            <>
              <span style={{backgroundColor:"yellow",color:"black"}}>&nbsp;{props.selectedTitles[props.selectedTitles.length - 1].mediaName} ({props.selectedTitles[props.selectedTitles.length - 1].mediaYear!})&nbsp;</span>
            </>
          ) : (
            ""
          )}
        </h5>
      </div>
      {titleData?.mediaPoster === null ? (
        <h6 style={{ width: "250px", height: "350px" }} className="fw-light d-flex justify-content-center mx-auto text-center" role="status">
          Search for movies, add them and they will show up here!
        </h6>
      ) : (
        ""
      )}

      <div className="text-center mb-5 mt-4">
        {titleData?.mediaPoster == null ? "" : loader ? (
          <div style={{ width: "250px", height: "350px" }} className="d-flex justify-content-center align-items-center mx-auto" role="status">
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
          media.mediaPoster === null ? null : (
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

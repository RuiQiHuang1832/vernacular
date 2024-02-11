/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "@/styles/Playlist.module.css";
import { FaSearch } from "react-icons/fa";
import classNames from "classnames";
import { RiDeleteBinFill } from "react-icons/ri";

interface MediaSelectionProps {
  selectedMedia: string | null;
}

interface SearchData {
  mediaName: string;
}
interface MediaData {
  mediaName: null | string;
  mediaPoster: null | string;
  mediaYear: number | undefined | null;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzZmNzgyOWIwM2U3OTNlMDBlOWIwMWE0YmMwOGFiMSIsInN1YiI6IjY1YjQyNTQ5NTc1MzBlMDE4M2Q5ZjU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bDOJuoqg6i8xBBnyd9TuYflebJcnaNzG44ntIwqAaMw",
  },
};

export default function MediaSelection(props: MediaSelectionProps) {
  const [searchData, setSearchData] = useState<SearchData>({
    mediaName: "",
  });

  const [addedData, setAddedData] = useState<MediaData[]>([
    {
      mediaName: null,
      mediaPoster: null,
      mediaYear: null,
    },
  ]);

  const [poster, setPoster] = useState<string | null>(null);
  const [originalTitle, setOriginalTitle] = useState<string | null>(null);
  const [feedback, setFeedback] = useState({ message: "", positive: false });
  const [loader, setLoader] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [year, setYear] = useState<number | undefined>(2024);

  const handleSearch = () => {
    setLoader(true);
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchData["mediaName"]}&include_adult=false&language=en-US&page=1&year=${year}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPoster(response.results[0].poster_path);
        setOriginalTitle(response.results[0].original_title);
        setLoader(false);
      })
      .catch((err) => console.error(err));
  };

  const handleAdd = () => {
    if (addedData.length <= 10 && searchData.mediaName !== "") {
      const isDuplicate = addedData.some((media) => media.mediaName === originalTitle);
      if (!isDuplicate) {
        const newData = {
          mediaName: originalTitle,
          mediaPoster: poster,
          mediaYear: year,
        };
        setAddedData([...addedData, newData]);
        setFeedback({ message: `Successfully added: `, positive: true });
      } else {
        setFeedback({ message: `You've already added: `, positive: false });
      }
    } else {
      if (searchData.mediaName == "") {
        setFeedback({ message: `You must search for a title before adding!`, positive: false });
      } else {
        setFeedback({ message: `You've reached max number of titles you can add! Please consider removing one if you would like to add more! Last added: `, positive: false });
      }
 
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData({ ...searchData, mediaName: e.target.value });
  };

  return (
    <div>
      <div className="input-group mb-3">
        <span className={`input-group-text ${styles["light-border-input"]} border-end-0 ${styles["add-transition"]} bg-transparent pe-0`}>
          <FaSearch></FaSearch>
        </span>
        <input onChange={handleChange} placeholder="Enter the title name..." value={searchData.mediaName} type="text" className={`form-control border-start-0 ${styles["light-border-input"]} ph-color-white movieTitleInput`} />

        <div style={{ flex: "0 0 15%" }}>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setYear(date?.getFullYear());
            }}
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
          {addedData.length > 1 ? (
            <>
              <span className="text-decoration-underline">{addedData[addedData.length - 1].mediaName}</span> ({addedData[addedData.length - 1].mediaYear!})
            </>
          ) : (
            ""
          )}
        </h5>
      </div>
      {poster === null ? (
        <h6 style={{ width: "250px", height: "350px" }} className="fw-light d-flex justify-content-center mx-auto text-center" role="status">
          Search for movies, add them and they will show up here!
        </h6>
      ) : (
        ""
      )}

      <div className="text-center mb-5 mt-4">
        {poster == null ? (
          ""
        ) : loader ? (
          <div style={{ width: "250px", height: "350px" }} className="d-flex justify-content-center align-items-center mx-auto" role="status">
            <span className="spinner-border" aria-hidden="true"></span>
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <Image alt="movie pic" width="250" height="350" src={`https://image.tmdb.org/t/p/original/${poster}`}></Image>
            <h5 className="mt-3">
              {originalTitle} ({year})
            </h5>
          </>
        )}
      </div>
      <div className={`${styles["grid"]} text-center`}>
        {addedData.map((e, i) =>
          e.mediaPoster === null ? null : (
            <div key={i}>
              <div className={`${styles["poster-container"]} position-relative d-inline-block`} >
                <Image className={styles["poster-image"]} key={i} alt="movie pic" width="250" height="350" src={`https://image.tmdb.org/t/p/original/${e.mediaPoster}`}></Image>
                <div  className={` ${styles["poster-button"]}`}>
                  <button type="button" className="btn btn-danger d-flex align-items-center text-center p-2">
                    <RiDeleteBinFill />
                  </button>
                </div>
              </div>
              <h5 className="mb-5 mt-3">
                {e.mediaName} ({e.mediaYear})
              </h5>
            </div>
          )
        )}
      </div>

     
    </div>
  );
}

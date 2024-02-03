/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "@/styles/Playlist.module.css";
import { FaSearch } from "react-icons/fa";

interface MediaSelectionProps {
  selectedMedia: string | null;
}

interface SearchData {
  mediaName: string;
}
interface MediaData {
  mediaName: null | string;
  mediaPoster: null | string;
  mediaYear:  number | undefined | null;
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

  const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchData["mediaName"]}&include_adult=false&language=en-US&page=1&year=${year}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPoster(response.results[0].poster_path);
      })
      .catch((err) => console.error(err));
  };

  const handleAdd = () => {
    if (addedData.length <= 10 && searchData.mediaName !== "") {
      const newData = {
        mediaName: searchData.mediaName,
        mediaPoster: poster,
        mediaYear: year,
      };
      setAddedData([...addedData, newData]);
    } else {
      alert("Cannot add more than 10 medias")
    }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData({ ...searchData, mediaName: e.target.value });
  };

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [year, setYear] = useState<number | undefined>(2024)
  return (
    <>
      <div className="input-group mb-3">
             <span className={`input-group-text  ${styles["light-border-input"]} ${styles["add-transition"]} bg-transparent pe-0`}>
          <FaSearch></FaSearch>
        </span>
      <input onChange={handleChange} placeholder="Enter the movie name..." value={searchData.mediaName} type="text" className={`form-control border-start-0 ${styles["light-border-input"]} ph-color-white movieTitleInput`} />
   
      
        <div style={{ flex: "0 0 15%" }}>
          <DatePicker selected={startDate} onChange={(date) => {
            setStartDate(date); 
            setYear(date?.getFullYear())}} 
            showYearPicker 
            className={`form-control   ${styles["light-border-input"]} ${styles["form-control-special-width"]} ${styles["form-control-without-rounded-borders"]} col-5`} 
            dateFormat="yyyy" 
            onFocus={(e) => e.target.blur()} />
        </div>
        <button onClick={handleSearch} className="btn btn-success">
          Search
        </button>
      </div>
      <button onClick={handleAdd} className="btn btn-success">
        Add
      </button>
      <div className="text-center mb-5">
      {poster == null ? "" : <Image alt="movie pic" width="250" height="350" src={`https://image.tmdb.org/t/p/original/${poster}`}></Image>}
      </div>
      <div className={`${styles["grid"]} text-center`}>
        {/* to make grid work properly leave these divs in place */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      {addedData.map((e, i) =>
        e.mediaPoster === null ? null : (
          <div key={i} className="">
            <Image key={i} alt="movie pic" width="250" height="350" src={`https://image.tmdb.org/t/p/original/${e.mediaPoster}`}></Image>
            <h5 className="mb-5">
              {e.mediaName} released in {e.mediaYear}
            </h5>
          </div>
        )
      )}
      </div>
    </>
  );
}

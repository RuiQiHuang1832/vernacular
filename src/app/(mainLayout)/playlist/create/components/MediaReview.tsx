import React from "react";
import { MediaData } from "./MediaManager";
import Image from "next/image";
import styles from "@/styles/playlist-styles/Playlist-MediaReview.module.css";
import { FaStar } from "react-icons/fa";
import { kFormatter } from "@/helpers/numberFormatter";
import { PiUserCircleFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import classNames from "classnames";

interface MediaReviewProps {
  selectedTitles: MediaData[];
  currentPage: number;
}
interface reviewStateType {
  [key:number]: boolean;
}


export default function MediaReview(props: MediaReviewProps) {
  const [isReviewOpen, setIsReviewOpen] = useState<reviewStateType>({});

  const toggleReviewDropdown = (e:React.MouseEvent, key: number): void => {
       setIsReviewOpen((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key] || false,
    }));
  };
  //For review container + accordion
  const containerClassName = classNames("col-md-12")

  return (
    <div className={`container mt-5 ${props.currentPage <= 2 ? "d-none" : ""}`}>
      <div>
      <div className="form-floating">
      <input type="email" required  className={`form-control light-border-input`} id="floatingInput" placeholder="name@example.com"/>
      <label className="bg-transparent">Title</label>
      </div>
      <br></br>
      <div className="form-floating">
  <textarea style={{height:"200px",resize:"block"}} className={`form-control light-border-input`} required placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label className="bg-transparent">Description</label>
</div>
</div>
      <div className="row justify-content-center">
        {props.selectedTitles.map((title,i) => (
          <div className={`pb-5 ${containerClassName} `}  key={title.id}>
          <div  className={`d-flex mt-5 ${styles["review-container"]} justify-content-sm-between justify-content-start ${containerClassName}`}>
            <div className={`${styles["poster-container"]} col-xl-3 col-lg-4 col text-center`}>
              <Image className={`rounded ${styles["box-shadow"]}`} alt="movie pic" width="280" height="400" src={`https://image.tmdb.org/t/p/original/${title.mediaPoster}`}></Image>
              <div className="d-flex flex-column text-primary">
                <span className={`${classNames("text-center mt-4", { "text-danger": !title.tagline })} `}>{title.tagline || "Tagline Unavailable"}</span>
                <IoIosArrowDown key={title.id} onClick={(e:React.MouseEvent) => toggleReviewDropdown(e, title.id)} className={`${classNames(styles["dropdown-review-arrow"], { [styles["rotate"]]: isReviewOpen[title.id] })} d-block d-md-none mx-auto`} color="white" size="3.5em"></IoIosArrowDown>
              </div>
            </div>
            <div className={`p-5 ms-3 position-relative col-xl-9 col-lg-8 col-7 d-md-block d-none`}>
            <h4  className={`${styles["numbered-circle"]}`}>{i + 1}</h4>
              <h2>
                <a className={`${styles["imbd-link"]}`} target="_blank" href={`https://www.imdb.com/title/${title.imdb}/`}>
                  {title.mediaName}
                </a>
              </h2>
              <p className={`${styles["genres"]}`}>{title.genres.slice(0, 3).join(", ")}</p>
              <div className="d-flex align-items-end">
                <div>
                  <FaStar color="yellow"></FaStar>&nbsp;<span className="align-middle">{title.voteAverage}</span>
                </div>
                <div className="mx-5">{title.mediaYear}</div>
                <div>{kFormatter(title.voteCount)} voters</div>
              </div>
              <p className={`${styles["multiline-ellipsis"]} mt-3`}>{title.overview}</p>
              <div className="my-4">
                <h5>Cast:</h5>
                <div className="d-flex">
                  {Array.from({ length: title.cast }).map((e, i) => (
                    <PiUserCircleFill key={i} size="3em"></PiUserCircleFill>
                  ))}
                </div>
              </div>
              <button type="button" className={`btn ${title.trailer == undefined ? "btn-danger" : "btn-primary"} border-0 p-3 border-radius-infinite`}>
                <a className="text-decoration-none text-white " target="_blank" href={`${title.trailer == undefined ? `https://www.google.com/search?q=${encodeURIComponent(title.mediaName).replace(/%20/g, "+").replace(/%3A/g, ":")}` : `https://www.youtube.com/watch?v=${title.trailer}/`}`}>
                  {title.trailer == undefined ? "Trailer Not Found" : "View Trailer"}
                </a>
              </button>
              <IoIosArrowDown key={title.id} onClick={(e:React.MouseEvent) => toggleReviewDropdown(e, title.id)} className={`${classNames(styles["dropdown-review-arrow"], { [styles["rotate"]]: isReviewOpen[title.id] })}`} color="white" size="3.5em"></IoIosArrowDown>
            </div>
          </div>
          <div className={`${styles["review-container-accordion"]} ${containerClassName} ${styles["accordion-content"]} ${classNames({ [styles["active"]]: isReviewOpen[title.id] })}`}>
            <div className="d-flex flex-column p-3">
            <hr className="mx-4"></hr>
            <div className="text-center align-self-center">Write a review · {title.mediaName} ({title.mediaYear})</div>
              <div className="d-flex justify-content-between">
              <div className={`${styles["rate"]}`}>
              {[5,4,3,2,1].map((value,i)=> (
  <React.Fragment key={i}>
  <input type="radio" id={`star${value}-${title.id}`} name={`${title.id}`} value={value} />
                  <label htmlFor={`star${value}-${title.id}`} title={`${value} Star`}>
                    {value} stars
                  </label>
                </React.Fragment>
              ))}
            </div>
              <div className="align-self-center"><span className="text-success">Ben</span></div>
              </div>
            <textarea placeholder="Your feedback helps others decide which movies to watch." className={`mt-3 form-control light-border-input ph-color-white`} maxLength={3000} rows={9}></textarea>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

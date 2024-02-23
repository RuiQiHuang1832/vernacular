import React from "react";
import { MediaData } from "./CurrentComponent";
import Image from "next/image";
import styles from "@/styles/Playlist-MediaReview.module.css";
import { FaStar } from "react-icons/fa";
import { kFormatter } from "@/helpers/numberFormatter";
import { PiUserCircleFill } from "react-icons/pi";
import _ from "lodash";

interface MediaReviewProps {
  selectedTitles: MediaData[];
  currentPage:number;
}

export default function MediaReview(props: MediaReviewProps) {
  return (
    <div className={`container mt-5 ${props.currentPage <= 2 ?"d-none": ""}`}>
      <div className="row justify-content-center">
        {props.selectedTitles.map((title, i) => (
          <div key={i} className="d-flex mt-5" style={{ width: "60em", height: "30em", background: "#13161F", borderRadius: "10px" }}>
            <div style={{ transform: "translate(20px, -20px)" }}>
              <Image className="rounded" alt="movie pic" width="280" height="400" src={`https://image.tmdb.org/t/p/original/${title.mediaPoster}`}></Image>
            </div>
            <div style={{ width: "40em" }} className="p-5 ms-3">
              <h2>{title.mediaName}</h2>
              <p style={{color:"rgb(114 168 255)"}}>{title.genres.slice(0,3).join(", ")}</p>
              <div className="d-flex align-items-end">
              <div><FaStar color="yellow"></FaStar>&nbsp;<span className="align-middle">{title.voteAverage}</span></div>
              <div  className="mx-5">{title.mediaYear}</div>
              <div>{kFormatter(title.voteCount)} voters</div>
              </div>
              <p className={`${styles["multiline-ellipsis"]} mt-3`}>{title.overview}</p>
              <div className="my-4">
                <h5>Cast:</h5>
                <div className='d-flex'>
                  {Array.from({length:_.random(5,8)}).map((e,i) => (
                     <PiUserCircleFill key={i} size="3em"></PiUserCircleFill>
                  ))}
                </div>
              </div>
              <div>
                <h6><a target="_blank" href={`https://www.imdb.com/title/${title.imdb}/`}>View IMBD Trailer</a></h6>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

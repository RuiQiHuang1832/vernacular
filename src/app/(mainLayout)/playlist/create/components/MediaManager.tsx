'use client';
import { useState } from 'react';
import TypeOfMedia from './TypeOfMedia';
import MediaSelection from './MediaSelection';
import ProgressDashes from '@/components/ProgressDashes';
import styles from "@/styles/playlist-styles/Playlist.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import MediaReview from './MediaReview';
export interface MediaData {
  id: number;
  mediaName: string;
  mediaPoster: string;
  mediaYear: number | undefined;
  overview: string;
  voteAverage: number;
  voteCount: number;
  genres: number[];
  imdb:string;
  trailer:string | undefined;
  tagline:string;
  cast:number;
}


export default function MediaManager() {
    const [resetKey, setResetKey] = useState(0);


    const [currentComponent, setCurrentComponent] = useState<number>(1);
    //eg: [Anime, Movies, Shows..etc]
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

    //For movies
    const [selectedTitles, setSelectedTitles] = useState<MediaData[]>([]);

    
    //When user selects a media type
    const handleMediaSelect = (selected:string|null) => {
      setSelectedMedia(selected);
    };
    //When user adds a title
    const handleTitleAdd = (data:MediaData[]) => {
      setSelectedTitles(data);
    }
    const components = [
    
      {
        title: 'What type of media are you reviewing for?',
        component: <TypeOfMedia selectedMedia={selectedMedia} onMediaSelect={handleMediaSelect} />,
      },
      {
        title: `Choose up to 10 ${selectedMedia?.toLowerCase()} to review.`,
        component: <MediaSelection selectedMedia={selectedMedia} currentPage={currentComponent} selectedTitles={selectedTitles} onTitleAdd={handleTitleAdd}   />,
      },
      {
        title: `Here you can review the ${selectedTitles.length} selected media.`,
        component: <MediaReview selectedTitles={selectedTitles} currentPage={currentComponent} />,
      },
      // Add more steps as needed
    ];

   const handleContinue = () => {
    if (selectedMedia != null) {
      setCurrentComponent((prev) => prev + 1)
    }
    scrollToTop();
   }

   const handleBack = () => {
     //Should only reset when user is on the 2nd page.
     if (currentComponent == 2) {
       //states managed by parent that need to be reset go here:
       //MediaSelection reset
       setSelectedTitles([]);
       //handles reset for states managed by child
       setResetKey(() => Date.now());
     }

     //<- back
     setCurrentComponent((prev) => prev - 1);
   };

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling, use 'auto' for instant scrolling
    });
  }

  return (
    <>
  <ProgressDashes progressContainerClassName={"container"} length={3} current={currentComponent}></ProgressDashes>
  
  <Swiper navigation={{ nextEl: ".continue", prevEl: ".back" }}  modules={[Navigation]} speed={1000} allowTouchMove={false} draggable={false}  simulateTouch={false}  watchSlidesProgress={true} slidesPerView={1} spaceBetween={100}>
    {components.map((c,index) => (
        <SwiperSlide key={index}>
    <div key={resetKey} className="container">
      <h2 className="my-4 fw-light">{c.title}</h2>
      {c.component}
      </div>
      </SwiperSlide>
    ))}
      <br></br>
        <div className="text-end container">
    <button type="button" onClick={handleBack} className={`${styles["nav-back"]} btn me-3 fw-semibold back`}>Back</button> 
    {
    currentComponent === components.length 
    ? <button type="submit" className={`fw-semibold ${styles["nav-next"]}`}>Submit</button> 
    : <button type="button"  onClick={handleContinue} className={`${styles["nav-next"]} ${selectedMedia == null ? styles["disabled_swiper_button"] : ""} ${currentComponent == 2 && selectedTitles.length == 0 ? styles["disabled_swiper_button"] : ""}  fw-semibold btn continue`}>Continue</button>
    }
    
    </div>
      </Swiper>
    </>
  )
}
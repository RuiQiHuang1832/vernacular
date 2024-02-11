'use client';
import { useState } from 'react';
import TypeOfMedia from './TypeOfMedia';
import MediaSelection from './MediaSelection';
import ProgressDashes from '@/components/ProgressDashes';
import styles from "@/styles/Playlist.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

export default function CurrentComponent() {
    const [currentComponent, setCurrentComponent] = useState<number>(1);
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

    const handleMediaSelect = (selected:string|null) => {
      setSelectedMedia(selected);
    };

    const components = [
    
      {
        title: 'What type of media are you reviewing for?',
        component: <TypeOfMedia selectedMedia={selectedMedia} onMediaSelect={handleMediaSelect} />,
      },
      {
        title: `Choose up to 10 ${selectedMedia?.toLowerCase()} to review.`,
        component: <MediaSelection selectedMedia={selectedMedia} />,
      },
      // Add more steps as needed
    ];
  
   const handleContinue = () => {
    if (selectedMedia != null) {
      setCurrentComponent((prev) => prev + 1)
    }
   }
  
   const handleBack = () => {
    setCurrentComponent((prev) => prev - 1)
   }

  return (
    <>
  <ProgressDashes progressContainerClassName={"container"} length={5} current={currentComponent}></ProgressDashes>
  
  <Swiper navigation={{ nextEl: ".continue", prevEl: ".back" }}  modules={[Navigation]} speed={1000} allowTouchMove={false} draggable={false}  simulateTouch={false}  watchSlidesProgress={true} className={``} slidesPerView={1} spaceBetween={100}>
    {components.map((c,index) => (
        <SwiperSlide key={index}>
    <div className="container">
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
    ? <button type="submit" className={`fw-semibold btn ${styles["nav-next"]}`}>Submit</button> 
    : <button type="button"  onClick={handleContinue} className={`${styles["nav-next"]} ${selectedMedia == null ? styles["disabled_swiper_button"] : ""}  fw-semibold btn continue`}>Continue</button>
    }
    
    </div>
      </Swiper>
    </>
  )
}
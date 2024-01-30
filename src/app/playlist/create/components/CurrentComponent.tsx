'use client';
import { useState } from 'react';
import TypeOfMedia from './TypeOfMedia';
import MediaSelection from './MediaSelection';
import ProgressDashes from '@/components/ProgressDashes';
import styles from "@/styles/Playlist.module.css"
export default function CurrentComponent() {
    const [currentComponent, setCurrentComponent] = useState<number>(1);
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
    const [buttonError, setButtonError] = useState('');

    let currentView;

    const handleMediaSelect = (selected:string) => {
      setSelectedMedia(selected);
    };

    switch (currentComponent) {
      case 1:
        currentView = <>
        <h2 className="my-4">What type of media are you reviewing for?</h2>
        <TypeOfMedia selectedMedia={selectedMedia} onMediaSelect={handleMediaSelect}></TypeOfMedia> </>
        break;
      case 2:
        currentView = <MediaSelection selectedMedia={selectedMedia}></MediaSelection>
        break;
    }
  
   const handleContinue = () => {
    if (selectedMedia == null) {
      setButtonError(styles["cannot-continue"]);
      setTimeout(() => {
        setButtonError(''); // Revert to original color
      }, 1000);
    } else {
      setCurrentComponent((prev) => prev + 1)

    }
   }
  
   const handleBack = () => {
    setCurrentComponent((prev) => prev - 1)
  
   }
  return (
    <>
  <ProgressDashes length={5} current={currentComponent}></ProgressDashes>
    {currentView}
    <br></br>
    <div className="text-end">
    {currentComponent >= 2 ? <button onClick={handleBack} className={`${styles["nav-back"]} btn me-3 fw-semibold`}>Back</button> : <></>}
    <button onClick={handleContinue} className={`${styles["nav-next"]} fw-semibold btn ${buttonError}`}>Continue</button>
    </div>
    </>
  )
}

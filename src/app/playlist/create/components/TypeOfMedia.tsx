import { useState } from "react";
import styles from "@/styles/playlist-styles/Playlist-TypeOfMedia.module.css";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
//icons
import { IoIosAppstore, IoLogoGameControllerB, IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { SiMyanimelist } from "react-icons/si";
import { MdLocalMovies } from "react-icons/md";
import { RiSlideshow3Fill } from "react-icons/ri";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { PiApplePodcastsLogo } from "react-icons/pi";
import { GiTabletopPlayers } from "react-icons/gi";
import { IconType } from "react-icons";

interface Media {
  type:string;
  icon: IconType;
  active: boolean
}

const media: Media[] = [
  { type: "Anime", icon: SiMyanimelist, active:false },
  { type: "Movies", icon: MdLocalMovies,active:true },
  { type: "Shows", icon: RiSlideshow3Fill,active:false },
  { type: "Songs", icon: BsFillMusicPlayerFill,active:false },
  { type: "Games", icon: IoLogoGameControllerB,active:false },
  { type: "Podcasts", icon: PiApplePodcastsLogo,active:false },
  { type: "Books", icon: FaBook,active:false },
  { type: "Board Games", icon: GiTabletopPlayers,active:false },
  { type: "Apps", icon: IoIosAppstore,active:false },
];

const breakpoints = {
  // Define breakpoints based on screen width
  320: {
    slidesPerView: 1,
  },
  650: {
    slidesPerView: 2,
  },
  900: {
    slidesPerView: 3,
  },
  1100: {
    slidesPerView: 4,
  },
};

interface TypeOfMedia {
  onMediaSelect:(selected:string|null) => void;
  selectedMedia:string|null
}

export default function TypeOfMedia(props:TypeOfMedia) {
  const [activeMedia, setActiveMedia] = useState<string | null>(props.selectedMedia);
  const handleClick = (media: string) => {
    if (media == activeMedia) {
      setActiveMedia(null)
      props.onMediaSelect(null)
    } else  {
      setActiveMedia(media);
      props.onMediaSelect(media)
    }
   
  };
  return (
    <>
      <Swiper navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", disabledClass: "disabled_swiper_button" }} breakpoints={breakpoints} breakpointsBase="container" pagination={{ dynamicBullets: true, clickable: true, bulletClass: `${styles["bullet-color"]} swiper-pagination-bullet` }} modules={[Navigation, Pagination]} watchSlidesProgress={true} className={`${styles["mySwiper"]} mySwiper `} spaceBetween={30}>
        {media.map((media, index) => (
          <SwiperSlide  key={index}>
            {activeMedia == media.type ? (
              <div className={styles["checkmark"]}>
                <FaCheck color="black" />
              </div>
            ) : (
              <></>
            )}
            <div  onClick={() => handleClick(media.type)} className={`${media.active === false ? styles["disabled-media-selection"] : ""} ${styles["option"]} ${activeMedia == media.type ? styles["highlight-media"] : ""}`}>
              <media.icon size="3em" color={`${activeMedia == media.type ? "black" : "#95CD4D"}`} />
              <div className="mt-3">{media.type}</div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next">
          <IoIosArrowDroprightCircle color="white" size="3em" />
        </div>
        <div className="swiper-button-prev">
          <IoIosArrowDropleftCircle color="white" size="3em"/>
        </div>
      </Swiper>
    </>
  );
}

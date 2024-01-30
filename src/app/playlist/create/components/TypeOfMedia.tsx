import { useState } from "react";
import styles from "@/styles/Playlist.module.css";
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
}

const media: Media[] = [
  { type: "Anime", icon: SiMyanimelist },
  { type: "Movies", icon: MdLocalMovies },
  { type: "Shows", icon: RiSlideshow3Fill },
  { type: "Songs", icon: BsFillMusicPlayerFill },
  { type: "Games", icon: IoLogoGameControllerB },
  { type: "Podcasts", icon: PiApplePodcastsLogo },
  { type: "Books", icon: FaBook },
  { type: "Board Games", icon: GiTabletopPlayers },
  { type: "Apps", icon: IoIosAppstore },
];

const breakpoints = {
  // Define breakpoints based on screen width
  320: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
};

interface TypeOfMedia {
  onMediaSelect:(selected:string) => void;
  selectedMedia:string|null
}

export default function TypeOfMedia(props:TypeOfMedia) {
  const [activeMedia, setActiveMedia] = useState<string | null>(props.selectedMedia);
  const handleClick = (media: string) => {
    setActiveMedia(media);
    props.onMediaSelect(media)
  };
  return (
    <>
      <Swiper navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", disabledClass: "disabled_swiper_button" }} breakpoints={breakpoints} pagination={{ dynamicBullets: true, clickable: true, bulletClass: `${styles["bullet-color"]} swiper-pagination-bullet` }} modules={[Navigation, Pagination]} style={{ borderRadius: "10px", padding: "3em 3em" }} watchSlidesProgress={true} className={`${styles["mySwiper"]} mySwiper`} slidesPerView={4} spaceBetween={30}>
        {media.map((media, index) => (
          <SwiperSlide  key={index}>
            {activeMedia == media.type ? (
              <div className={styles["checkmark"]}>
                <FaCheck color="black" />
              </div>
            ) : (
              <></>
            )}
            <div  onClick={() => handleClick(media.type)} className={`${styles["option"]} ${activeMedia == media.type ? styles["highlight-media"] : ""}`}>
              <media.icon size="3em" color={`${activeMedia == media.type ? "black" : "#95CD4D"}`} />
              <div className="mt-3">{media.type}</div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next">
          <IoIosArrowDroprightCircle color="white" size="5em" />
        </div>
        <div className="swiper-button-prev">
          <IoIosArrowDropleftCircle color="white" />
        </div>
      </Swiper>
    </>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import image_4 from "@/assets/images/home/illustration-data-4.png";
import HeaderWithImageAndParagraph from "@/components/HeaderWithImageAndParagraph";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill } from "react-icons/bs";
import { IconType } from "react-icons";
import { sections } from "@/global/sectionsData";
import Arrows, { ScrollableArrow } from "@/components/Arrows";
import Button from "@/components/Button";
import classNames from "classnames";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";


const icons: IconType[] = [BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill];

export default function Home() {
  const mainClass:string = classNames("col-xxl-6 col-xl-7 col d-flex align-items-center order-xl-1 order-2 justify-content-lg-start justify-content-center");
  const imageClass:string = classNames("col-xxl-6 col-xl-5 d-flex justify-content-center order-xl-2 order-1");
  const approachSection:string = classNames("text-center mx-auto pb-md-5 col-xl-6 col-10 col-lg-8");
  return (
    <div className="text-white">
      <div className="container-lg mt-5 mb-5 ">
        <div className={`row gx-0 mb-5`}>
          <div className={mainClass}>
            <div className="text col-10 col-lg-12 col-xl-10">
              <h1 className={`${styles["header"]} responsiveHeader`}>
                <Arrows></Arrows>Elevate <span className="text-success">Entertainment:</span>
                <span className="d-none d-xl-inline">
                  <br />
                </span>{" "}
                Your <span className="text-success">Playlist</span> Playground
              </h1>
              <hr />
              <p>
                Craft and curate your ultimate media collection.&nbsp;
                <span className="d-none d-xl-inline">
                  <br />
                </span>
                Explore, rate, and design playlists tailored to your tastes.
              </p>
              <Button color="btn-success" href="/login" text="GET STARTED" width={"auto"}></Button>
            </div>
          </div>
          <div className={imageClass}>
            <div className="image">
              <Image src={image_4.src} alt="Home page logo"  width={660} height={460} priority={true} className={styles["objectFit"]} quality={100} />
            </div>
          </div>
        </div>
        <ScrollableArrow></ScrollableArrow>
      </div>
      {/* <span className="d-none d-xxl-inline">
        <ScrollProgressBar startHeight={40} startColor="#172B4D" distance={24.99} icons={icons}></ScrollProgressBar>
      </span> */}
      <section className={`${approachSection} `}>
        <h1 className="fw-bolder">
          Our <span className="text-success">Approach</span>
        </h1>
        <hr></hr>
        <p>Explore a new dimension of media cataloging. Our intuitive web app lets you effortlessly create, curate, and explore personalized playlists, transforming how you organize and enjoy your favorite content.</p>
      </section>
        {mapObjectToComponent(sections, HeaderWithImageAndParagraph)}
    </div>
  );
}

"use client";
import type { Metadata } from "next";
import image_4 from "@/assets/images/illustration-data-4.png";
import HeaderWithImageAndParagraph from "@/components/HeaderWithImageAndParagraph";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill } from "react-icons/bs";
import { IconType } from "react-icons";
import { sections } from "@/global/sectionsData";
import Arrows, { ScrollableArrow } from "@/components/Arrows";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Home - Vernacular",
  description: "Personal Media Catalog & Reviews Hub",
};

const icons: IconType[] = [BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill];

export default function Home() {
  return (
    <div className="text-white">
      <div className="container-lg mt-5 mb-5">
        <div className={`row gx-0 mb-5`}>
          <div className={`col-xxl-6 col-xl-7 col-lg-12 col-md-12 d-flex align-items-center order-xl-1 order-2 justify-content-lg-start justify-content-center`}>
            <div className="text col-10 col-lg-12 col-xl-10 col-md-10">
              <h1 className={`${styles["header"]} `}>
                <Arrows></Arrows>Elevate <span className="text-success">Entertainment:</span>   
                <span className="d-none d-xl-inline"><br/></span> Your <span className="text-success">Playlist</span> Playground
              </h1>
              <hr />
              <p>
                Craft and curate your ultimate media collection.&nbsp;
                <span className="d-none d-xl-inline"><br/></span>
                Explore, rate, and design playlists tailored to your tastes.
              </p>
              <Button color="btn-success" href="/login" text="GET STARTED" width={"auto"}></Button>
            </div>
          </div>
          <div className={`col-xxl-6 col-xl-5 d-flex justify-content-center order-xl-2 order-1`}>
            <div className="image">
        <Image
          src={image_4.src}
          alt="Home page logo"
          width={704}
          height={500}
          className={styles['objectFit']}
          quality={100}
        />
            </div>
          </div>
        </div>
        <ScrollableArrow></ScrollableArrow>
      </div>
      <span className="d-none d-xxl-inline">
      <ScrollProgressBar startHeight={40} startColor="#172B4D" distance={24} icons={icons}></ScrollProgressBar>
      </span>
      <section className="text-center mx-auto pb-md-5 col-xl-6 col-10 col-lg-8" >
        <h1 className="fw-bolder">
          Our <span className="text-success">Approach</span>
        </h1>
        <hr></hr>
        <p>Explore a new dimension of media cataloging. Our intuitive web app lets you effortlessly create, curate, and explore personalized playlists, transforming how you organize and enjoy your favorite content.</p>
      </section>

      {sections.map((section, index) => (
        <HeaderWithImageAndParagraph key={index} {...section} />
      ))}
    </div>
  );
}

"use client";
import type { Metadata } from "next";
import image_4 from "@/assets/images/illustration-data-4.png";
import HeaderWithImageAndParagraph from "@/components/HeaderWithImageAndParagraph";
import Image from "next/image";
import styles from "@/styles/page.module.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill } from "react-icons/bs";
import { IconType } from "react-icons";
import { sections } from "@/global/sectionsData";
import Arrows, { ScrollableArrow } from "@/components/Arrows";

export const metadata: Metadata = {
  title: "Home - Vernacular",
  description: "Personal Media Catalog & Reviews Hub",
};

const icons: IconType[] = [BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill];

export default function Home() {
  return (
    <div className="text-white">
      <div className="container mt-5 mb-5">
        <div className={`row gx-0 mb-5`}>
          <div className={`col-6 d-flex align-items-center `}>
            <div className="text col-10">
              <h1 className={`${styles["header"]}`}>
                <Arrows></Arrows>Elevate <span className="text-success">Entertainment:</span> <br /> Your <span className="text-success">Playlist</span> Playground
              </h1>
              <hr />
              <p>
                Craft and curate your ultimate media collection.
                <br />
                Explore, rate, and design playlists tailored to your tastes.
              </p>
            </div>
          </div>
          <div className={`col-6 d-flex justify-content-center`}>
            <div className="image">
              <Image src={image_4.src} alt="Logo" width={704} height={499} quality={100} />
            </div>
          </div>
          <ScrollableArrow></ScrollableArrow>
        </div>
      </div>
      <ScrollProgressBar startHeight={40} startColor="#172B4D" distance={24} icons={icons}></ScrollProgressBar>
      <section className="text-center mx-auto pb-5" style={{ width: "50%" }}>
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

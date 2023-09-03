"use client";
import type { Metadata } from "next";
import image_1 from "@/assets/images/illustration-data-1.png";
import image_2 from "@/assets/images/illustration-data-2.png";
import image_3 from "@/assets/images/illustration-data-3.png";
import image_4 from "@/assets/images/illustration-data-4.png";
import image_avocado from "@/assets/images/illustration-avocado.png";
import HeaderWithImageAndParagraph from "@/components/HeaderWithImageAndParagraph";
import Image from "next/image";
import styles from "@/styles/page.module.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill } from "react-icons/bs";
import { IconType } from "react-icons";

export const metadata: Metadata = {
  title: "Home - Vernacular",
  description: "Personal Media Catalog & Reviews Hub",
};

const icons: IconType[] = [
  BsFill0CircleFill,
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
];

export default function Home() {
  
  return (
    <div className="text-white">
      <div className="container mt-5 mb-5">
        <div className={`row gx-0 `}>
          <div className={`col-6 d-flex align-items-center `}>
            <div className="text col-9">
              <h1 className={`${styles["header"]}`}>
                Elevate <span className="text-success"> Entertainment:</span> <br /> Your <span className="text-success">Playlist</span> Playground
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
        </div>
      </div>
      <ScrollProgressBar startHeight={40} startColor="#172B4D" distance={24} icons={icons}></ScrollProgressBar>

      <section className="text-center mx-auto " style={{ width: "50%" }}>
        <h1 className="fw-bolder">Our Approach</h1>
        <hr></hr>
        <p>Explore a new dimension of media cataloging. Our intuitive web app lets you effortlessly create, curate, and explore personalized playlists, transforming how you organize and enjoy your favorite content.</p>
      </section>

      <HeaderWithImageAndParagraph id="anchor-1" header={<>Discover Seamless Multimedia Management</>} paragraph={<>Experience the Power of Streamlined Multimedia Management. Our innovative web app empowers you to effortlessly organize, curate, and enjoy your favorite media. Whether it&apos;s movies, TV shows, or other content, our platform provides a seamless and intuitive solution.</>} imageSrc={image_3.src} imageWidth={350} imageHeight={350} direction="flex-row-reverse" learnMore="Learn more about Seamless Multimedia Management" />

      <HeaderWithImageAndParagraph id="anchor-2" header={<>Simplify Your Multimedia Lifestyle</>} paragraph={<>Say Goodbye to Chaos. Our web app transforms multimedia management into a hassle-free experience. Easily create and customize playlists, rate and review your media, and discover new content that resonates with your unique preferences.</>} imageSrc={image_2.src} imageWidth={350} imageHeight={350} direction="flex-row" learnMore="Learn more about Our Customizable Playlist" />

      <HeaderWithImageAndParagraph id="anchor-3" header={<>Elevate Your Media Collection</>} paragraph={<>Take Your Media Collection to New Heights. Unlock the potential of personalized playlists that reflect your taste. With our platform, you&apos;re not just consuming content – you&apos;re curating a tailored entertainment experience.</>} imageSrc={image_1.src} imageWidth={463} imageHeight={265} direction="flex-row-reverse" learnMore="Learn more about Vernacular's solutions" />
      <HeaderWithImageAndParagraph id="anchor-4"
        header={<>Ready to elevate your multimedia management?</>}
        paragraph={
          <>
            <button className={"btn btn-success"}>Get Started</button>
            <button className={"btn btn-success"}>Learn More</button>
          </>
        }
        imageSrc={image_avocado.src}
        imageWidth={403}
        imageHeight={380}
        direction="flex-row"
        learnMore=""
      />
      </div>

  );
}

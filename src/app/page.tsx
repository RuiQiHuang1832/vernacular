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
import step1 from "@/assets/images/home/step_1.png";
import step2 from "@/assets/images/home/step_2.png";
import step3 from "@/assets/images/home/step_3.png";
import { accordionData } from '../global/accordionData';

const icons: IconType[] = [BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill];

export default function Home() {
  const mainClass: string = classNames("col-xxl-6 col-xl-7 col d-flex align-items-center order-xl-1 order-2 justify-content-lg-start justify-content-center");
  const imageClass: string = classNames("col-xxl-6 col-xl-5 d-flex justify-content-center order-xl-2 order-1");
  const approachSection: string = classNames("text-center mx-auto pb-md-5 col-xl-6 col-10 col-lg-8");
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
              <Image src={image_4.src} alt="Home page logo" width={660} height={460} priority={true} className={styles["objectFit"]} quality={100} />
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
      <section className="d-flex flex-column justify-content-center p-5 p-xl-0" style={{ minHeight:"100vh"}}>
        <div  className={`text-center mx-auto col-10`}>
          <p>HOW VERNACULAR WORKS</p>
          <h1 className="fw-bolder">Three steps to better media management</h1>
          <hr></hr>
        </div>
        <div className={`${styles["step-grid"]} text-center col-10 mx-auto`}>
          <div className="mt-3 col-10">
            <Image src={step1.src} width={50} height={80} alt="step 1" className={`mb-4`}></Image>
            <h4>Select Media Type</h4>
            <p className="fw-light">Users choose the type of media they want to review, such as movies, TV shows, or music.</p>
          </div>
          <div className="mt-3 col-10">
            <Image src={step2.src} width={50} height={80} alt="step 2" className={`mb-4`}></Image>
            <h4>Choose Specific Title</h4>
            <p className="fw-light">After selecting the media type, users pick a specific title (up to 10) within that category.</p>
          </div>
          <div className="mt-3 col-10">
            <Image src={step3.src} width={50} height={80} alt="step 3" className={`mb-4`}></Image>
            <h4>Review and Rate</h4>
            <p className="fw-light">Users review the selected media, providing a star rating (1-5) and written feedback.</p>
          </div>
        </div>
        <div style={{position:"relative"}} className="arrows d-none d-xl-block ">
          <div style={{left:"29%"}} className={`${styles["arrow"]}`}>
            <svg width="185" height="36" viewBox="0 0 185 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M183.936 34.6617C184.345 34.5971 184.624 34.2131 184.56 33.8039L183.507 27.1365C183.443 26.7273 183.059 26.448 182.65 26.5125C182.241 26.5771 181.961 26.9611 182.026 27.3703L182.961 33.2969L177.034 34.2323C176.625 34.2968 176.346 34.6808 176.41 35.09C176.475 35.4991 176.859 35.7785 177.268 35.7139L183.936 34.6617ZM1.102 28.5504C45.4253 -6.35581 123.361 -9.12798 183.378 34.5274L184.26 33.3143C123.766 -10.6887 45.0856 -7.99759 0.17394 27.372L1.102 28.5504Z" fill="white" />
            </svg>
          </div>
          <div style={{left:"59%"}} className={`${styles["arrow"]}`}>
            <svg width="185" height="36" viewBox="0 0 185 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M183.936 34.6617C184.345 34.5971 184.624 34.2131 184.56 33.8039L183.507 27.1365C183.443 26.7273 183.059 26.448 182.65 26.5125C182.241 26.5771 181.961 26.9611 182.026 27.3703L182.961 33.2969L177.034 34.2323C176.625 34.2968 176.346 34.6808 176.41 35.09C176.475 35.4991 176.859 35.7785 177.268 35.7139L183.936 34.6617ZM1.102 28.5504C45.4253 -6.35581 123.361 -9.12798 183.378 34.5274L184.26 33.3143C123.766 -10.6887 45.0856 -7.99759 0.17394 27.372L1.102 28.5504Z" fill="white" />
            </svg>
          </div>
        </div>
      </section>

      <section style={{ minHeight:"100vh"}} className={`d-flex flex-column justify-content-center p-5 ${styles["section-container-style-lighter"]}`}>
        <div className="col-lg-7 col-md-9 col text-center align-self-center mb-4">
        <h1>Want to learn more?</h1>
        <p className="fw-light">We&apos;ve Compiled Answers to Frequently Asked Questions!</p>
        </div>
        <div className="home-page-accordion accordion col-lg-7 col  col-md-9 mx-auto" id="accordionExample">
          {accordionData.map((accordion,i) => (
              <div key={accordion.id} className={`accordion-item py-4 ${styles["accordion-item-home"]} ${classNames({["border-bottom"]: i != accordionData.length - 1})}`}>
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`} aria-expanded="true" aria-controls={accordion.id}>
                {accordion.question}
                </button>
              </h2>
              <div id={accordion.id} className="accordion-collapse collapse">
                <div className="accordion-body">
                {accordion.answer}
                </div>
              </div>
            </div> 
          ))}
       </div>
      </section>
    </div>
  );
}

{
  /* How to do images */
}
{
  /* <Image src={howtoStep1.src}  width="0" height="0" sizes="100vw" className="w-75 h-auto" alt="Home page logo" priority={true} quality={100} /> */
}

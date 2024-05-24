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
import { accordionData } from "@/global/accordionData";
import { stepData, toolData } from "@/global/stepData";
import example from "@/assets/images/home/example.png";
import { FaCheck } from "react-icons/fa";


// used for scrollProgressBar
// const icons: IconType[] = [BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill];


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
              <Button bootstrapStyle="mt-3" buttonColor={{ cssColor: "#1D8754" }} href="/login" radius="10px" padding="20px" width="auto" type="button">
                GET STARTED
              </Button>
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
      <section style={{ paddingBottom: "6rem", paddingTop: "6rem" }}>{mapObjectToComponent(sections.slice(0, -1), HeaderWithImageAndParagraph)}</section>
      <section id="howitworks" className={`d-flex flex-column justify-content-center p-5 p-xl-0 ${styles["section-container-style-lighter"]}`}>
        <div style={{ paddingBottom: "6rem", paddingTop: "6rem" }}>
          <div style={{ maxWidth:"42rem" }} className={`text-center mx-auto col-10 mb-5 `}>
            <h1  className="fw-bolder mb-4">Three steps to better media management</h1>
            <p className="fs-6 fw-light">We believe great software tools unleash your creative potential while fading into the background.</p>

          </div>
          <div className={`${styles["step-grid"]} text-center col-10 mx-auto`}>
            {stepData.map((data) => (
              <div key={data.id} className="mt-3 col-10">
                <Image src={data.source.src} width={50} height={80} alt={data.id} className={`mb-4`}></Image>
                <h4>{data.title}</h4>
                <p className="fw-light">{data.description}</p>
              </div>
            ))}
          </div>
          <div style={{ position: "relative" }} className="arrows d-none d-xl-block ">
            <div style={{ left: "29%" }} className={`${styles["arrow"]}`}>
              <svg width="185" height="36" viewBox="0 0 185 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M183.936 34.6617C184.345 34.5971 184.624 34.2131 184.56 33.8039L183.507 27.1365C183.443 26.7273 183.059 26.448 182.65 26.5125C182.241 26.5771 181.961 26.9611 182.026 27.3703L182.961 33.2969L177.034 34.2323C176.625 34.2968 176.346 34.6808 176.41 35.09C176.475 35.4991 176.859 35.7785 177.268 35.7139L183.936 34.6617ZM1.102 28.5504C45.4253 -6.35581 123.361 -9.12798 183.378 34.5274L184.26 33.3143C123.766 -10.6887 45.0856 -7.99759 0.17394 27.372L1.102 28.5504Z" fill="white" />
              </svg>
            </div>
            <div style={{ left: "59%" }} className={`${styles["arrow"]}`}>
              <svg width="185" height="36" viewBox="0 0 185 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M183.936 34.6617C184.345 34.5971 184.624 34.2131 184.56 33.8039L183.507 27.1365C183.443 26.7273 183.059 26.448 182.65 26.5125C182.241 26.5771 181.961 26.9611 182.026 27.3703L182.961 33.2969L177.034 34.2323C176.625 34.2968 176.346 34.6808 176.41 35.09C176.475 35.4991 176.859 35.7785 177.268 35.7139L183.936 34.6617ZM1.102 28.5504C45.4253 -6.35581 123.361 -9.12798 183.378 34.5274L184.26 33.3143C123.766 -10.6887 45.0856 -7.99759 0.17394 27.372L1.102 28.5504Z" fill="white" />
              </svg>
            </div>
          </div>
          
          <div style={{ paddingTop: "6rem", maxWidth:"35rem" }} className={`text-center mx-auto col-10 my-5`}>
            <h1 className="fw-bold mb-4">Power tools for the discerning reviewers</h1>
            <p className="fs-6 fw-light">We prefer a quality workflow over a quantity of features, but we have plenty of those too.</p>
          </div>
          <div className={`${styles["tool-grid"]} text-center mx-auto`}>
            {toolData.map((data,i) => (
              <div key={i} style={{border:"1px solid rgb(144 144 144)"}} className={`${styles["grid-item"]} mt-3 px-3 py-5`}>
              <data.source size="3em" color="green" className="mb-3"></data.source>
                <h6 className="my-4">{data.title}</h6>
                <p className="fw-light">{data.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <p className="text-decoration-underline text-success fs-4 mb-5 fw-light">See our complete list of features</p>
            <blockquote style={{rowGap:"3em", maxWidth:"50em"}} className="d-flex flex-column align-items-center mx-auto">
              <div  className="fst-italic fs-4 fw-light">&ldquo; Thanks to the intuitive design, I was able to dive right into reviewing and exploring new media. It’s easy to connect with other users and discover great recommendations at my own pace. &rdquo;</div>
              <div className="d-flex ">
                <div style={{letterSpacing:".1em"}}>BEN</div>
                <span className="mx-2">/</span> 
              <div style={{color:"#627280"}}>Vernacular Community Member</div>
              </div>
              </blockquote>
            </div>
        </div>
      </section>
      <section id="creativeProcess" className={`d-flex flex-column justify-content-center p-5 p-xl-0 ${styles["section-container-style-black"]}`}>
        <div style={{ paddingBottom: "6rem" }}>
          <div style={{ paddingTop: "6rem", maxWidth:"35rem" }} className={`text-center mx-auto col-10 my-5`}>
            <h1 className="fw-bold mb-4">Simplify your creative process</h1>
            <p className="fs-6 fw-light">Tame the chaos of scattered content and focus on your stories.</p>
          </div>
          <div className={`d-flex  flex-lg-row flex-column mx-auto ${styles["creative-process-container"]}`}>
            <div style={{flex:"1 0 auto"}} className="d-flex flex-column col-lg-3 col">
              <blockquote className="fst-italic fw-light">“I switched to Vernacular because everything was intuitive and fast! Nothing interrupting your flow.”</blockquote>
              <p className="fst-italic">— Ben</p>
              <div className="my-3">
              <h6 className="mb-3"><FaCheck></FaCheck>&#9;TAGS & PROPERTIES</h6>
              <p className="fw-light">Efficiently categorize and display your content when and where you need it.</p>
              </div>
              <div  className="my-3">
              <h6 className="mb-3"><FaCheck></FaCheck>&#9;TEMPLATES</h6>
              <p className="fw-light">Create and reuse templates for consistent page layouts and faster content creation.</p>
              </div>
              <div  className="my-3">
              <h6 className="mb-3"><FaCheck></FaCheck>&#9;COLLABORATIVE BOARDS</h6>
              <p className="fw-light">Craft intricate story flows, trace family trees, and unravel conspiracies with our collaborative whiteboards.</p>
              </div>
            </div>
              <div style={{flex:"1 1 auto"}} className="align-self-center text-lg-end text-center ">
              <Image src={example.src}  width="0" height="0" sizes="100vw" style={{width:"90%"}} className="rounded h-100" alt="example" priority={true} quality={100} /> 
              </div>
          </div>
        </div>
        <div style={{ columnGap: "5em", rowGap: "5em" }} className="d-flex justify-content-center flex-wrap p-5">
          <div className={`${styles["stats"]}`}>
            <h1>+2M</h1>
            <p className="fs-5">MEMBERS</p>
          </div>
          <div className={`${styles["stats"]}`}>
            <h1>{`>500`}</h1>
            <p className="fs-5">REVIEWS CREATED</p>
          </div>
          <div className={`${styles["stats"]}`}>
            <h1>60K</h1>
            <p className="fs-5">DAILY VISITS</p>
          </div>
          <div className={`${styles["stats"]}`}>
            <h1>~120</h1>
            <p className="fs-5">REVIEWS READ DAILY</p>
          </div>
        </div>
        <div style={{ paddingTop: "6rem", maxWidth:"35rem" }} className={`text-center mx-auto col-10 my-5`}>
            <h1 className="fw-bold mb-4">Supporting thousands of games, streams, and creative communities</h1>
          </div>
      </section>
      <section id="Faq" className={`d-flex flex-column justify-content-center px-5 ${styles["section-container-style-black"]} ${styles["view-height-alternative"]}`}>
        <div className="col-lg-7 col-md-9 col text-center align-self-center mb-4">
          <h1>Frequently Asked Questions</h1>
          <p className="fw-light">We&apos;ve Compiled Answers to Frequently Asked Questions!</p>
        </div>
        <div className="home-page-accordion accordion col-lg-7 col  col-md-9 mx-auto">
          {accordionData.map((accordion, i) => (
            <div key={accordion.id} className={`accordion-item py-4 ${styles["accordion-item-home"]} ${classNames({ ["border-bottom"]: i != accordionData.length - 1 })}`}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`} aria-expanded="true" aria-controls={accordion.id}>
                  {accordion.question}
                </button>
              </h2>
              <div id={accordion.id} className="accordion-collapse collapse">
                <div className="accordion-body">{accordion.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {mapObjectToComponent([sections[sections.length - 1]], HeaderWithImageAndParagraph)}
    </div>
  );
}

{
  /* How to do images */
}
{
  /* <Image src={howtoStep1.src}  width="0" height="0" sizes="100vw" className="w-75 h-auto" alt="Home page logo" priority={true} quality={100} /> */
}

"use client";
import image_4 from "@/assets/images/home/illustration-data-4.png";
import HeaderWithImageAndParagraph from "@/components/HeaderWithImageAndParagraph";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import { sections } from "@/global/sectionsData";
import Arrows, { ScrollableArrow } from "@/components/Arrows";
import Button from "@/components/Button";
import classNames from "classnames";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";
import { stepData, toolData, statsData,quoteData,accordionData, arrowData, featuresData } from "@/global/homeData";
import example from "@/assets/images/home/example.png";
import { FaCheck } from "react-icons/fa";



// used for scrollProgressBar
// const icons: IconType[] = [BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill];
//  <span className="d-none d-xxl-inline">
//         <ScrollProgressBar startHeight={40} startColor="#172B4D" distance={24.99} icons={icons}></ScrollProgressBar>
//       </span> 

export default function Home() {
  return (
    <div className="text-white">
      <div className="container-lg mt-5 mb-5 ">
        <div className={`row gx-0 mb-5`}>
          <div className={`col-xxl-6 col-xl-7 col d-flex align-items-center order-xl-1 order-2 justify-content-lg-start justify-content-center`}>
            <div className="text col-10 col-lg-12 col-xl-10">
              <h1 className={`${styles["header"]} responsiveHeader`}>
                <Arrows></Arrows>Elevate <span className="text-success">Entertainment:&nbsp;</span>
                <span className="d-none d-xl-inline">
                  <br />
                </span>Your <span className="text-success">Playlist</span> Playground
              </h1>
              <hr />
              <p className="fw-light">
                Craft and curate your ultimate media collection.&nbsp;
                <span className="d-none d-xl-inline">
                  <br />
                </span>
                Explore, rate, and design playlists tailored to your tastes.
              </p>
              <Button bootstrapStyle="mt-3"  buttonColor={{ cssColor: "#1D8754" }} href="/login" radius="10px" padding="20px" width="auto" type="button">
                GET STARTED
              </Button>
            </div>
          </div>
          <div className={`col-xxl-6 col-xl-5 d-flex justify-content-center order-xl-2 order-1`}>
            <div className="image">
              <Image src={image_4.src} alt="Home page logo" width={660} height={460} priority={true} className={styles["objectFit"]} quality={100} />
            </div>
          </div>
        </div>
        <ScrollableArrow></ScrollableArrow>
      </div>
      <section id="approach" className={` mx-auto col-xl-6 col-10 col-lg-8 `}>
        <h1 className="fw-bolder text-center">
          Our <span className="text-success">Approach</span>
        </h1>
        <hr></hr>
        <p className="fw-light mb-0">Explore a new dimension of media cataloging. Our intuitive web app lets you effortlessly create, curate, and explore personalized playlists, transforming how you organize and enjoy your favorite content.</p>
      </section>
      <section style={{ padding: "6rem 0"}} className="fw-light">{mapObjectToComponent(sections, HeaderWithImageAndParagraph)}</section>
      <section id="howitworks" style={{ padding: "6rem 0"}} className={`d-flex flex-column justify-content-center px-4 px-xl-0 ${styles["section-container-style-lighter"]}`}>
          <div className={`col-md-10 col mb-5 ${styles["steps-container"]} text-wrap-balance`}>
            <h1 className="fw-bolder mb-4 ">3 steps to better media management</h1>
            <p className="fs-6 fw-light">We believe great software tools unleash your creative potential while fading into the background.</p>

          </div>
          <div  className={`${styles["step-grid"]} text-center col-md-10 col mx-auto text-wrap-balance`}>
            {stepData.map((data) => (
              <div key={data.id} className="mt-3 col-10">
                <Image src={data.source.src} width={50} height={80} alt={data.id} className={`mb-4`}></Image>
                <h4>{data.title}</h4>
                <p className="fw-light">{data.description}</p>
              </div>
            ))}
          </div>
          <div className={`${styles["arrows-container"]} arrows d-none d-xl-block`}>
            {arrowData.map((e,i) => (
                    <div key={i} style={{ left: e.left }} className={`${styles["arrow"]}`}>
                    <svg width="185" height="36" viewBox="0 0 185 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d={e.path} fill="white" />
                    </svg>
                  </div>
            ))}
          </div>
          
          <div  style={{ paddingTop: "6rem", maxWidth:"35rem" }} className={`text-wrap-balance text-center mx-auto col-md-10 col my-5`}>
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
              <div className="fst-italic fs-4 fw-light">&ldquo;Thanks to the intuitive design, I was able to dive right into reviewing and exploring new media. It’s easy to connect with other users and discover great recommendations at my own pace.&rdquo;</div>
              <div className="d-flex ">
                <div style={{letterSpacing:".1em"}}>BEN</div>
                <span className="mx-2">/</span> 
              <div style={{color:"#627280"}}>Vernacular Community Member</div>
              </div>
              </blockquote>
            </div>
      </section>
      <section id="creativeProcess"  style={{ padding: "6rem 0"}} className={`d-flex flex-column justify-content-center px-4 px-xl-0 ${styles["section-container-style-black"]}`}>
          <div style={{ maxWidth:"35rem" }} className={`text-center mx-auto col-md-10 col my-5 text-wrap-balance`}>
            <h1 className="fw-bold mb-4">Simplify your creative process</h1>
            <p className="fs-6 fw-light">Tame the chaos of scattered content and focus on your stories.</p>
          </div>
          <div className={`d-flex  flex-lg-row flex-column mx-auto ${styles["creative-process-container"]}`}>
            <div style={{flex:"1 0 auto"}} className="d-flex flex-column col-lg-3 col">
              <blockquote className="fst-italic fw-light">“I switched to Vernacular because everything was intuitive and fast! Nothing interrupting your flow.”</blockquote>
              <p className="fst-italic">— Ben</p>
              {featuresData.map((e,i) => (
                   <div key={i} className="my-3">
                   <h6 className="mb-3"><FaCheck></FaCheck>&#9;{e.name}</h6>
                   <p className="fw-light">{e.description}</p>
                   </div>
              ))}
            </div>
              <div style={{flex:"1 1 auto"}} className="align-self-center text-lg-end text-center ">
              <Image src={example.src}  width="0" height="0" sizes="100vw" className={`${styles["img-width"]} rounded h-100`} alt="example" priority={true} quality={100} /> 
              </div>
          </div>
        <div style={{paddingTop:"6rem"}} className={`${styles["stats-grid"]}`}>
            {statsData.map((e,i) => (
                 <div key={i} className={`${styles["stats"]}`}>
                 <h1 style={{fontSize:"48px"}}>{e.number}</h1>
                 <p className="fs-5">{e.description}</p>
               </div>
            ))}
        </div>
        <div style={{ paddingTop: "6rem", maxWidth:"35rem" }} className={`text-center mx-auto col-md-10 col my-5`}>
            <h1 className="fw-bold mb-4">Supporting thousands of games, streams, and creative communities</h1>
          </div>
          <div className={`${styles["quote-grid"]}`}>
              {quoteData.map((e,i) => (
                     <blockquote key={i} style={{rowGap:"3em", maxWidth:"50em"}} className="d-flex flex-column">
                     <div  className="fst-italic fs-5 fw-light">&ldquo;{e.description}.&rdquo;</div>
                     <div className="d-flex ">
                       <div style={{letterSpacing:".1em"}}>{e.name}</div>
                       <span className="mx-2">/</span> 
                     <div style={{color:"#627280"}}>{e.role}</div>
                     </div>
                     </blockquote>
              ))}
          </div>
      </section>
      <section id="Faq" style={{ padding: "6rem 0"}} className={`d-flex flex-column justify-content-center px-4 ${styles["section-container-style-lighter"]} ${styles["view-height-alternative"]}`}>
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
      <section  className={styles["bg-image"]} style={{ padding: "6rem 0"}}>
      <div  className={`text-center mx-auto col-md-10 col my-5 px-4`}>
            <h1 className={ `fw-bold mb-5 ${styles["fs-header"]} text-wrap-balance`}>Ready to upgrade your multimedia management?</h1>
            <div  className={ `fw-light mb-5 ${styles["fs-header"]}`}>Try Vernacular for free</div>
            <p  className={ `fw-light mb-5 ${styles["fs-para"]}`}>Jumpstart your creative journey in minutes.<br></br>
Load up an Example Project in one click for inspiration.</p>
<p className="mb-5">Free for 14 days and you keep anything you make.</p>
     <div className={`d-flex justify-content-center ${styles["btn-container"]}`}>
      <Button buttonColor={{bootstrapColor:"btn btn-success"}} href="/login" width={"16em"} radius="10px" padding="20px"   type="button">SIGN UP FOR FREE</Button>
       <Button buttonColor={{bootstrapColor:"btn btn-outline-success"}} href="/login" width={"16em"} radius="10px" padding="20px" type="button">LEARN MORE</Button>
       </div>
          </div>
       </section>
    </div>
  );
}



"use client";
import image_4 from "@/assets/images/home/illustration-data-4.png";
import settings from "@/assets/images/home/settings.png";
import HeaderWithImageAndParagraph from "@/components/HeaderWithImageAndParagraph";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import { sections } from "@/global/sectionsData";
import  { ScrollableArrow } from "@/components/Arrows";
import Button from "@/components/Button";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";
import { stepData, toolData, statsData, quoteData, arrowData, featuresData, imageData, accordionData } from "@/global/homeData";
import example from "@/assets/images/home/example.png";
import { FaCheck } from "react-icons/fa";
import Newsletter from "@/components/Newsletter";
import FadeInElement from "@/components/FadeInElement";
import { useEffect, useState, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import bbdo from "@/assets/svg/bbdo.svg"
import discord from "@/assets/svg/discord.svg"
import dropbox from "@/assets/svg/dropbox.svg"
import greenhouse from "@/assets/svg/greenhouse.svg"
import ideo from "@/assets/svg/ideo.svg"
import monday from "@/assets/svg/monday.svg"
import ncr from "@/assets/svg/ncr.svg"
import nyt from "@/assets/svg/nyt.svg"
import orange from "@/assets/svg/orange.svg"
import philips from "@/assets/svg/philips.svg"
import ted from "@/assets/svg/ted.svg"
import upwork from "@/assets/svg/upwork.svg"
import { BiSupport } from "react-icons/bi";
import { IoTriangle } from "react-icons/io5";
import newsletter from "@/assets/images/newsletter.png";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

import { Navigation, EffectFade } from "swiper/modules";
//icons
import { MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowLeft } from "react-icons/md";


// used for scrollProgressBar
// const icons: IconType[] = [BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill];
//  <span className="d-none d-xxl-inline">
//         <ScrollProgressBar startHeight={40} startColor="#172B4D" distance={24.99} icons={icons}></ScrollProgressBar>
//       </span>

export default function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const swiperRef = useRef(null);

  const [isComplete, setIsComplete] = useState(false);



  useEffect(() => {
    // Set isVisible to true when the component mounts (page load)
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const progressElement = document.querySelector('.progress-ref');
  
    const handleAnimationEnd = () => {
      setIsComplete(true); // Set to true when animation ends
    };
  
    if (progressElement) {
      progressElement.addEventListener('animationiteration', handleAnimationEnd);
    }
  
    return () => {
      if (progressElement) {
        progressElement.removeEventListener('animationiteration', handleAnimationEnd);
      }
    };
  }, []); // Only set up the event listener once

useEffect(() => {
  if (swiperRef.current && isComplete) {
    console.log("fired");
    swiperRef.current.slideNext(); // Change to the next slide
    setIsComplete(false); // Optionally reset state if needed for repeated usage
  }
}, [isComplete]);
  return (
    <div className="text-white">
      <div className="container-lg mt-5 mb-5 ">
        <div className={`row gx-0 mb-5`}>
          <div className={`col-xxl-6 col-xl-7 col d-flex align-items-center order-xl-1 order-2 justify-content-lg-start justify-content-center`}>
            <div className="text col-10 col-lg-12 col-xl-10">
              <h1 className={`${styles["header"]} responsiveHeader fade-in-from-bottom`}>
                {/* <Arrows></Arrows> */}
                <span style={{ color: "rgb(90,90,90)" }}>Elevate Entertainment&nbsp;</span>
                <span className="d-none d-xl-inline">
                  <br />
                </span>
                Your Playlist Playground.
              </h1>
              <hr style={{ color: "rgba(255, 255, 255, 0.25)" }} className="fade-in-from-bottom"></hr>
              <p className="fade-in-from-bottom fade-in-delay-1 mb-5">
                Craft and curate your ultimate media collection.&nbsp;
                <span className="d-none d-xl-inline">
                  <br />
                </span>
                Explore, rate, and design playlists tailored to your tastes.
              </p>
              <div className="fade-in-from-bottom fade-in-delay-2 ">
                <a href="" className={`${styles["get-started"]} d-inline-flex text-decoration-none text-white align-items-center learn-more-hover-circle`}>
                  <span className="me-5 fs-5 ">Get started — it&apos;s free!</span>
                  <div className="position-relative">
                    <BsArrowRight className={`${styles["icon"]}`} size="2em"></BsArrowRight>
                    <div className="hover-circle">
                      <svg width="60" height="60">
                        <circle stroke="currentColor" strokeWidth="2" fill="transparent" r="28" cx="30" cy="30"></circle>
                        <circle className="circle-animate" stroke="currentColor" strokeWidth="2" fill="transparent" r="28" cx="30" cy="30" strokeDasharray="175.929" strokeDashoffset="175.929"></circle>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={`col-xxl-6 col-xl-5 d-flex justify-content-center order-xl-2 order-1`}>
            <div className="image">
              <Image src={image_4.src} alt="Home page logo" width={660} height={460} priority={true} className={`${styles["objectFit"]} fade-in-image ${isVisible ? "animate" : ""}`} quality={100} />
            </div>
          </div>
        </div>
        <ScrollableArrow></ScrollableArrow>
      </div>
      <section id="approach" className={` mx-auto col-xl-6 col-10 col-lg-8 `}>
        <h1 style={{ fontSize: "85px" }} className="fw-bolder text-center">
          Our <span style={{}}>Approach</span>
        </h1>
        <hr></hr>
        <p className=" mb-0">Explore a new dimension of media cataloging. Our intuitive web app lets you effortlessly create, curate, and explore personalized playlists, transforming how you organize and enjoy your favorite content.</p>
      </section>
      <section style={{ padding: "6rem 0" }}>{mapObjectToComponent(sections, HeaderWithImageAndParagraph)}</section>
      <section id="howitworks" style={{ padding: "6rem 0" }} className={`d-flex flex-column justify-content-center px-4 px-xl-0 ${styles["section-container-style-lighter"]}`}>
        <div className={`col-md-10 col mb-5 ${styles["steps-container"]} text-wrap-balance`}>
          <h1 className="fw-bolder mb-4 ">3 steps to better media management</h1>
          <p className="fs-6 fw-light ">We believe great software tools unleash your creative potential while fading into the background.</p>
        </div>
        <div className={`${styles["step-grid"]} text-center col-md-10 col mx-auto text-wrap-balance`}>
          {stepData.map((data, i) => (
            <div key={data.id} className={`mt-3 col-10}`}>
              <FadeInElement value="fade-in-from-z">
                <Image priority src={data.source.src} width={50} height={80} alt={data.id} className={`mb-4 item item-${i}`}></Image>
              </FadeInElement>
              <FadeInElement value="fade-in-section">
                <div className={`item item-${i} slow`}>
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                </div>
              </FadeInElement>
            </div>
          ))}
        </div>
        <div className={`${styles["arrows-container"]} arrows d-none d-xl-block`}>
          {arrowData.map((e, i) => (
            <div key={i} style={{ left: e.left }} className={`${styles["arrow"]}`}>
              <svg width="185" height="36" viewBox="0 0 185 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={e.path} fill="white" />
              </svg>
            </div>
          ))}
        </div>
      </section>
      <section id="creativeProcess" className={`d-flex flex-column justify-content-center px-4 px-xl-0 ${styles["section-container-style-black"]}`}>
        <div style={{ maxWidth: "35rem" }} className={`text-center mx-auto col-md-10 col my-5 text-wrap-balance`}>
          <h1 className="fw-bold mb-4">Simplify your creative process</h1>
          <p className="fs-6 fw-light ">Tame the chaos of scattered content and focus on your stories.</p>
        </div>
        <div className={`d-flex  flex-lg-row flex-column mx-auto ${styles["creative-process-container"]}`}>
          <div style={{ flex: "1 0 auto" }} className="d-flex flex-column col-lg-3 col">
            <blockquote className="fst-italic ">“I switched to vern because everything was intuitive and fast! Nothing interrupting your flow.”</blockquote>
            <p className="fst-italic">— Ben</p>
            {featuresData.map((e, i) => (
              <div key={i} className="my-3">
                <h6 className="mb-3">
                  <FaCheck></FaCheck>&#9;{e.name}
                </h6>
                <p className="">{e.description}</p>
              </div>
            ))}
          </div>
          <FadeInElement value="fade-in-section">
            <div style={{ flex: "1 1 auto" }} className={`align-self-center text-lg-end text-center`}>
              <Image src={example.src} width="0" height="0" sizes="100vw" className={`${styles["img-width"]} rounded h-100 focus-ring ring-yellow`} alt="example img" priority={true} quality={100} />
            </div>
          </FadeInElement>
        </div>
        <div style={{ background: "#23272c", borderRadius: "24px", margin: "2rem 4rem" }}>
          <div style={{ maxWidth: "35rem" }} className={`text-wrap-balance text-center mx-auto col-md-10 col py-5`}>
            <h1 className="fw-bold mb-4">Power tools for the discerning reviewers</h1>
            <p className="fs-6 fw-light ">We prefer a quality workflow over a quantity of features, but we have plenty of those too.</p>
          </div>

          <FadeInElement value="fade-in-section">
            <div className={`${styles["tool-grid"]} text-center mx-auto`}>
              {toolData.map((data, i) => (
                <div key={i} className={`${styles["grid-item"]} mt-3 px-3 py-5 item item-${i} focus-ring`}>
                  <data.source size="3em" color="green" className="mb-3"></data.source>
                  <h6 className="my-4">{data.title}</h6>
                  <p className="fw-light">{data.description}</p>
                </div>
              ))}
            </div>
          </FadeInElement>
          <div className="text-center mt-5">
            <p className="text-decoration-underline text-success fs-4 ">See our complete list of features</p>
            <blockquote style={{ rowGap: "3em", maxWidth: "50em" }} className="d-flex flex-column align-items-center mx-auto">
              <div className="fs-4 fw-light">&ldquo;Thanks to the intuitive design, I was able to dive right into reviewing and exploring new media. It’s easy to connect with other users and discover great recommendations at my own pace. 😊 &rdquo;</div>
              <div className="d-flex pb-3">
                <div style={{ letterSpacing: ".1em" }}>BEN</div>
                <span className="mx-2">/</span>
                <div style={{ color: "#627280" }}>vern Community Member</div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
      <section style={{ background: "rgb(55 54 63 / 14%)", borderRadius: "24px", margin: "2rem 4rem" }}>
        <div style={{ maxWidth: "35rem" }} className={`text-center mx-auto col-md-10 col px-4 py-5`}>
          <h1 className="fw-bold mb-4">Customizable Settings</h1>
          <p className="fs-6 fw-light ">vern streamlines the way you create and share your worlds, offering fully customizable settings to reflect your unique identity and preferences.</p>
        </div>
        <FadeInElement value="fade-in-section">
          <div className={`text-center`}>
            <Image src={settings.src} alt="Home page logo" width={0} height={0} sizes="100vw" className={`${styles["img-width-2"]} rounded h-100 focus-ring ring-blue`} priority={true} quality={100} />
          </div>
        </FadeInElement>
        <div className={`text-wrap-balance mx-auto col-md-10 col py-5`}>
          <div className="fs-2 fw-light ">Whether you’re sharing your insights, discovering new favorites, or engaging with a vibrant community, we make it effortless to connect with the media and people you ❤️.</div>
        </div>
        <FadeInElement value="fade-in-section">
          <div className={`${styles["tool-grid"]} text-center mx-auto pb-5`}>
            {imageData.map((data, i) => (
              <div key={i} className={`${styles["grid-item"]} pb-3 item item-${i} ring-blue focus-ring`}>
                <Image style={{ borderRadius: "10px 10px 0 0" }} priority={true} src={data.source.src} width={1000} height={260} quality={100} className={`${styles["object-fit"]}`} alt={data.title}></Image>
                <h6 style={{ letterSpacing: "0.1rem" }} className="my-4 px-3">
                  {data.title}
                </h6>
                <p className=" px-3 ">{data.description}</p>
              </div>
            ))}
          </div>
        </FadeInElement>
      </section>
      <section style={{ background: "#1A1A1A", borderRadius: "24px", margin: "2rem 4rem" }}>

        <div style={{ paddingTop: "8rem" }} className="d-flex justify-content-around ">
          <div style={{ maxWidth: "20%" }} className={` `}>
            <h1 className="fw-light mb-4">What people are saying</h1>
          </div>
          
          <div style={{ background: "rgb(17 17 17 / 51%)", borderRadius: "10px" }} className=" col-7">
          <div className={`${styles["progress-bar"]}`}>
          <div className={`${styles["progress"]} progress-ref`}></div></div>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}

              navigation={{ nextEl: `.${styles["swiper-button-next"]}`, prevEl: `.${styles["swiper-button-prev"]}` }}
              breakpointsBase="container"
              pagination={false}
              modules={[Navigation, EffectFade]}
              effect="fade"
              speed={500}
              watchSlidesProgress={true}
              allowTouchMove={false}
              fadeEffect={{
                crossFade: true,
              }}
              className={` mySwiper p-5 `}
              loop={true}
              spaceBetween={30}
            >
              {quoteData.map((e, index) => (
                <SwiperSlide key={index}>
                  <h2 style={{ height: "250px", textAlign: "left" }} className="fw-light slide-content">
                    &ldquo;{e.description}&rdquo;
                  </h2>
                  <div style={{ gap: "15px",}} className="d-flex">
                    <div style={{ gap: "20px",textAlign:'left' }} className="slide-content d-flex me-auto align-items-center">
                      <Image style={{ borderRadius: "9999px" }} priority={true} src={e.source.src} width={64} height={1000} quality={100} className={`${styles["object-fit"]}`} alt={e.name}></Image>
                      <div style={{fontSize:"20px"}} className="fw-light">
                        <div>{e.name}</div>
                        <div style={{color:"#6B7280"}}><BiSolidBriefcaseAlt2 style={{transform:"translateY(-2px)"}}></BiSolidBriefcaseAlt2>&nbsp;{e.role}</div>
                      </div>
                    </div>
                    <div style={{flexShrink:"0" }} className={`${styles["swiper-button-prev"]}`}>
                      <MdOutlineKeyboardArrowLeft size="1.5em" />
                    </div>
                    <div style={{flexShrink:"0" }} className={`${styles["swiper-button-next"]} me-3`}>
                      <MdOutlineKeyboardArrowRight size="1.5em" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div style={{ paddingTop: "6rem" }} className={`${styles["stats-grid"]} pb-5`}>
          {statsData.map((e, i) => (
            <div key={i} className={`${styles["stats"]}`}>
              <h1 style={{ fontSize: "48px" }}>{e.number}</h1>
              <p className="fs-5">{e.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="pin" style={{ padding: "6rem 0" }} className={`d-flex flex-column justify-content-center px-4 px-xl-0 ${styles["section-container-style-lighter"]} ${styles["view-height-alternative"]}`}>
        <div className="home-page-accordion accordion col-6 ms-auto">
          <div className=" mb-4">
            <h1 style={{ fontSize: "60px" }} className="fw-light" id="Faq">
              FAQ
            </h1>
          </div>
          {accordionData.map((accordion) => (
            <div key={accordion.id} style={{ width: "90%" }} className={`accordion-item py-4 ${styles["accordion-item-home"]} `}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`} aria-expanded="false" aria-controls={accordion.id}>
                  <h4 className="fw-light accordion-question">{accordion.question}</h4>
                </button>
              </h2>
              <div id={accordion.id} className="accordion-collapse collapse">
                <h5 style={{ color: "#848484" }} className="accordion-body fw-light">
                  {accordion.answer}
                </h5>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: "5rem 5rem" }}>
          <div style={{ marginBottom: "12rem", borderRadius: "10px", fontSize: "30px", backgroundColor: "#1A1A1A", padding: "4rem" }} className="">
            <div className="mb-3" style={{ fontSize: "12px", color: "#949494" }}>
              CONTACT US &nbsp;<BiSupport style={{ transform: "translateY(-1px)" }}></BiSupport>
            </div>
            <div className="d-flex justify-content-between">
              <h1>Psst! Our team is here to help! 😊</h1>
              <div className="align-self-end">
                <Button buttonColor={{ cssColor: "#3C3C3C" }} href="https://airtable.com/appZ6rwp0wgPvNpjJ/pagfrOydoyfmz8qJe/form" width="auto" radius="10px" padding="11px" type="button" styleClass={`${styles["support-button"]}`}>
                  Contact support
                  <BsArrowRight className={`${styles["support-arrow"]}`} size="1em"></BsArrowRight>
                </Button>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "rgb(0, 0, 0, 0.27)" }}></div>
        </div>
        <div style={{ gap: "10rem" }} className="d-flex container">
          <div>
            <Newsletter></Newsletter>
          </div>
          <Image src={newsletter.src} alt="Home page logo" width={0} height={0} sizes="100vw" style={{ height: "auto", width: "34%" }} priority={true} quality={100} className="rounded" />
        </div>
      </section>
      <section style={{ padding: "6rem 0" }}>
        <div style={{ gap: "50px" }} className="d-flex justify-content-center my-5">
          <div className="col-5">
            <h1 style={{ fontSize: "88px" }} className={`fw-bold text-wrap-balance  mb-4 lh-1`}>
              Get started for free!
            </h1>
            <p style={{ fontSize: "24px", color: "#767676" }} className={`text-wrap-pretty mb-5 fw-light`}>
              Experience Vern for free—submit reviews, rate media, and join a community of enthusiasts with no costs or subscriptions.
            </p>
            <div className={`d-flex justify-content-start  ${styles["btn-container"]}`}>
              <Button buttonColor={{ cssColor: "white" }} type="submit" width="auto" radius="10px" padding="10px" styleClass={`${styles["support-button"]}`}>
                <span style={{ color: "black" }}>
                  <IoTriangle></IoTriangle>&nbsp;Start Reviewing
                </span>
                <BsArrowRight className={`${styles["support-arrow"]}`} color="black" size="1em"></BsArrowRight>
              </Button>
            </div>
          </div>
          <div className="">
            <h6 style={{ color: "#767676" }}>EMPOWERING A COMMUNITY OF PASSIONATE REVIEWERS AT</h6>
            <div style={{ opacity: "0.5" }} className={`${styles["logo-grid"]} position-relative mt-5`}>
              <Image src={upwork} alt="upwork"></Image>
              <Image src={ideo} alt="ideo"></Image>
              <Image src={discord} alt="discord"></Image>
              <Image src={dropbox} alt="dropbox"></Image>
              <Image src={greenhouse} alt="greenhouse"></Image>
              <Image src={bbdo} alt="bbdo"></Image>
              <Image src={monday} alt="monday"></Image>
              <Image src={ncr} alt="ncr"></Image>
              <Image src={nyt} width="160" alt="nyt"></Image>
              <Image src={orange} width="130" alt="orange"></Image>
              <Image src={philips} alt="philips"></Image>
              <Image src={ted} alt="ted"></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

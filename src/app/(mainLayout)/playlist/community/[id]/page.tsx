/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
// import { communityMetadata } from "@/global/metadata";
// import { Metadata } from "next";
import CommunityDisplay from "./CommunityDisplay";
import horizon from "@/assets/images/horizon.png";
import Image from "next/image";
import styles from "@/styles/Community.module.css";
import Link from "next/link";
import { FaDatabase, FaDownload } from "react-icons/fa";
import { BsHandThumbsUpFill } from "react-icons/bs";
import "@/styles/community.css"
import { useState } from "react";
// export const metadata: Metadata = communityMetadata;
import { Framer } from "./framer";
import { useTabs } from "./useTabs";
import "@/styles/a.css"

const tabs = [
  {name:"NEW TODAY", badge:true},
  {name:"NEW THIS WEEK", badge:true},
  {name:"LATEST", badge:false},
  {name:"POPULAR (30 DAYS)", badge:false},
  {name:"POPULAR (ALL TIME)", badge:false},
  {name:"MORE TRENDING", badge:false},
  {name:"UPDATED", badge:false},
]

export default function Community({ params }: { params: { id: number } }) {
  //params {id: 1} is being passed in from the navigation component
  const [active, setActive] = useState(1)
  const handleClick = (e:number) => {
    setActive(e);
  }
  const [hookProps] = useState({
    tabs: [
      {
        label: "NEW TODAY",
        id: "NEW TODAY",
      },
      {
        label: "NEW THIS WEEK",
        id: "NEW THIS WEEK",
      },
      {
        label: "LATEST",
        id: "LATEST",
      },
      {
        label: "POPULAR (30 DAYS)",
        id: "POPULAR (30 DAYS)",
      },   {
        label: "POPULAR (ALL TIME)",
        id: "POPULAR (ALL TIME)",
      },   
      {
        label: "MORE TRENDING",
        id: "MORE TRENDING",
      },{
        label: "UPDATED",
        id: "UPDATED",
      },
    ],
    initialTabId: "LATEST",
  });
  const framer = useTabs(hookProps);
  console.log(framer)
  return (
    <div className="text-white my-5 mx-auto container">
      <div className="">
        <h1 className="fw-lighter">Community Reviews</h1>
        <div style={{ columnGap: "16px" }} className="d-flex flex-wrap">
          {Array.from({ length: 2 }).map((e, i) => (
            <div key={i} style={{ flex: "1 0 calc(50% - 8px)" }} className="my-2 position-relative ">
              <div className=" w-100" style={{ position: "absolute", bottom: "0", left: "0" }}>
                <div className="p-3 fw-light" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgb(4 4 4 / 95%) 100%)", fontSize: "13px" }}>
                  <p style={{ fontSize: "15px" }}>Cinematic ReShade</p>
                  <p>This ReShade lower the color saturation and vibrance adding a new cinematic experience. Lower random color contamination, and adds real night.</p>
                  <div>Miscellaneous | By mrBulived</div>
                  <div style={{ columnGap: "12px" }} className="d-flex mt-2">
                    <div className="d-flex align-items-center">
                      <FaDatabase></FaDatabase>&nbsp;4.4 MB
                    </div>
                    <div className="d-flex align-items-center">
                      <BsHandThumbsUpFill></BsHandThumbsUpFill>&nbsp;244
                    </div>
                    <div className="d-flex align-items-center">
                      <FaDownload></FaDownload>&nbsp;13.5k
                    </div>
                  </div>
                </div>
              </div>

              <Image src={horizon.src} alt="Home page logo" width={0} height={0} sizes="100vw" className={` h-100 w-100`} priority={true} quality={100} />
            </div>
          ))}
          {Array.from({ length: 5 }).map((e, i) => (
            <div key={i} style={{ flex: "1 0 0" }} className=" my-2 position-relative">
              <div className=" w-100" style={{ position: "absolute", bottom: "0", left: "0" }}>
                <div className="p-3 fw-light" style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgb(4 4 4 / 95%) 100%)", fontSize: "13px" }}>
                  <p style={{ fontSize: "15px" }}>Cinematic ReShade</p>
                  <div>Miscellaneous | By mrBulived</div>
                </div>
              </div>
              <Image src={horizon.src} alt="Home page logo" width={0} height={0} sizes="100vw" className={`h-100 w-100`} priority={true} quality={100} />
            </div>
          ))}
        </div>
      </div>
      <section className={`d-flex ${styles["community-banner"]} py-4 px-5 align-items-center mb-3`}>
        <div className="w-50 text-center fs-2 fw-bold">Join the largest review community</div>
        <div className="d-flex flex-column align-items-center w-50">
          <div className="px-5 py-2 bg-success mb-3">Register</div>
          <div>
            Already have an account?{" "}
            <Link className="text-decoration-none" href="/login">
              Log in here
            </Link>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-between align-items-center mb-2">    
       <h3 className="fw-lighter">More Reviews</h3>
      <div style={{fontSize:"16px", alignSelf:"end"}}>Explore All Reviews</div></div>
      {/* <ul className={`nav nav-tabs ${styles["tab-container"]}`}>
        {tabs.map((e,i) => ( 
          <li key={i} onClick={() => handleClick(i)} className={`nav-item ${styles["nav-tab"]} `}>
          <a className={`nav-link ${styles["nav-tab-item"]} ${active == i && `active`}`}>
            {e.name} {e.badge && <span className="badge text-bg-primary ms-1">{i}</span>}
          </a>
        </li>)
      )}
      </ul> */}
      <div className={`nav nav-tabs ${styles["tab-container"]}`}>
      <div className="custom-class-7">
        <Framer.Tabs {...framer.tabProps} />
      </div>
    </div>
      <CommunityDisplay params={params}></CommunityDisplay>
    </div>
  );
}

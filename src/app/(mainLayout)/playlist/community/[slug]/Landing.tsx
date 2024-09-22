/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import CommunityGrid from "./components/CommunityGrid";
import horizon from "@/assets/images/horizon.png";
import Image from "next/image";
import styles from "@/styles/community-styles/Community.module.css";
import Link from "next/link";
import { FaDatabase, FaDownload } from "react-icons/fa";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { useState } from "react";
import { Framer } from "./components/framer";
import { useTabs } from "./hooks/useTabs";
import "@/styles/community-styles/framer-tabs.css"
import "@/styles/community-styles/community.css"
import { dataTabs } from "@/global/tabs";
 type CommunityProps = {
  params: { slug:string }
  pagination: boolean
}
// /community
export default function Landing(props:CommunityProps) {
  const [hookProps] = useState(dataTabs);
  //params {id: 1} is being passed in from the navigation component
  const [active, setActive] = useState("Latest");
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [matchingObject, setMatchingObject] = useState(hookProps.tabs[2]);
  const handleTabClick  = (id:string) => {
    setActive(id);
    setMatchingObject(hookProps.tabs.find(tab => tab.id === id) ?? hookProps.tabs[2])
  }
  const framer = useTabs(hookProps);
  return (
    <div style={{padding:0}} className="text-white my-5 mx-auto container">
      <div className="">
        <h1 className="fw-normal">Community Reviews</h1>
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
       <h3 className="fw-normal">More Reviews</h3>
      <div style={{fontSize:"16px", alignSelf:"end"}}>Explore All Reviews</div></div>
      <div className={`nav nav-tabs ${styles["tab-container"]}`}>
        <Framer.Tabs {...framer.tabProps} onTabClick={handleTabClick} />
    </div>
      <CommunityGrid tab={matchingObject} pagination={props.pagination} setLoadState={setIsLoading}></CommunityGrid>
      <div className="mt-5 text-center">
        <Link className="bg-success p-2 text-decoration-none text-white" 
        href={`/playlist/community/${matchingObject.slug}/?page=1`}><span style={{fontSize:"14px"}}>View More - {active}</span></Link>
      </div>

    </div>
  );
}

import { communityMetadata } from "@/global/metadata";
import { Metadata } from "next";
import CommunityDisplay from "./CommunityDisplay";
import horizon from "@/assets/images/horizon.png"
import Image from "next/image";

export const metadata: Metadata = communityMetadata;

export default function Community({params}: {params: {id: number}}) {
    //params {id: 1} is being passed in from the navigation component




    return (
      <div className="text-white col-11 my-5 mx-auto">
        <div className="">
          <h1>Top Voted Reviews</h1>
          <div style={{columnGap:"16px"}} className="d-flex flex-wrap">
            {Array.from({length:2}).map(((e,i) => (
             <div key={i} style={{flex:"1 0 calc(50% - 8px)"}} className="my-2 position-relative ">
              <div className=" w-100" style={{position:'absolute', bottom:"0", left:"0"}}>
                <div className="p-3 fw-light" style={{background:"linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgb(4 4 4 / 95%) 100%)", fontSize:"13px"}}>
                <p style={{fontSize:"15px"}}>Cinematic ReShade</p>
                <p>This ReShade lower the color saturation and vibrance adding a new cinematic experience. Lower random color contamination, and adds real night.</p>
                <div>Miscellaneous | By mrBulived</div>
                <div className="d-flex">
                <div>4.4 MB</div>
                <div>244 Thumbs</div>
                <div>13.5k Downloads</div>
                </div>
                </div>
              </div>
              
             <Image src={horizon.src} alt="Home page logo" width={0} height={0} sizes="100vw" className={` h-100 w-100`} priority={true}  quality={100} />
             </div>
            )))}
            {Array.from({length:5}).map(((e,i) => (
                  <div key={i} style={{flex: "1 0 0"}} className=" my-2">
                  <Image src={horizon.src} alt="Home page logo" width={0} height={0} sizes="100vw" className={`h-100 w-100`} priority={true}  quality={100} />
                  </div>
            )))}
     
            </div>
        </div>
        <CommunityDisplay params={params}></CommunityDisplay>
      </div>
    );
  }


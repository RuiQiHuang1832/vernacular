import React from "react";
import Form from "@/components/Form";
import Image from 'next/image';
import toronto from '@/assets/images/Toronto-location.jpeg'
import vancouver from '@/assets/images/Vancouver-location.jpeg'
import nyc from '@/assets/images/NYC-location.jpeg'
import style from '@/styles/Contact.module.css'


export default function Chat() {
  return (
    <div className="container-md mt-5">
      <div className="row justify-content-center">
        <div className="text-white col-md-6 col-12 col-xl-5 p-4">
          <h1 className={`${style["responsiveHeader"]}`}>Get in touch</h1>
          <p className="fw-light">
            Tell us a bit about yourself and what you&apos;d like to chat about. Someone from Ground Control will be in touch shortly.
          </p>
        </div>
        <div className="col-md-6 col col-xl-5 col-xxl-4">
          <Form
            title="Let's Chat"
            input={[
              { color: "#ffefef", text: "Business Email*", type: "email" },
              { color: "white", text: "First Name*", type: "firstName" },
              { color: "white", text: "Last Name*", type: "lastName" },
              { color: "white", text: "Phone Number", type: "phoneNumber" },
              { color: "#ffefef", text: "State/Region", type: "region" },
            ]}
          />
        </div>
      </div>
      <div style={{marginTop:"20em"}} className="col d-md-flex text-white justify-content-evenly text-center pb-5">
              <div>
              <Image src={vancouver.src}  style={{ borderRadius: "50%" }} className="globalObjectFit"  alt="nyc image" width={300} height={300} quality={100} />
              <h3 className="mt-4">Vancouver Office</h3>
              <p className="text-info lh-lg">+1 (212) 603-9667<br/>
              van@majortom.com</p>
              </div>
              <div>
              <Image src={toronto.src} style={{ borderRadius: "50%" }} className={`globalObjectFit ${style['contactImage']}`}  alt="nyc image"  width={300} height={300} quality={100} />
              <h3 className="mt-4">Toronto Office</h3>
              <p className="text-info lh-lg">+1 (416) 892-6767<br/>
              to@majortom.com</p></div>
              <div>
             <Image src={nyc.src} style={{ borderRadius: "50%" }} className="globalObjectFit"  alt="nyc image" width={300} height={300} quality={100} />
             <h3 className="mt-4">New York Office</h3>
             <p className="text-info lh-lg">+1 (604) 642-6765<br/>
             ny@majortom.com</p>
             </div>
           
      </div>
    </div>
  );
}

import React from "react";
import Form from "@/components/Form";
import Image from "next/image";
import style from "@/styles/Contact.module.css";
import classNames from "classnames";
import SectionHeading from "@/components/SectionHeading";
import { officeData } from "@/global/officeData";
import contactUsImage from "@/assets/images/contact-us.png";

export default function Chat() {
  const informationStyle = classNames("text-white col-md-6 col-12 col-xl-5 p-4 me-4");
  const headerStyle = classNames(style["responsiveHeader"] );
  const formContainerStyle = classNames("col-md-6 col col-xl-5 col-xxl-4");
  const officeContainerStyle = classNames("col d-md-flex text-white justify-content-evenly text-center pb-5");

  return (
    <div className="container-md mt-5">
      <SectionHeading section={"Contact Us"}></SectionHeading>
      <div className="row justify-content-center mt-4">
        <div className={informationStyle}>
          <h1 className={headerStyle}>Get in touch</h1>
          <p className="fw-light">Tell us a bit about yourself and what you&apos;d like to chat about. Someone from Ground Control will be in touch shortly.</p>
          <Image src={contactUsImage} alt="contact us image" className={"globalObjectFit"} quality={100}/>
        </div>
        <div className={formContainerStyle}>
          <Form
            title="Let's Chat"
            buttonText="Let's Connect!"
            btnColor="defaultGreenBg"
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
      <div style={{ marginTop: "20em" }} className={officeContainerStyle}>
        {officeData.map(
          (e, index): React.ReactNode => (
            <div key={index}>
              <Image src={e.src} className={`${e.additionalClass} globalObjectFit rounded-circle`} alt={e.alt} width={300} height={300} quality={100} />
              <h3 className="mt-4">{e.name}</h3>
              <p className="text-info lh-lg">
                {e.number}
                <br />
                {e.email}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

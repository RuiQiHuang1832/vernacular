"use client";
import React, {ReactNode} from "react";
import styles from "@/styles/Settings.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Image from "next/image";
import pfp from "@/assets/images/pfp.jpg"

const SectionComponent = ({ children }: {children:ReactNode}) => {
  return <section style={{ border: "1px solid hsla(0,0%,25%,1)", borderRadius: "10px" }}>{children}</section>;
};

const FooterComponent = ({ smallText, buttonText } : {smallText:string, buttonText:string}) => {
  return (
    <footer style={{ border: "1px solid hsla(0,0%,25%,1)", padding:"12px 12px" }} className="d-flex justify-content-between align-items-center px-4 border-bottom-0 border-start-0 border-end-0">
      <small style={{ color: "hsla( 0,0%,63% ,1)" }}>{smallText}</small>
      <button type="submit" disabled className="btn btn-sm btn-light">
        {buttonText}
      </button>
    </footer>
  );
};

const InnerContentComponent = ({ title, description, showInput, specialInput } : {title :string, description:string, showInput:boolean, specialInput:ReactNode}) => {
  return (
    <div className="p-4">
      <h5>{title}</h5>
      <p className="mt-3" style={{ fontSize: "15px" }}>
        {description}
      </p>
      {showInput ? <input type="text" className={`form-control ${styles["light-border-input"]}`} /> : specialInput}
    </div>
  );
};

export default function General() {
  const [value, setValue] = useState<string | undefined>();
  const generalOptions = [
    { title: "Avatar", description: "Click on the avatar to upload a custom one from your files.", smallText: "An avatar is optional but strongly recommended.", buttonText: "Save", showInput: false, specialInput: <div className="position-relative"><Image style={{borderRadius:"9999px", bottom:"0", right:"0"}} src={pfp}  alt="contact us image" height={80} width={80} className={"globalObjectFit position-absolute"} quality={100}/></div>
  },
    { title: "Display Name", description: "Please enter your full name, or a display name you are comfortable with.", smallText: "Please use 32 characters at maximum.", buttonText: "Save", showInput: true },
    { title: "Email", description: "Please enter the email address you want to use to log in with Vernacular.", smallText: "Please enter the email address you want to use to log in with Vernacular.", buttonText: "Save", showInput: true },
    { title: "Your Phone Number", description: "Enter a phone number to receive important service updates by SMS.", smallText: "A code will be sent to verify", buttonText: "Save", showInput: false, specialInput: <PhoneInput country={"us"} value={value} countryCodeEditable={false} buttonClass={styles["button-class"]} dropdownClass={styles["phone-dropdown"]} onChange={setValue} searchClass={styles["search-class"]} inputClass={`form-control ${styles["light-border-input"]}`} /> },
    { title: "Biography", description: "What would you like people to know about you?", smallText: "Please use 100 characters at maximum.", buttonText: "Save", showInput: false, specialInput: <textarea className={`form-control ${styles["light-border-input"]}`} maxLength={100} cols={50} rows={4}></textarea> },
    {
      title: "Password",
      description: "You can change your password here.",
      smallText: "Your password must be 8-20 characters long, contain letters and numbers.",
      buttonText: "Save",
      showInput: false,
      specialInput: (
        <div>
          <input placeholder="Old Password" className={`form-control ph-color-white  ${styles["light-border-input"]} mb-3`}></input>
          <input placeholder="New Password" className={`form-control ph-color-white ${styles["light-border-input"]} mb-3`}></input>
          <input placeholder="Confirm New Password" className={`form-control ph-color-white ${styles["light-border-input"]}`}></input>
        </div>
      ),
    },
  ];

  return (
    <div className="text-white fw-light container">
      {generalOptions.map((e, index) => (
        <>
          <SectionComponent key={index}>
            <InnerContentComponent title={e.title} description={e.description} showInput={e.showInput} specialInput={e.specialInput} />
            <FooterComponent smallText={e.smallText} buttonText={e.buttonText} />
          </SectionComponent>
          <br />
        </>
      ))}
      <section style={{ border: "1px solid rgb(151 43 47)", borderRadius: "10px" }}>
        <div className="p-4">
          <h5>Delete Account</h5>
          <p className="mt-3" style={{ fontSize: "15px" }}>
          Permanently remove your Personal Account and all of its contents from the Vercel platform. This action is not reversible, so please continue with caution.
          </p>
        </div>
        <footer style={{ border: "1px solid rgb(151 43 47)", background:"#2A1314", borderRadius:"0 0 10px 10px" }} className="d-flex justify-content-between align-items-center px-4 py-2 border-bottom-0 border-start-0 border-end-0">
        <small style={{ color: "hsla( 0,0%,63% ,1)" }}></small>
          <button type="submit" className="btn btn-danger">
            Delete Personal Account
          </button>
        </footer>
      </section>
    </div>
  );
}

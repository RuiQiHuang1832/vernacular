"use client";
import React from "react";
import styles from "@/styles/Settings.module.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";

const SectionComponent = ({ children }) => {
  return <section style={{ border: "1px solid hsla(0,0%,25%,1)", borderRadius: "10px" }}>{children}</section>;
};


const FooterComponent = ({ smallText, buttonText }) => {
  return (
    <footer style={{ border: "1px solid hsla(0,0%,25%,1)" }} className="d-flex justify-content-between align-items-center px-4 py-2 border-bottom-0 border-start-0 border-end-0">
      <small style={{ color: "hsla( 0,0%,63% ,1)" }}>{smallText}</small>
      <button type="submit" disabled className="btn btn-success">
        {buttonText}
      </button>
    </footer>
  );
};


const InnerContentComponent = ({ title, description, showInput, specialInput }) => {
  return (
    <div className="p-4">
      <h4>{title}</h4>
      <p>{description}</p>
      {showInput ? <input type="text" className={`form-control ${styles["light-border-input"]}`} /> : specialInput }
    </div>
  );
};

export default function General() {
  const [value, setValue] = useState()
  const generalOptions = [
    { title: "Display Name", description: "Please enter your full name, or a display name you are comfortable with.", smallText: "Please use 32 characters at maximum.", buttonText: "Save", showInput:true },
    { title: "Email", description: "Please enter the email address you want to use to log in with Vernacular.", smallText: "Please enter the email address you want to use to log in with Vernacular.", buttonText: "Save", showInput:true },
    {title: "Your Phone Number", description: "Enter a phone number to receive important service updates by SMS.", smallText:"A code will be sent to verify", buttonText:"Save", showInput:false, specialInput:
    <PhoneInput country={'us'} value={value} countryCodeEditable={false} buttonClass={styles["button-class"]} dropdownClass={styles["phone-dropdown"]} onChange={setValue} searchClass={styles["search-class"]} inputClass={`form-control ${styles["light-border-input"]}`} /> }
  ];

  return (
    <div className="text-white fw-light container">
      {generalOptions.map((e, index) => (
        <>
        <SectionComponent key={index}>
          <InnerContentComponent title={e.title} description={e.description}  showInput={e.showInput} specialInput={e.specialInput} />
          <FooterComponent smallText={e.smallText} buttonText={e.buttonText} />
        </SectionComponent>
        <br/>
        </>
      ))}
    </div>
  );
}

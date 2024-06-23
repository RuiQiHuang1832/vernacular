"use client";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import pfp from "@/assets/images/pfp.jpg";
import styles from "@/styles/settings-styles/General.module.css"
import PhoneInput from "react-phone-input-2";
import SectionHeading from "@/components/SectionHeading";
import "react-phone-input-2/lib/style.css";

type UnitProps = {
  unitClass: string;
  children: ReactNode
}

type FooterProps = {
  footer: string; 
  footerClass:string;
  buttonText: string
  buttonClass:string;
}

type HeadProps = {
  title: string; 
  description: string; 
  showInput: boolean;  
  specialInput: ReactNode
}

const Unit = ({ children, unitClass }:UnitProps) => {
  return <section className={unitClass}>{children}</section>;
};

const Footer = (props: FooterProps ) => {
  return (
    <footer className={`${styles["footer"]} ${props.footerClass} flex-column flex-sm-row text-center`}>
      {props.footer && <small className={`${styles["footer-text"]} mb-sm-0 ${props.buttonText && "mb-2"}`}>{props.footer}</small>}
      {props.buttonText && <button  type="submit" disabled className={props.buttonClass}>
        {props.buttonText}
      </button>}
    
    </footer>
  );
};

const Head = (props: HeadProps) => {
  return (
    <div className="p-4">
      <h5>{props.title}</h5>
      <p className={`${styles["description"]}`}>
        {props.description}
      </p>
      {props.showInput ? <input type="text" className={`form-control light-border-input`} /> : props.specialInput}
    </div>
  );
};

export default function General() {
  //For phone input
  const [value, setValue] = useState<string | undefined>();

  const generalOptions = [
    {
      title: "Avatar",
      description: "Click on the avatar to upload a custom one from your files.",
      footer: "An avatar is optional but strongly recommended.",
      buttonText: "",
      showInput: false,
      buttonClass: "btn btn-sm btn-light",
      footerClass: styles["default-footer"],
      unitClass: styles["default-unit"],
      specialInput: (
        <div className={`position-relative ${styles["img-container"]}`}>
          <Image
            src={pfp}
            alt="pfp"
            height={80}
            width={80}
            className={`globalObjectFit ${styles["small-pfp"]}`}
            quality={100}
          />
        </div>
      ),
    },
    {
      title: "Display Name",
      description: "Please enter your full name, or a display name you are comfortable with.",
      footer: "Please use 32 characters at maximum.",
      buttonText: "Save",
      showInput: true,
      footerClass: styles["default-footer"],
      buttonClass: "btn btn-sm btn-light",
      unitClass: styles["default-unit"],
    },
    {
      title: "Email",
      description: "Please enter the email address you want to use to log in with Vernacular.",
      footer: "We will email you to verify the change.",
      buttonText: "Save",
      showInput: true,
      footerClass: styles["default-footer"],
      buttonClass: "btn btn-sm btn-light",
      unitClass: styles["default-unit"],
    },
    {
      title: "Your Phone Number",
      description: "Enter a phone number to receive important service updates by SMS.",
      footer: "A code will be sent to verify",
      buttonText: "Save",
      showInput: false,
      footerClass: styles["default-footer"],
      buttonClass: "btn btn-sm btn-light",
      unitClass: styles["default-unit"],
      specialInput: (
        <PhoneInput
          country={"us"}
          value={value}
          countryCodeEditable={false}
          buttonClass={styles["button-class"]}
          dropdownClass={styles["phone-dropdown"]}
          onChange={setValue}
          searchClass={styles["search-class"]}
          inputClass={`form-control light-border-input`}
        />
      ),
    },
    {
      title: "Biography",
      description: "What would you like people to know about you?",
      footer: "Please use 100 characters at maximum.",
      buttonText: "Save",
      showInput: false,
      footerClass: styles["default-footer"],
      buttonClass: "btn btn-sm btn-light",
      unitClass: styles["default-unit"],
      specialInput: <textarea className={`form-control light-border-input`} maxLength={100} cols={50} rows={4}></textarea>,
    },
    {
      title: "Password",
      description: "You can change your password here.",
      footer: "Your password must be 8-20 characters long, contain letters and numbers.",
      buttonText: "Save",
      showInput: false,
      buttonClass: "btn btn-sm btn-light",
      footerClass: styles["default-footer"],
      unitClass: styles["default-unit"],
      specialInput: (
        <div>
          <input placeholder="Old Password" className={`form-control ph-color-white light-border-input mb-3`}></input>
          <input placeholder="New Password" className={`form-control ph-color-white light-border-input mb-3`}></input>
          <input placeholder="Confirm New Password" className={`form-control ph-color-white light-border-input`}></input>
        </div>
      ),
    },
    {
      title: "Delete Account",
      description: "Permanently remove your Personal Account and all of its contents from the Vercel platform. This action is not reversible, so please continue with caution.",
      footer: "",
      buttonText: "Delete Personal Account",
      showInput: false,
      buttonClass: "btn btn-danger ms-sm-auto",
      footerClass: styles["delete-footer"],
      unitClass: styles["delete-unit"],
    },
  ];
  

  return (
    <div className="fw-light">
   <SectionHeading on={true} section="General Settings"></SectionHeading>
   <p className="subtext">Customize your profile to reflect your identity and preferences. Update your avatar, name, and contact details, or manage account settings such as deletion.</p>
      {generalOptions.map((e, index) => (
        <React.Fragment key={index}>
          <Unit unitClass={e.unitClass}>
            <Head title={e.title} description={e.description} showInput={e.showInput} specialInput={e.specialInput} />
            <Footer footer={e.footer} buttonClass={e.buttonClass} buttonText={e.buttonText} footerClass={e.footerClass} />
          </Unit>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

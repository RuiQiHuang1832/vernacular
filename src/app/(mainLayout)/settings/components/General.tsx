"use client";
import { ReactNode, useState } from "react";
import styles from "@/styles/settings-styles/Settings.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import pfp from "@/assets/images/pfp.jpg";
import style from "@/styles/settings-styles/General.module.css"

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
    <footer className={`d-flex justify-content-between align-items-center px-4 border-bottom-0 border-start-0 border-end-0 ${props.footerClass}`}>
      <small style={{ color: "hsla( 0,0%,63% ,1)" }}>{props.footer}</small>
      <button type="submit" disabled className={props.buttonClass}>
        {props.buttonText}
      </button>
    </footer>
  );
};

const Head = (props: HeadProps) => {
  return (
    <div className="p-4">
      <h5>{props.title}</h5>
      <p className="mt-3" style={{ fontSize: "15px" }}>
        {props.description}
      </p>
      {props.showInput ? <input type="text" className={`form-control ${styles["light-border-input"]}`} /> : props.specialInput}
    </div>
  );
};

export default function General() {
  const [value, setValue] = useState<string | undefined>();
  const generalOptions = [
    {
      title: "Avatar",
      description: "Click on the avatar to upload a custom one from your files.",
      footer: "An avatar is optional but strongly recommended.",
      buttonText: "Save",
      showInput: false,
      buttonClass:"btn btn-sm btn-light",
      footerClass:style["default-footer"],
      unitClass:style["default-unit"],
      specialInput: (
        <div className="position-relative">
          <Image style={{ borderRadius: "9999px", bottom: "0", right: "0" }} src={pfp} alt="contact us image" height={80} width={80} className={"globalObjectFit position-absolute"} quality={100} />
        </div>
      ),
    },
    { title: "Display Name", description: "Please enter your full name, or a display name you are comfortable with.", footer: "Please use 32 characters at maximum.", buttonText: "Save", showInput: true,        footerClass:style["default-footer"],
    buttonClass:"btn btn-sm btn-light",
    unitClass:style["default-unit"],
  },

    { title: "Email", description: "Please enter the email address you want to use to log in with Vernacular.", footer: "Please enter the email address you want to use to log in with Vernacular.", buttonText: "Save", showInput: true,         footerClass:style["default-footer"],
    buttonClass:"btn btn-sm btn-light",
    unitClass:style["default-unit"],
  },

    { title: "Your Phone Number", description: "Enter a phone number to receive important service updates by SMS.", footer: "A code will be sent to verify", buttonText: "Save", showInput: false,         footerClass:style["default-footer"],
    buttonClass:"btn btn-sm btn-light",
    unitClass:style["default-unit"],
    specialInput: <PhoneInput country={"us"} value={value} countryCodeEditable={false} buttonClass={styles["button-class"]} dropdownClass={styles["phone-dropdown"]} onChange={setValue} searchClass={styles["search-class"]} inputClass={`form-control ${styles["light-border-input"]}`} /> },

    { title: "Biography", description: "What would you like people to know about you?", footer: "Please use 100 characters at maximum.", buttonText: "Save", showInput: false,          footerClass:style["default-footer"],
    buttonClass:"btn btn-sm btn-light",
    unitClass:style["default-unit"],
    specialInput: <textarea className={`form-control ${styles["light-border-input"]}`} maxLength={100} cols={50} rows={4}></textarea> },
    {
      title: "Password",
      description: "You can change your password here.",
      footer: "Your password must be 8-20 characters long, contain letters and numbers.",
      buttonText: "Save",
      showInput: false,      buttonClass:"btn btn-sm btn-light",
      footerClass:style["default-footer"],

      unitClass:style["default-unit"],
      specialInput: (
        <div>
          <input placeholder="Old Password" className={`form-control ph-color-white ${styles["light-border-input"]} mb-3`}></input>
          <input placeholder="New Password" className={`form-control ph-color-white ${styles["light-border-input"]} mb-3`}></input>
          <input placeholder="Confirm New Password" className={`form-control ph-color-white ${styles["light-border-input"]}`}></input>
        </div>
      ),
    },
    { title: "Delete Account", description: "Permanently remove your Personal Account and all of its contents from the Vercel platform. This action is not reversible, so please continue with caution.", footer: "", buttonText: "Delete Personal Account", showInput: false ,      buttonClass:"btn btn-danger",      footerClass:style["delete-footer"],

    unitClass:style["delete-unit"],
  },
  ];

  return (
    <div className="text-white fw-light container">
      {generalOptions.map((e, index) => (
        <>
          <Unit key={index} unitClass={e.unitClass}>
            <Head title={e.title} description={e.description} showInput={e.showInput} specialInput={e.specialInput} />
            <Footer footer={e.footer} buttonClass={e.buttonClass} buttonText={e.buttonText} footerClass={e.footerClass} />
          </Unit>
          <br />
        </>
      ))}
    </div>
  );
}

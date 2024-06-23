"use client";
import React, { ReactNode, useState } from "react";
import styles from "@/styles/settings-styles/PrivacySecurity.module.css";
import SectionHeading from "@/components/SectionHeading";

type UnitProps = {
  unitClass: string;
  children: ReactNode;
};

type FooterProps = {
  footer: string;
  footerClass: string;
  buttonText: string;
  buttonClass: string;
};

type HeadProps = {
  title: string;
  description: string;
  showInput: boolean;
  specialInput: ReactNode;
};

type Options = {
  title: string;
  description: string;
  footer: string;
  buttonText: string;
  showInput: boolean;
  specialInput: ReactNode;
  unitClass?: string;
  footerClass?: string;
  buttonClass?: string;
};

const Unit = ({ children, unitClass }: UnitProps) => {
  return <section className={unitClass}>{children}</section>;
};

const Footer = (props: FooterProps) => {
  return (
    <footer className={`${styles["footer"]} ${props.footerClass}`}>
      <small className={`${styles["footer-text"]}`}>{props.footer}</small>
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
      <p className={`${styles["description"]}`}>{props.description}</p>
      {props.showInput ? <input type="text" className={`form-control light-border-input`} /> : props.specialInput}
    </div>
  );
};

const visibilityOptions = ["Public", "Friends Only", "Private"];
const preferenceOptions = ["Allow personalized recommendations", "Allow usage data for analytics", "Allow targeted advertising", "Share data with third-party partners"];

export default function PrivacySecurity() {

  const [visibility, setVisibility] = useState("Public");
  const [privacy, setPrivacy] = useState("Public");

  const handleVisibilityChange = (value: string) => {
    setVisibility(value);
  };

  const handlePrivacyChange = (value: string) => {
    setPrivacy(value);
  };


  const privacyOptions: Options[] = [
    {
      title: "Profile Visibility",
      description: "Choose who can see your profile.",
      footer: "Your selection affects who can view your profile and its content.",
      buttonText: "",
      showInput: false,
      specialInput: (
        <>
          {visibilityOptions.map((e, i) => (
            <div key={i}>
              <input className={`form-check-input ${styles["input"]} me-2`} onChange={() => handleVisibilityChange(e)} checked={e == visibility} type="radio" />
              <span className={styles["label"]}>{e}</span>
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Post Privacy",
      description: "Choose who can view your posts.",
      footer: "Your selection affects who can view your posts.",
      buttonText: "",
      showInput: false,
      specialInput: (
        <>
          {visibilityOptions.map((e, i) => (
            <div key={i}>
              <input className={`form-check-input ${styles["input"]} me-2`} onChange={() => handlePrivacyChange(e)} checked={e == privacy} type="radio" />
              <span className={styles["label"]}>{e}</span>
            </div>
          ))}
        </>
      ),
    },
  ];

  const securityOptions: Options[] = [
    {
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account login with a verification code sent directly to your email.",
      footer: "Please enter an email address.",
      buttonText: "Save",
      showInput: true,
      specialInput: <></>,
    },
    {
      title: "Report & Block Users",
      description: "Report abusive behavior or block unwanted users to maintain a safe and positive online environment.",
      footer: "Separate usernames with commas to include multiple users.",
      buttonText: "Submit",
      showInput: true,
      specialInput: <></>,
    },
  ];

  const dataOptions: Options[] = [
    {
      title: "Privacy Policy",
      description: "Review the platform's guidelines on data handling and user privacy.",
      footer: "Stay informed about how your data is managed and protected by reviewing our privacy policy.",
      buttonText: "",
      showInput: false,
      specialInput: (
        <a target="_blank" className="text-reset text-decoration-none btn btn-primary fw-light" href="/tos">
          View Policy
        </a>
      ),
    },
    {
      title: "Data Usage Preferences",
      description: "Manage your preferences regarding data collection and usage.",
      footer: "Customize your data sharing preferences to align with your privacy preferences.",
      buttonText: "",
      showInput: false,
      specialInput: (
        <>
          {preferenceOptions.map((e, i) => (
            <div key={i}>
              <input className={`form-check-input ${styles["input"]} me-2`} type="checkbox" />
              <span className={styles["label"]}>{e}</span>
            </div>
          ))}
        </>
      ),
    },
  ];

  const title = [
    { section: "Privacy Settings", subtext: "Choose who can see your profile and its content. Control visibility settings to make your profile public, visible to friends only, or completely private.", option: privacyOptions },
    { section: "Security Settings", subtext: "Enhance the security of your account with options like two-factor authentication, managing active sessions, and setting up security questions for account recovery.", option: securityOptions },
    { section: "Data & Privacy Policy", subtext: "Access and manage your data usage preferences and review vernacular's privacy policy. Download your data or delete your account in compliance with data protection regulations.", option: dataOptions },
  ];

  return (
    <div className="fw-light container">
      {title.map((k, i) => (
        <section key={i}>
          <SectionHeading on={true} section={k.section}></SectionHeading>
          <p className="subtext">{k.subtext}</p>
          {k.option.map((e, index) => (
            <React.Fragment key={index}>
              <Unit unitClass={e.unitClass ?? styles["default-unit"]}>
                <Head title={e.title} description={e.description} showInput={e.showInput} specialInput={e.specialInput} />
                <Footer footer={e.footer} buttonClass={e.buttonClass ?? "btn btn-sm btn-light"} buttonText={e.buttonText} footerClass={e.footerClass ?? styles["default-footer"]} />
              </Unit>
              <br />
            </React.Fragment>
          ))}
        </section>
      ))}
    </div>
  );
}

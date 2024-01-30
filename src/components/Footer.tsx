import React from "react";
import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "@/styles/Footer.module.css";
import classNames from "classnames";
import { IconType } from "react-icons";


type Property = {
  size: string;
};

const socialIcons: IconType[] = [
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsGoogle,
];

const socialIconLinks: string[] = [
  "",
  "https://github.com/RuiQiHuang1832",
  "https://www.linkedin.com/in/rui-huang-528a43220/",
  "",
  "",
  "mailto:huangben32@gmail.com"
]

export default function Footer() {
  const iconBorder: string = classNames(styles["border"], "text-reset");
  const property: Property = {
    size: "0.75em",
  };
  const footerContainer: string = classNames("text-white py-4 mt-5", styles["footer"])
  const sectionContainer: string = classNames("d-flex align-items-center");

  return (
    <footer className={footerContainer} style={{background:"#1d2426"}}>
      <section className="container-lg">
        <div className={`${sectionContainer} justify-content-center`}>
          {socialIcons.map((Icon, index) => (
            <a target="_blank" rel="noopener noreferrer" href={socialIconLinks[index]} key={index} className={iconBorder}>
              <Icon size={property["size"]} />
            </a>
          ))}
        </div>
      </section>
        <div className={`text-center lead mx-auto ${styles["rfs"]}`}><small>© 2023-2024 Vernacular. All Rights Reserved.</small></div>
    </footer>
  );
}

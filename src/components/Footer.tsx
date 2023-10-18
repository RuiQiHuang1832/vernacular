import React from "react";
import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "@/styles/Footer.module.css";
import classNames from "classnames";
import { IconType } from "react-icons";
import skyrimKnotworkRight from "@/assets/images/skyrim-knotwork-right.png"
import skyrimKnotworkLeft from "@/assets/images/skyrim-knotwork-left.png"
import Image from "next/image";

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

export default function Footer() {
  const iconBorder: string = classNames(styles["border"]);
  const property: Property = {
    size: "0.75em",
  };
  const footerContainer: string = classNames("text-white container-md pt-5 pb-1 mt-5", styles["footer"])
  const sectionContainer: string = classNames("d-flex align-items-center");

  return (
    <footer className={footerContainer}>
      <section>
        <div className={`${sectionContainer} justify-content-center`}>
          {socialIcons.map((Icon, index) => (
            <div key={index} className={iconBorder}>
              <Icon size={property["size"]} />
            </div>
          ))}
        </div>
      </section>
      <hr></hr>
      <section className={`${sectionContainer} justify-content-between`}>
      <Image src={skyrimKnotworkLeft.src} alt="heading left" width={200} height={40} quality={100} className={styles["objectFit"]} ></Image>
        <div className="text-center footer-text">© 2023 Copyright. All Rights Reserved</div>
        <Image src={skyrimKnotworkRight.src} alt="heading right" width={200} height={40} quality={100} className={styles["objectFit"]} ></Image>

      </section>
    </footer>
  );
}
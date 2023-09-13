import React from "react";
import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "@/styles/footer.module.css";
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

export default function Footer() {
  const iconBorder: string = classNames(styles["border"]);
  const property: Property = {
    size: "0.75em",
  };
  const footerContainer: string = classNames("text-white container pt-5 pb-3 mt-5")

  return (
    <footer className={footerContainer}>
      <section>
        <div className="d-flex justify-content-center">
          {socialIcons.map((Icon, index) => (
            <div key={index} className={iconBorder}>
              <Icon size={property["size"]} />
            </div>
          ))}
        </div>
      </section>
      <hr></hr>
      <section>
        <div className="text-center footer-text">© 2023 Copyright. All Rights Reserved</div>
      </section>
    </footer>
  );
}

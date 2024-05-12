import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "@/styles/Footer.module.css";
import { IconType } from "react-icons";

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

  return (
    <footer style={{backgroundColor:"#1d2426"}} className={`text-white py-5  ${styles["footer"]}`}>
      <section className="container-lg">
        <div className={`d-flex align-items-center justify-content-center`}>
          {socialIcons.map((Icon, index) => (
            <a target="_blank" rel="noopener noreferrer" href={socialIconLinks[index]} key={index} className={`${styles["border"]} text-reset`}>
              <Icon size={"1.5em"} />
            </a>
          ))}
        </div>
      </section>
        <div className={styles["text"]}>© 2023-2024 Vernacular. All Rights Reserved.</div>
    </footer>
  );
}

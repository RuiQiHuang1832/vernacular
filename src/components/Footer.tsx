import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsLinkedin } from "react-icons/bs";
import styles from "@/styles/Footer.module.css";
import { IconType } from "react-icons";
import Link from "next/link";

const socialIcons: IconType[] = [
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsGoogle,
];

const socialIconLinks: string[] = [
  "",
  "https://github.com/RuiQiHuang1832",
  "https://www.linkedin.com/in/rui-huang-528a43220/",
  "",
  "mailto:huangben32@gmail.com"
]

export default function Footer() {

  return (
    <footer style={{backgroundColor:"black", color:'#929191'}} className={` ${styles["footer"]}`}>
      <section  className="container-lg py-5">
        <div style={{columnGap:"50px"}} className="d-flex justify-content-center mb-2 flex-wrap">
        <Link href="/playlist/community/1" className="p-2 text-decoration-none text-reset">Community</Link>
        <Link href="https://airtable.com/appZ6rwp0wgPvNpjJ/pagfrOydoyfmz8qJe/form" className="p-2 text-decoration-none text-reset">Contact</Link>
        <Link href="/" className="p-2 text-decoration-none text-reset">Team</Link>
        <Link href="/#Faq" className="p-2 text-decoration-none text-reset">FAQ</Link>
        <Link href="/login" className="p-2 text-decoration-none text-reset">Login</Link>

        </div>
        <div  style={{columnGap:"10px"}} className={`d-flex align-items-center justify-content-center mb-2`}>
          {socialIcons.map((Icon, index) => (
            <a target="_blank" rel="noopener noreferrer" href={socialIconLinks[index]} key={index}  className={`${styles["border"]} text-reset`}>
              <Icon size={"1.2em"} />
            </a>
          ))}
        </div>
        <hr></hr>
        <div style={{fontSize:"30px", color:"#9E9D9D"}}  className="text-center fw-bold mb-2">
          Vernacular
        </div>
        <div style={{opacity:"0.8"}} className={styles["text"]}>© 2023-2024 Vernacular. All Rights Reserved.</div>
      </section>
    </footer>
  );
}

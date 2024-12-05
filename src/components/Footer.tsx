'use client'
import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsLinkedin } from "react-icons/bs";
import styles from "@/styles/Footer.module.css";
import { IconType } from "react-icons";
import Link from "next/link";
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const scrollToTop = () => {
      window.scrollTo({
        top:0,
        behavior: 'smooth'
      })
  }

  return (
    <footer style={{backgroundColor:"black", color:'#767676'}} className={` ${styles["footer"]}`}>
      {pathname.includes('playlist/community') && <div className={`${styles["back-to-top"]}`} onClick={scrollToTop}>
        <div style={{fontSize:"13px"}} className="text-center p-2 text-white">Back to top</div>
      </div> }
    
      <section  className="container-lg py-5">
        <div style={{columnGap:"50px"}} className="d-flex justify-content-center mb-2 flex-wrap">
        <Link href="/playlist/community" className="p-2 text-decoration-none text-reset">Community</Link>
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

        <div className={`${styles["text"]} d-flex align-items-center`} >
          <Link href="/tos" style={{color:"#fafafccc", fontSize:"12px"}} className="p-2 me-2 text-decoration-none text-reset">Terms and Conditions</Link>
          <Link href="/tos" style={{color:"#fafafccc", fontSize:"12px"}} className="p-2 me-2 text-decoration-none text-reset">Privacy Policy</Link>
          <Link href="/tos" style={{color:"#fafafccc", fontSize:"12px"}} className="p-2 me-2 text-decoration-none text-reset">Responsible Disclosure</Link>
          <Link href="/tos" style={{color:"#fafafccc", fontSize:"12px"}} className="p-2 me-2 text-decoration-none text-reset">Trust Center</Link>
          <div  style={{opacity:"0.8", fontSize:"12px"}} className="ms-auto">© 2024-2025 Vern Technologies Inc. All rights reserved.</div>
        </div>
      </section>
    </footer>
  );
}

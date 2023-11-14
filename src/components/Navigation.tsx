"use client";
import styles from "@/styles/Navigation.module.css";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa6";

const navLinks = [
  { text: "SEARCH", href: "/search" },
  { text: "ABOUT", href: "/about" },
  { text: "LOGIN", href: "/login" },
];

const playlistLinks = [
  { text: "View Playlists", href: "/playlist/view" },
  { text: "Create Playlists", href: "/playlist/create" },
  { text: "Community Playlists", href: "/playlist/community/1" },
]

export default function Navigation() {
  const navItem: string = classNames("me-5", styles["nav-shake"], "fs-5");
  const pathname: string = usePathname();
  const activeLinkClass: string = styles["link-active"];
  return (
    <nav className={`navbar navbar-expand-lg bg-dark ${styles["responsive-sticky-top"]}`}>
      <div className="container-fluid">
        <a className={`navbar-brand fs-2 fw-bold ms-5`} href="/">
          <Image src={logo} alt="Logo" width={50} height={50} />
          &nbsp;vernacular
        </a>
        <button className="navbar-toggler navbar-dark order-first" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars color={"#ffffff"} size={"1.3em"} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0 ms-auto">
            <li className="nav-item dropdown">
              <a className={`nav-link ${navItem} pt-0 pt-lg-3 ${classNames({ [activeLinkClass]: pathname.includes("/playlist/") })}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PLAYLIST
              </a>
              <ul className="dropdown-menu">
               {playlistLinks.map((link, index): React.ReactNode => (
              <li  key={index}>
                <Link className={`dropdown-item`} href={link.href}>
                  {link.text}
                </Link>
              </li>
            ))}
              </ul>
            </li>
            {navLinks.map((link, index): React.ReactNode => (
              <li className="nav-item" key={index}>
                <Link className={`nav-link ${navItem} ${classNames({ [activeLinkClass]: pathname === link.href })}`} href={link.href}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

"use client";
import React from 'react'
import styles from "@/styles/Navigation.module.css";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";

const navLinks = [
  { text: "SEARCH", href: "/search" },
  { text: "ABOUT", href: "/about" },
  { text: "LOGIN", href: "/login" },
];

const playlistLinks = [
  { text: "View Playlists", href: "/playlist/view" },
  { text: "Create Playlists", href: "/playlist/create" },
  { text: "Community Playlists", href: "/playlist/community/1" },
];


export default function Navigation() {
 
  
  const navItem: string = classNames("me-5", "fs-5");
  const pathname: string = usePathname();
  const activeLinkClass: string = styles["link-active"];
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const isSmallScreen = () => {
      return window.innerWidth <= 991.9;
    };
    const handleResize = () => {
      setIsSmall(isSmallScreen());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
         
            <li role={isSmall ? "button" : undefined} onClick={isSmall ? toggleDropdown : undefined} className={`d-flex align-items-center justify-content-between nav-item dropdown ${styles["nav-dropdown-menu"]} ${styles["hover-dropdown"]}`}>
              <div  className={`nav-link ${navItem}`} aria-expanded={isDropdownOpen}>
                <div role={!isSmall ? "button" : undefined} onClick={!isSmall ? toggleDropdown : undefined} className={`${styles["highlight-nav"]} ${styles["nav-shake"]} ms-2 ${classNames({ [activeLinkClass]: pathname.includes("/playlist/") })}`}>PLAYLIST</div>
              </div>
              <IoIosArrowDown size="1.5em" className={`text-white d-lg-none me-2 ${styles["playlist-icon"]} ${isDropdownOpen ? styles["rotate"] :""}`}></IoIosArrowDown>
            </li>

            {isDropdownOpen && (
              <ul style={{ top: "60px" }} className="dropdown-menu d-block">
                {playlistLinks.map(
                  (link, index): React.ReactNode => (
                    <li key={index}>
                      <Link onClick={toggleDropdown} className={`dropdown-item`} href={link.href}>
                        {link.text}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}

            {navLinks.map(
              (link, index): React.ReactNode => (
                <React.Fragment key={index}>
                  {isSmall ? (
                    <Link key={index}  href={link.href}>
                      <li  className={`nav-item dropdown ${styles["nav-dropdown-menu"]} ${styles["hover-dropdown"]}`}>
                        <div className={`nav-link ${navItem}`}>
                          <div className={`${styles["highlight-nav"]} ms-2 ${styles["nav-shake"]} ${classNames({ [activeLinkClass]: pathname === link.href })}`}>{link.text}</div>
                        </div>
                      </li>
                    </Link>
                  ) : (
                    <li className="nav-item" key={index}>
                        <div className={`nav-link ${navItem}`}>
                        <Link className="text-decoration-none text-reset" href={link.href}>
                          <div className={`${styles["highlight-nav"]} ms-2 ${styles["nav-shake"]} ${classNames({ [activeLinkClass]: pathname === link.href })}`}>{link.text}</div>
                          </Link>

                        </div>
                    </li>
                  )}
                </React.Fragment>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

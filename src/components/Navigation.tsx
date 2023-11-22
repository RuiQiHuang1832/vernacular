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
  { text: "View", href: "/playlist/view" },
  { text: "Create", href: "/playlist/create" },
  { text: "Community", href: "/playlist/community/1" },
];


export default function Navigation() {
  
  const navItem: string = classNames("me-5", "fs-5");
  const navItemContainer: string = classNames(`nav-item dropdown ${styles["nav-dropdown-menu"]} ${styles["hover-dropdown"]}`)
  const pathname: string = usePathname();
  const navItemText: string = classNames(`${styles["highlight-nav"]} ms-2 ${styles["nav-shake"]}`);
  const activeLinkClass: string = styles["link-active"];
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const dropdownIcon: string = classNames(`d-lg-none me-2 ${styles["playlist-icon"]} ${isDropdownOpen ? styles["rotate"] :""}`)

  const toggleDropdown = (): void => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const isSmallScreen = () : boolean => {
      return window.innerWidth <= 991.9;
    };
    const handleResize = (): void => {
      setIsMobile(isSmallScreen());
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
            <li role={isMobile ? "button" : undefined} onClick={isMobile ? toggleDropdown : undefined} 
            className={`d-flex align-items-center justify-content-between ${navItemContainer}`}>
              <div className={`nav-link ${navItem}`} aria-expanded={isDropdownOpen}>
                <div role={!isMobile ? "button" : undefined} onClick={!isMobile ? toggleDropdown : undefined} className={`
                ${navItemText} ${classNames({ [activeLinkClass]: pathname.includes("/playlist/") })}`}>PLAYLIST</div>
              </div>
              <IoIosArrowDown size="1.5em" className={dropdownIcon}></IoIosArrowDown>
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
                  {isMobile ? (
                    <Link key={index}  href={link.href}>
                      <li className={navItemContainer}>
                        <div className={`nav-link ${navItem}`}>
                          <div className={`${navItemText} ${classNames({ [activeLinkClass]: pathname === link.href })}`}>{link.text}</div>
                        </div>
                      </li>
                    </Link>
                  ) : (
                    <li className="nav-item" key={index}>
                        <div className={`nav-link ${navItem}`}>
                        <Link className="text-decoration-none text-reset" href={link.href}>
                          <div className={`${navItemText} ${classNames({ [activeLinkClass]: pathname === link.href })}`}>{link.text}</div>
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

"use client";
import React from "react";
import styles from "@/styles/Navigation.module.css";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowDown, IoMdCloseCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import Search from "./Search";

const navLinks = [
  { text: "CAREER", href: "/careers" },
  { text: "ABOUT", href: "/about" },
  { text: "LOGIN", href: "/login" },
];

const playlistLinks = [
  { text: "View", href: "/playlist/view" },
  { text: "Create", href: "/playlist/create" },
  { text: "Community", href: "/playlist/community/1" },
];

export default function Navigation() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const navItem: string = classNames("me-5", "fs-5");
  const navItemContainer: string = classNames(`nav-item dropdown ${styles["nav-dropdown-menu"]} ${styles["hover-dropdown"]}`);
  const pathname: string = usePathname();
  const navItemText: string = classNames(`${styles["highlight-nav"]} ms-2 ${styles["nav-shake"]}`);
  const activeLinkClass: string = styles["link-active"];
  const dropdownIcon: string = classNames(`d-lg-none me-2 ${styles["playlist-icon"]}`, { [styles["rotate"]]: isDropdownOpen });

  const toggleDropdown = (): void => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (): void => {
    setDropdownOpen(false);
  };

  const searchOverlay = () => {
    setSearchOpen(!isSearchOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleResize = (): void => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= 991.9);
  };

  useEffect(() => { 
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= 991.9);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSearchOpen ? (
    <>
      <div onClick={searchOverlay} className={`${styles["search-close-btn"]}`}>
        <IoMdCloseCircle size="3em" color="lightgreen" />
      </div>
      <Search />
    </>
  ) : (
    <nav className={`navbar navbar-expand-lg bg-dark ${styles["responsive-sticky-top"]}`}>
      <div className="container-fluid">
        <div className={`nav-item order-lg-1 me-auto ms-3`}>
          <div className={`nav-link ${navItem}`}>
            <div style={{ cursor: "pointer" }} onClick={searchOverlay}>
              <MdSearch />
            </div>
          </div>
        </div>
        <a className={`navbar-brand fs-2 fw-bold ms-sm-5`} href="/">
          <Image src={logo} alt="Logo" width={50} height={50} />
          &nbsp;vernacular
        </a>
        <button className="navbar-toggler navbar-dark order-first" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars color={"#86c232"} size={"1.3em"} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0 ms-auto">
            <li role={isMobile ? "button" : undefined} onClick={isMobile ? toggleDropdown : undefined} className={`d-flex align-items-center justify-content-between ${navItemContainer}`}>
              <div className={`nav-link ${navItem}`} aria-expanded={isDropdownOpen}>
                <div
                  role={!isMobile ? "button" : undefined}
                  onClick={!isMobile ? toggleDropdown : undefined}
                  className={`
              ${navItemText} ${classNames({ [activeLinkClass]: pathname.includes("/playlist/") })}`}
                >
                  PLAYLIST
                </div>
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
                    <Link onClick={closeDropdown} key={index} href={link.href}>
                      <li className={navItemContainer}>
                        <div className={`nav-link ${navItem}`}>
                          <div className={`${navItemText} ${classNames({ [activeLinkClass]: pathname === link.href })}`}>{link.text}</div>
                        </div>
                      </li>
                    </Link>
                  ) : (
                    <li className="nav-item" key={index}>
                      <div className={`nav-link ${navItem}`}>
                        <Link onClick={closeDropdown} className="text-decoration-none text-reset" href={link.href}>
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

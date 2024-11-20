"use client";
import React from "react";
import styles from "@/styles/Navigation.module.css";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import Search from "./Search";

const navLinks = [
  // { text: "VIEW", href: "/playlist/view" },
  { text: "CREATE", href: "/playlist/create" },
  { text: "COMMUNITY", href: "/playlist/community" },
  { text: "SUPPORT", href: "https://airtable.com/appZ6rwp0wgPvNpjJ/pagfrOydoyfmz8qJe/form" },
  { text: "LOG IN", href: "/login" },
];

type NavigationProps = {
  /* Optional. Use if you want to hide nav links */
  hidden?: boolean;
};
const BREAKPOINT = 1090

export default function Navigation({ hidden = false }: NavigationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  
  const pathname: string = usePathname();

  const [angle, setAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prevAngle => isHovered 
        ? (prevAngle + 1) % 360   // Rotate clockwise on hover
        : (prevAngle - 1 + 360) % 360 // Rotate counterclockwise by default
      );
    }, isHovered ? 10 : 50); // Adjust for speed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isHovered]);

  const searchOverlay = (): void => {
    setSearchOpen(!isSearchOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleResize = (): void => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= BREAKPOINT);
  };

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSearchOpen ? (
    <>
      <div onClick={searchOverlay} className={styles["search-close-btn"]}>
        <AiOutlineClose size="2.5em" color="white" />
      </div>
      <Search />
    </>
  ) : (
    <nav className={`navbar navbar-expand-custom ${styles["responsive-sticky-top"]}`}>
      <div className={` ${styles["custom-column-gap"]} ${styles["custom-row-gap"]} container-fluid mt-3 px-xxl-5 mx-3 ms-xxl-0 `}>
        {!hidden && (
          <div className={`nav-item me-auto ${styles["search"]}`}>
            <div className={`nav-link fs-5 me-xxl-5 pt-2 `}>
              <div className="position-relative" onClick={searchOverlay}>
                <div    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`${styles["rotating-circle-container"]}`}>
              <div style={{transform: `rotate(${angle}deg)`}} className={`${styles["rotating-circle"]}`}>
              <svg height="50" width="50" viewBox="0 0 56 56"><path d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z"  fill="#F14243"></path><path d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z" fill="#45A3FE"></path><path d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z"  fill="#F2CC42"></path></svg>
              </div>
              </div>
                <MdSearch size="1.5em" color="white"></MdSearch>
              </div>
            </div>
          </div>
        )}

        <a className={`navbar-brand fw-bold ms-xxl-3 ps-0 ps-md-2 pt-2`} href="/">
          <span className="brand">vern</span>
        </a>
        {!hidden && (
          <>
          <div className="order-first pt-2">
            <button className="navbar-toggler navbar-dark py-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FaBars color="#86c232" size="1.3em" />
            </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className={`navbar-nav mb-lg-0 flex-grow-1 ${styles["custom-column-gap"]}`}>
                {navLinks.map(
                  (link, index): React.ReactNode => (
                    <React.Fragment key={index}>
                      {isMobile ? (
                        <Link key={index} href={link.href}>
                          <li className={`nav-item dropdown ${styles["nav-dropdown-menu"]} ${styles["hover-dropdown"]}`}>
                            <div className={`nav-link fs-5`}>
                              <div className={`${styles["highlight-nav"]} ${classNames({ [styles["link-active"]]: pathname === link.href })}`}>{link.text}</div>
                            </div>
                          </li>
                        </Link>
                      ) : (
                        <li  className={`nav-item ${index == 3 ? "ms-auto" : ""} pt-2`} key={index}>
                          <div className={`nav-link fs-5`}>
                            <Link  className="text-decoration-none text-reset text-nowrap" href={link.href}>
                              <div className={`${styles["highlight-nav"]} ${classNames({ [styles["link-active"]]: pathname === link.href })}`}>{link.text}</div>
                            </Link>
                          </div>
                        </li>
                      )}
                    </React.Fragment>
                  )
                )}
                {!isMobile && <li  className="nav-item pt-2">
                  <div className={`nav-link fs-5 px-3 ${styles["try-button"]}`}>
                    <Link className="text-decoration-none text-reset text-nowrap" href="/login">
                      TRY FREE
                    </Link>
                  </div>
                </li>}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

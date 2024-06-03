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
  { text: "COMMUNITY", href: "/playlist/community/1" },
  { text: "CONTACT", href: "https://airtable.com/appZ6rwp0wgPvNpjJ/pagfrOydoyfmz8qJe/form" },
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


  const searchOverlay = () => {
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
              <div className={styles["circular-border"]} onClick={searchOverlay}>
                <MdSearch />
              </div>
            </div>
          </div>
        )}

        <a className={`navbar-brand fw-bold ms-xxl-3 ps-0 ps-md-2 pt-2`} href="/">
          <span className="brand">vernacular</span>
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

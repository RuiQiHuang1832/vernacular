"use client";
import Form from "@/components/Form";
import Link from "next/link";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { MdOutlineCallSplit } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { useState } from "react";
import style from "@/styles/LoginPage.module.css";
import classNames from "classnames";

export default function LoginForm() {
  const [isActiveNewUser, setIsActiveNewUser] = useState(true);
  const [isActiveExistingUser, setIsActiveExistingUser] = useState(true);

  const newUserWindowStatus = classNames({
    [style["nonActiveWindow"]]: !isActiveNewUser,
    [style["activeWindow"]]: isActiveNewUser,
  });
  const existingUserWindowStatus = classNames({
    [style["nonActiveWindow"]]: !isActiveExistingUser,
    [style["activeWindow"]]: isActiveExistingUser,
  });
  const handleClick = (e: string) => {
    if (e !== "default") {
      setIsActiveNewUser(e === "newUser");
      setIsActiveExistingUser(e === "existingUser");
    } else {
      setIsActiveNewUser(true);
      setIsActiveExistingUser(true);
    }
  };
  const rowStyle: string = classNames("row align-items-center pb-5");
  const formStyle: string = classNames("col-lg-4 col-md-5 col-12 px-0");
  const newUserFormStyle: string = classNames(formStyle, newUserWindowStatus);
  const existingUserFormStyle: string = classNames(formStyle, existingUserWindowStatus);
  const iconStyleContainerStyle: string = classNames("col text-white text-center fs-4 px-0");
  const infoQuoteContainerStyle: string = classNames("text-white col-lg-3 col-12 ps-4 pt-5 pt-lg-0");
  return (
    <div className={rowStyle}>
      <div onClick={() => handleClick("newUser")} className={newUserFormStyle}>
        <Form
          title="NEW USER"
          buttonText="Register"
          btnColor="btn-success"
          checkbox={[
            <span key={1}>
              Accept <Link href="/tos">terms & conditions</Link>
            </span>,
          ]}
          info="New users should register below to gain access to playlist creation and community viewing."
          input={[
            { color: "#ffefef", text: "Email Address", type: "email" },
            { color: "white", text: "Username", type: "firstName" },
            { color: "white", text: "Password", type: "lastName" },
            { color: "white", text: "Confirm Password", type: "phoneNumber" },
          ]}
        />
      </div>
      
      <div onClick={() => handleClick("default")} className={iconStyleContainerStyle}>
        <MdOutlineCallSplit className={`text-white ${style["hide-on-mobile"]}`} size="2em"></MdOutlineCallSplit>
        <LuArrowUpDown className={`text-white ${style["show-on-mobile"]} my-3`} size="2em"></LuArrowUpDown>
      </div>
      <div onClick={() => handleClick("existingUser")} className={existingUserFormStyle}>
        <Form
          title="EXISTING USER"
          buttonText="Sign In"
          btnColor="btn-success"
          info="Already have an account? Sign in to retrieve your account settings."
          additionalLink={
            <div>
              <Link href="/" className="text-decoration-none text-reset">
                Can&apos;t Sign In?
              </Link>
            </div>
          }
          input={[
            { color: "#ffefef", text: "Email Address", type: "email" },
            { color: "white", text: "Password", type: "password" },
          ]}
        />
      </div>
      <div className={infoQuoteContainerStyle}>
        <BiSolidQuoteAltLeft size="5em"></BiSolidQuoteAltLeft>
        <p className={style["quote"]}>
          By using <span className="text-success">Vernacular</span>, my team saves a lot of time by working on the right content and in a more data-driven way.
        </p>
        <p className="text-success">Theodore Roosevelt</p>
        <p>VP, Sales & Marketing</p>
      </div>
    </div>
  );
}

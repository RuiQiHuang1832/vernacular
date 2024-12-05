import React from 'react'
import Button from './Button'
import styles from "@/styles/HomePage.module.css"
import { BsArrowRight } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { MdUnsubscribe } from "react-icons/md";

export default function Newsletter() {
  return (
      <div className="">
    <div  className=" d-flex flex-column">
      <h1 className="mb-3">
      Sign up for email updates &nbsp;<SiMinutemailer></SiMinutemailer>
      </h1>
      <p style={{fontSize:"24px",color:"#767676"}} className="mb-3  text-wrap fw-light">The Vern newsletter provides creative deep dives, review content, inspiration, and occasional product updates. </p>
      </div>
      <form style={{columnGap:"0.5rem",rowGap:"0.5rem"}} className="d-flex flex-column flex-sm-row">
      <input required type="text" style={{flex:"1 1 0%"}} placeholder="Enter email address..." className={`form-control light-border-input`} />
      <Button buttonColor={{ cssColor: "white" }} type="submit" width="auto" radius="10px" padding="10px" styleClass={`${styles["support-button"]}`}><span style={{color:"black"}}>Subscribe</span>
      <BsArrowRight className={`${styles["support-arrow"]}`} color="black"  size="1em"></BsArrowRight></Button>
      </form>
      <div style={{color:"#767676"}} className="mt-3 text-wrap-pretty fw-light">
    By subscribing, you agree to our <a href="/tos" className="text-decoration-underline text-reset fw-normal">Terms of Service</a> and <a href="/tos" className="text-decoration-underline text-reset fw-normal">Privacy Policy</a>.  <span className="text-danger">*</span> <br></br> Unsubscribe anytime. <MdUnsubscribe></MdUnsubscribe> <br></br>
      </div>
      </div>
  )
}

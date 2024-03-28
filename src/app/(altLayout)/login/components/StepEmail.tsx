import React from 'react'
import Button from '@/components/Button'
import styles from '@/styles/login-styles/StepEmail.module.css'
import { FcGoogle } from "react-icons/fc";
import {  BsApple, BsFacebook, BsQrCode  } from "react-icons/bs";
import {  FaXTwitter } from "react-icons/fa6";

const altLogin = [
  {provider:"CONTINUE WITH GOOGLE", icon: FcGoogle, color:"none"},
  {provider:"CONTINUE WITH FACEBOOK", icon:BsFacebook, color:"#4267B2"},
  {provider:"CONTINUE WITH APPLE", icon:BsApple, color:"black"},
  {provider:"CONTINUE WITH TWITTER", icon: FaXTwitter, color:"white"}
]

export default function StepEmail() {
  return (
    <div>
    <input type="email" className={`form-control fw-light mb-3 ${styles["email-input"]}`} placeholder="Enter phone number or email"/>
    <Button buttonColor={{cssColor:"black"}} styleClass="mb-3" href="/login" text="Continue" radius="10px" padding="15px" type="button"></Button>
    <div className={`${styles["or"]} mb-3`}>
      <p className={styles["label"]}>or</p>
    </div>
    {altLogin.map((e,i) => (
   <button key={i} className={`${styles["button"]} mb-3`}>
   <div style={{paddingLeft:"20px", paddingRight: "20px"}}>
   <e.icon color={e.color} size="1.5em" />
 </div>
  <span style={{letterSpacing:"1px"}} className="fw-light align-self-center">{e.provider}</span>
 </button>
    ))}
        <div className={`${styles["or"]} mb-3`}>
      <p className={styles["label"]}>or</p>
    </div>
    <button className={`${styles["button"]} mb-3`}>
   <div style={{paddingLeft:"20px", paddingRight: "20px"}}>
   <BsQrCode size="1.5em" />
 </div>
  <span style={{letterSpacing:"1px"}} className="fw-light align-self-center">LOG IN WITH QR CODE</span>
 </button>
    <p style={{color:"#6B6B6B", fontSize:"12px"}} className="fw-light">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated dialer, from Uber and its affiliates to the number provided. Text “STOP” to 89203 to opt out.</p>
 </div>
  )
}

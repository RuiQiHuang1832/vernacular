import React from 'react'
import Button from './Button'
import styles from "@/styles/HomePage.module.css"
import Link from 'next/link'

export default function Newsletter() {
  return (
    <div style={{ paddingTop: "12rem", maxWidth:"55em"}} className="mx-auto px-4">
    <div  className=" d-flex flex-column text-center">
      <h1 style={{maxWidth:"15em"}} className="mb-4 fw-bold mx-auto">
      Join 3,000+ reviewers getting practical tips
      </h1>
      <p style={{fontSize:"24px"}} className="mb-5 fw-light text-wrap">The Vernacular newsletter provides creative deep dives, review content, inspiration, and occasional product updates.</p>
      </div>
      <form style={{columnGap:"0.5rem",rowGap:"0.5rem"}} className="d-flex flex-column flex-sm-row">
      <input required type="text" style={{flex:"1 1 0%", padding:"18px"}} placeholder="First Name" className={`form-control light-border-input`} />
      <input required type="text" style={{flex:"1 1 0%",padding:"18px"}} placeholder="Email" className={`form-control light-border-input`} />
      <Button styleClass={`${styles["btn-inspiration"]}`}  buttonColor={{cssColor:"black"}} width={"auto"} radius="5px" padding="18px" type="submit">Get Inspiration</Button>
      </form>
      <div  className="text-center mt-3 text-wrap-pretty">
      Unsubscribe anytime. Your email will be guarded with unbreakable wards.<br></br>
      <Link href="/tos" className="text-decoration-underline text-success">Read our privacy policy.</Link>
      </div>
      </div>
  )
}

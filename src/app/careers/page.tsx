/* eslint-disable react/no-unescaped-entities */
import React from "react";
import careerImg from "@/assets/images/careers/careerImg.png";
import Image from "next/image";
import what_is_vernacular from "@/assets/images/careers/whatisvernacular.png";
import what_is_it_like_to_work_here from "@/assets/images/careers/whatisitliketoworkhere.png";
import what_are_we from "@/assets/images/careers/whatarewe.png";
import worker1 from "@/assets/images/careers/worker1.png";
import worker2 from "@/assets/images/careers/worker2.png";
import styles from "@/styles/Careers.module.css"
import BorderDivider from "@/components/BorderDivider";
import ImageTextHeader from "@/components/ImageTextHeader";
import { benefitsData } from "@/global/benefitsData";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";
import Button from "@/components/Button";
import {RiDoubleQuotesL, RiDoubleQuotesR} from "react-icons/ri"
import { officeData } from "@/global/officeData";
import classNames from "classnames";
const officeContainerStyle = classNames("col d-md-flex text-white justify-content-evenly text-center");

export default function Careers() {
  return (
    <>
      <div className="container text-white">
        <div className="row pb-5">
          <div className="align-self-center col-5">
            <h1>Democratize data <span className="text-success">with</span> us</h1>
            <p>We&apos;re building the mobile industry&apos;s leading competitive intelligence platform. We can&apos;t do that without smart, inquisitive, and persistent individuals like yourself. If you are looking for a rewarding professional challenge that will help you grow as we grow, you&apos;re in the right place.</p>
            <Button color="btn-success" href="/contact-us" text="Explore Job Openings" width={"auto"}></Button>
          </div>
          <div className="col-7 text-end">
            <Image src={careerImg} alt="career image" width={600} height={500} quality={100} />
          </div>
        </div>
        <h1 className="text-center pt-5">Life At <span className="text-success">Vernacular</span></h1>
        <div className="row pb-5">
          <div className="d-flex justify-content-center pt-5">
            <Image src={what_is_vernacular} alt="What is vernacular" width={150} height={150} quality={100} />
            <div className="col-7 ms-4">
              <h2>What is Vernacular</h2>
              <p>Vernacular is a cutting-edge platform specializing in media evaluation, catering to enthusiasts of movies, shows, and music. Our user-friendly website empowers users to rate and review their favorite media, fostering a vibrant community that shares insights and recommendations. Join us as we redefine the way users engage with and discover the best in entertainment!</p>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <Image src={what_is_it_like_to_work_here} alt="What is it like to work here?" width={150} height={150} quality={100} />
            <div className="col-7 ms-4">
              <h2>What is it like to work here?</h2>
              <p>At Vernacular Hub, we're a dynamic team of collaborative individuals. We thrive on the belief that our success is a collective victory, and everyone plays a crucial role in our triumph. Expect daily access to leadership, including the founders, providing the support you need for your success journey.</p>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-5">
            <Image src={what_are_we} alt="Our values" width={150} height={150} quality={100} />
            <div className="col-7 ms-4">
              <h2>Our values</h2>
              <p>Embracing a culture that treasures each team member, we unite to attain success together. Our foundation rests on the pillars of teamwork, perpetual learning, and an unwavering commitment to delivering unparalleled competitive intelligence services. Count on our support to help you flourish in this dynamic and fast-paced environment.</p>
            </div>
          </div>
        </div>
        <div className="py-5"></div>
        <div className="row py-5 mt-5 justify-content-center">
          <div className="col-5">
            <div className="card text-bg-light my-3 p-2 px-5">
            <Image className="mx-auto" style={{borderRadius:"9999px"}} src={worker1} alt="worker2" width={50} height={50} quality={100} />
            <BorderDivider></BorderDivider>
              <div className="card-body">
              <RiDoubleQuotesL color="#4389FF" size="2.5em" style={{position:"absolute",left:"10px", top:"85px"}}></RiDoubleQuotesL>
                <p className="card-text text-center">&#9;I am surrounded by highly professional people who genuinely care about those they work with. They are always doing their best to provide help and experience to accomplish our goals.&#9;</p><RiDoubleQuotesR color="#A1C5FF" size="2.5em" style={{position:"absolute",right:"20px", bottom:"20px"}}></RiDoubleQuotesR>
              </div>
            </div>
          </div>
          <div className={`col-5 ${styles["career-quote"]}`} >
            <div className="card text-bg-light my-3  p-2 px-5">
                <Image className="mx-auto" style={{borderRadius:"9999px"}} src={worker2} alt="worker1" width={50} height={50} quality={100} />
                <BorderDivider></BorderDivider>
              <div className="card-body">
              <RiDoubleQuotesL color="#4389FF" size="2.5em" style={{position:"absolute",left:"10px", top:"85px"}}></RiDoubleQuotesL>
                <p className="card-text text-center">"As an inventor I know the phrase - "everything is already invented". As a developer at Vernacular, I continue to invent amazing things - and that is my favorite job."</p><RiDoubleQuotesR color="#A1C5FF" size="2.5em" style={{position:"absolute",right:"20px", bottom:"20px"}}></RiDoubleQuotesR>
              </div>
            </div>
          </div>
        </div>
        <section>
        <h1 className="text-center pt-5">Perks & Benefits</h1>
            <p className="mx-auto col-8 text-center">Partial summary of benefits and perks currently offered to eligible employees. All offerings are provided at the sole discretion of the company. Offerings are subject to review, and may be changed at any time. </p>
            <div className="row row-cols-3">
            {mapObjectToComponent(benefitsData, ImageTextHeader)}
            </div>
        </section>
        <section>
        <h1 className="text-center pt-5">Our Locations</h1>
        <div style={{ marginTop: "15em" }} className={officeContainerStyle}>
        {officeData.map(
          (e, index): React.ReactNode => (
            <div key={index}>
              <Image src={e.src} className={`${e.additionalClass} globalObjectFit rounded-circle`} alt={e.alt} width={300} height={300} quality={100} />
              <h3 className="mt-4">{e.name}</h3>
              <p className="text-info lh-lg">
                {e.number}
                <br />
                {e.email}
              </p>
            </div>
          )
        )}
      </div>
        </section>
      </div>
    </>
  );
}

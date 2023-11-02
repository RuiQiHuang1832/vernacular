import React from 'react'
import careerImg from "@/assets/images/careerImg.png"
import Image from 'next/image'

export default function Careers() {
  return (
    <>
    <section className="container text-white">
        <div className="d-flex">
            <div className="align-self-center">
            <h1>Democratize data with us</h1>
            <p>We&apos;re building the mobile industry&apos;s leading competitive intelligence platform. We can&apos;t do that without smart, inquisitive, and persistent individuals like yourself. If you are looking for a rewarding professional challenge that will help you grow as we grow, you&apos;re in the right place.</p>
            </div>
            <div>
                <Image src={careerImg} alt="Home page logo" width={600} height={500} quality={100} /></div>
        </div>
    </section>
    </>
  )
}

import React from "react";
import Image from "next/image";
import styles from "@/styles/HeaderWithImageAndParagraph.module.css";
import Link from "next/link";

type HeaderProps = {
  header: React.ReactNode;
  paragraph:  React.ReactNode;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  direction: "flex-row" | "flex-row-reverse";
  learnMore: string;
  id: string
};

export default function HeaderWithImageAndParagraph({header, paragraph, imageSrc, imageWidth, imageHeight, direction, learnMore, id}: HeaderProps) {
  return (
    <section className="container mt-5" id={id}>
    <div className={`${direction} row gx-0`}>
      <div className={`col-6 d-flex align-items-center ${direction == "flex-row" ? "justify-content-end" : "justify-content-start"}`}>
        <div className={`text col-11`}>
          <h1 className={`${styles['default-font-size']} fw-bold`}>{header}</h1>
          <hr />
          <p>{paragraph}</p>
          <Link className="text-decoration-none" href="#">{learnMore}</Link>
        </div>
      </div>
      <div className={`col-6 d-flex justify-content-center`}>
        <div className="image">
          <Image src={imageSrc} alt="Logo" width={imageWidth} height={imageHeight} quality={100} />
        </div>
      </div>
    </div>
  </section>
  
  );
}

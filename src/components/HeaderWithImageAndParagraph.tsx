import React from "react";
import Image from "next/image";
import styles from "@/styles/HeaderWithImageAndParagraph.module.css";
import Link from "next/link";
import classNames from "classnames";
import { SectionType as HeaderProps }  from "@/global/sectionsData";

export default function HeaderWithImageAndParagraph({ header, paragraph, imageSrc, imageWidth, imageHeight, direction, learnMore, id, sectionContainerClass }: HeaderProps) {
  
  const imageContainer: string = classNames("col-md-6 col my-4 d-flex justify-content-center");
  const learnMoreLink: string = classNames("text-decoration-none d-block mt-3");
  const textContainer: string = classNames("col-md-6  col d-flex align-items-center", direction == "flex-md-row" ? "justify-md-content-end" : "justify-md-content-start", "order-1 order-md-0", "justify-content-center");
  const headerText: string = classNames(styles["default-font-size"], "fw-bold");

  return (
    <section className={`${sectionContainerClass} d-flex`} id={id}>
      <div className={`${direction} flex-column align-content-center row gx-0 container-xxl mx-auto`}>
        <div className={`${textContainer}`} >
          <div className={`text col-11 `}>
            <h1 className={`${headerText} responsiveHeader`}>{header}</h1>
            <hr />
            <span>{paragraph}</span>
            <Link className={learnMoreLink} href="#">
              {learnMore}
            </Link>
          </div>
        </div>
        <div className={imageContainer}>
          <div className="image">
            <Image src={imageSrc} alt="Logo" width={imageWidth} height={imageHeight} quality={100} className="globalObjectFit" />
          </div>
        </div>
      </div>
    </section>
  );
}

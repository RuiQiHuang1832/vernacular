import React from "react";
import Image from "next/image";
import styles from "@/styles/HeaderWithImageAndParagraph.module.css";
import Link from "next/link";
import classNames from "classnames";
import { SectionType as HeaderProps }  from "@/global/sectionsData";

export default function HeaderWithImageAndParagraph({ header, paragraph, imageSrc, imageWidth, imageHeight, direction, learnMore, id, sectionContainerClass }: HeaderProps) {
  
  const imageContainer: string = classNames("col-lg-6 col-12 my-4 d-flex justify-content-center");
  const learnMoreLink: string = classNames("text-decoration-none d-block mt-3");
  const textContainer: string = classNames("col-lg-6  col-12 d-flex align-items-center", direction == "flex-lg-row" ? "justify-content-md-start" : "justify-content-md-end", "order-1 order-lg-0", "justify-content-center");
  const headerText: string = classNames(styles["default-font-size"], "fw-bold");

  return (
    <section className={`${sectionContainerClass} d-flex container`} id={id}>
      <div className={`${direction} flex-column align-content-center row gx-0 mx-auto`}>
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
            <Image src={imageSrc} alt="Logo" width={imageWidth} height={imageHeight} quality={100} style={{borderRadius:"20%"}} className="globalObjectFit" />
          </div>
        </div>
      </div>
    </section>
  );
}

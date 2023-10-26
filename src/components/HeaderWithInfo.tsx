import React from "react";
import { aboutType as HeaderProps } from "@/global/aboutData";
import classNames from "classnames";


export default function HeaderWithInfo({ header, information, headerSide }: HeaderProps) {

  const headerStyle: string = classNames("col-lg pb-5 pb-lg-0 my-auto text-center defaultGreen fw-semibold", 
  headerSide == "right" ? "order-0" : "order-lg-1")
  const infoStyle: string = classNames("col", "lh-lg",headerSide == "top" ? "mt-5 mx-auto col-lg-8" : "")

  return (
    <>
        <div className={`row text-start ${headerSide == "top" ? "flex-lg-column-reverse" : ""}`}>
          <h3 className={headerStyle}>{header}</h3>
          <div style={{fontSize:"16px"}} className={infoStyle}>{information}</div>
        </div>
        <div style={{marginBottom:"7em"}}></div>
    </>
  );
}

import React from "react";
import { aboutType as HeaderProps } from "@/global/aboutData";
import classNames from "classnames";


export default function HeaderWithInfo({ header, information, headerSide }: HeaderProps) {

  const headerStyle: string = classNames("col-lg pb-5 pb-lg-0 my-auto text-center defaultGreen fw-semibold", 
  headerSide == "right" ? "order-0" : "order-lg-1")
  const infoStyle: string = classNames("col", "fw-light", "lh-lg")

  return (
    <>
        <div className="row text-start">
          <h3 className={headerStyle}>{header}</h3>
          <div style={{fontSize:"18px;"}} className={infoStyle}>{information}</div>
        </div>
        <div style={{marginBottom:"7em"}}></div>
    </>
  );
}

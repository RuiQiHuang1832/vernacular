import React from "react";
import { aboutType as HeaderProps } from "@/global/aboutData";
import classNames from "classnames";

export default function HeaderWithInfo({ header, information, headerSide }: HeaderProps) {
  const headerStyle = classNames("col-lg pb-5 my-auto text-center defaultGreen fw-bold", 
  headerSide == "right" ? "order-0" : "order-lg-1")
  const infoStyle = classNames("col pb-5")

  return (
    <>
        <div className="row text-start">
          <h3 className={headerStyle}>{header}</h3>
          <div className={infoStyle}>{information}</div>
        </div>
    </>
  );
}

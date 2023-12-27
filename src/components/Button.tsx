import React from "react";
import styles from "@/styles/Button.module.css";
import Link from "next/link";
import classNames from "classnames";

type ButtonProps = {
  color: string;
  href?: string;
  text: string;
  additionalStyle?: string
  width: string;
  type?: "button" | "submit";
};

export default function Button({ color, href="/", text, additionalStyle, width, type="button" }: ButtonProps) {
  const btnStyles: string = classNames("btn", color, styles["default-button-size"]);
  const textStyles:string = classNames("text-decoration-none text-white fw-light text-nowrap")
  const typeOfButton: JSX.Element | string = type === "button" ? <Link href={href} className={textStyles}>{text}</Link> : text
  return (
    <div className={`${styles["button"]} mb-3`}>
      <button type={type} style={{width}} className={`${btnStyles} ${additionalStyle} text-white`}>
       {typeOfButton}
      </button>
    </div>
  );
}

import React from "react";
import styles from "@/styles/Button.module.css";
import Link from "next/link";
import classNames from "classnames";

type ButtonProps = {
  color: string;
  href: string;
  text: string;
  additionalStyle?: string
  width: string;
};

export default function Button({ color, href, text, additionalStyle, width }: ButtonProps) {
  const btnStyles: string = classNames("btn", color, styles["default-button-size"]);
  const textStyles:string = classNames("text-decoration-none text-white fs-bold fw-medium")
  return (
    <div className={`${styles["button"]} mb-3`}>
      <button type="button" style={{width}} className={`${btnStyles} ${additionalStyle}`}>
        <Link href={href} className={textStyles}>
          {text}
        </Link>
      </button>
    </div>
  );
}

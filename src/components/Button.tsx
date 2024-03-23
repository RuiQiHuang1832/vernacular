import React from "react";
import styles from "@/styles/Button.module.css";
import Link from "next/link";
import classNames from "classnames";

type ButtonProps = {
  buttonColor: buttonColorProps;
  href?: string;
  text: string;
  width: string;
  type: "button" | "submit" | "reset";
  radius: string;
  padding: string;
};

type buttonColorProps =
  | {
      cssColor: string;
      bootstrapColor?: never; // Ensuring only one color type is provided
    }
  | {
      cssColor?: never;
      bootstrapColor: string;
    };

export default function Button({ buttonColor = { cssColor: "", bootstrapColor: undefined }, text, href, type, width, radius, padding }: ButtonProps) {
  // If href prop is provided, render an anchor element
  const { cssColor = "", bootstrapColor = "" } = buttonColor;
  const btnClass = classNames(`${styles["button"]} text-nowrap ${bootstrapColor}`)
  if (href) {
    return (
      <Link href={href} className={btnClass} style={{ backgroundColor: cssColor, width, borderRadius: radius, padding }} type={type}>
        {text}
      </Link>
    );
  }
  // Otherwise, render a button element
  return (
    <button className={btnClass} type={type} style={{ backgroundColor: cssColor, width, borderRadius: radius, padding }}>
      {text}
    </button>
  );
}

import React from "react";
import styles from "@/styles/Button.module.css";
import Link from "next/link";
import classNames from "classnames";

/**
 * Props for the Button component.
 */
type ButtonProps = {
  /** The color of the button. Can either be a cssColor or bootstrapColor */
  buttonColor: buttonColorProps;
  /** Optional. The URL the button should navigate to when clicked. */
  href?: string;
  /** The text displayed on the button. */
  text: string;
  /** Optional. The width of the button. */
  width?: string;
  /** The type of the button. */
  type: "button" | "submit" | "reset";
  /** The border radius of the button. */
  radius: string;
  /** The padding of the button. */
  padding: string;
  /** Optional Bootstrap style for the button. */
  bootstrapStyle?: string;
  /** Optional CSS class for additional styling. */
  styleClass?: string;
};

/**
 * Color properties for the button.
 */
type buttonColorProps =
  | {
      /** The CSS color of the button. */
      cssColor: string;
      /** Bootstrap color (optional). */
      bootstrapColor?: never; // Ensuring only one color type is provided
    }
  | {
      /** Bootstrap color of the button. */
      bootstrapColor: string;
      /** CSS color (optional). */
      cssColor?: never;
    };
    
export default function Button({ buttonColor = { cssColor: "", bootstrapColor: undefined }, text, href, type, width = "100%", radius, padding, bootstrapStyle = "", styleClass }: ButtonProps) {
  // If href prop is provided, render an anchor element
  const { cssColor = "", bootstrapColor = "" } = buttonColor;
  const btnClass = classNames(`${styles["button"]} ${bootstrapColor} ${bootstrapStyle} ${styleClass}`)
  if (href) {
    return (
      <Link href={href} className={btnClass} style={{ backgroundColor: cssColor, width, borderRadius: radius, padding }} type={type}>
        {text}
      </Link>
    );
  }
  // Otherwise, render a button element
  return (
    <button className={btnClass} type={type} style={{ backgroundColor: cssColor, width, borderRadius: radius, padding, border:0 }}>
      {text}
    </button>
  );
}

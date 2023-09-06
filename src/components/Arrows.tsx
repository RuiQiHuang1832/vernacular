import React from "react";
import styles from "@/styles/Arrows.module.css";
import { ImArrowDownRight2, ImArrowDown2, ImArrowDownLeft2 } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import classNames from "classnames";

type ArrowIcon = {
  direction: "right" | "center" | "left";
  animation: "bounce-diagonal-right" | "bounce-up-down" | "bounce-diagonal-left";
  Icon: React.ElementType;
};

const arrowIcons: ArrowIcon[] = [
  { direction: "right", Icon: ImArrowDownRight2, animation: "bounce-diagonal-right" },
  { direction: "center", Icon: ImArrowDown2, animation: "bounce-up-down" },
  { direction: "left", Icon: ImArrowDownLeft2, animation: "bounce-diagonal-left" },
];

export default function Arrows() {
  return (
    <div className={`${styles["arrow-container"]}`}>
      {arrowIcons.map(
        (arrow, index): React.ReactNode => (
          <span key={index} className={`${styles["arrow"]} ${styles[arrow.animation]}  ${styles[arrow.direction]}`}>
            <arrow.Icon size="0.5em"></arrow.Icon>
          </span>
        )
      )}
    </div>
  );
}

export function ScrollableArrow() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const arrowClasses: string = classNames("text-center", styles["bounce"], {
    [styles["hidden"]]: isScrolled, // Conditionally apply the 'hidden' class
  });
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = (): void => {
      // Check if the user has scrolled beyond a certain threshold (e.g., 100 pixels)
      if (window.scrollY !== 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={arrowClasses}>
      <RiArrowDropDownLine className={styles["scrollPosition"]} size="5em"></RiArrowDropDownLine>
    </div>
  );
}

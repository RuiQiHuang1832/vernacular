"use client";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import lightTheme from "@/assets/svg/light-theme.svg";
import lightHighContrast from "@/assets/svg/light-high-contrast.svg";
import lightColorblind from "@/assets/svg/light-colorblind.svg";
import darkDefault from "@/assets/svg/dark-preview.svg";
import darkColorblind from "@/assets/svg/dark-colorblind.svg";
import darkDimmed from "@/assets/svg/dark-dimmed.svg";
import darkTritanopia from "@/assets/svg/dark-tritanopia.svg";
import lightTritanopia from "@/assets/svg/light-tritanopia.svg";
import darkHighContrast from "@/assets/svg/dark-high-contrast.svg";
import Image from "next/image";
import classNames from "classnames";
import styles from "@/styles/settings-styles/Appearance.module.css";

export default function Appearance() {
  const themes = [
    { theme: "Light default", svg: lightTheme },
    { theme: "Light high contrast", svg: lightHighContrast },
    { theme: "Light Protanopia & Deuteranopia", svg: lightColorblind },
    { theme: "Light Protanopia", svg: lightTritanopia },
    { theme: "Dark default", svg: darkDefault },
    { theme: "Dark protanopia & Deuteranopia", svg: darkColorblind },
    { theme: "Dark dimmed", svg: darkDimmed },
    { theme: "Dark Tritanopia", svg: darkTritanopia },
    { theme: "Dark high contrast", svg: darkHighContrast },
  ];

  const emojis = [{ emoji: "👋" }, { emoji: "👋🏻" }, { emoji: "👋🏼" }, { emoji: "👋🏽" }, { emoji: "👋🏾" }, { emoji: "👋🏿" }];

  const accents = [{ color: "#3D71F0" }, { color: "#BA7CF3" }, { color: "#F7BB65" }, { color: "#EC3D67" }];
  
  const [theme, setTheme] = useState("Light default");
  const [emoji, setEmoji] = useState("👋");
  const [accent, setAccent] = useState("#3D71F0");

  const handleThemeChange = (value: string) => {
    setTheme(value);
  };

  const handleEmojiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmoji(event.target.value);
  };
  const handleAccentChange = (value: string) => {
    setAccent(value);
  };

  return (
    <div>
      <section>
      <SectionHeading on={true} section="Theme Preferences"></SectionHeading>
      <p className="subtext">Choose how Vernacular looks to you. Select a single theme, or sync with your system and automatically switch between day and night themes.</p>
      <div className="d-flex flex-wrap justify-content-between">
        {themes.map((e, i) => (
          <div
            key={i}
            className={`${styles["theme-container"]} 
          ${classNames({ ["border-primary"]: theme == e.theme }, { ["border-dark"]: theme != e.theme })} `}
          >
            <div onClick={() => handleThemeChange(e.theme)} className={`${styles["img-container"]}`}>
              <Image alt={`theme-${e.theme}`} src={e.svg} width={0} height={0} sizes="100vw" className={`${styles["img"]}`}></Image>
            </div>
            <input onChange={() => handleThemeChange(e.theme)} className={`${styles["theme-input"]} form-check-input`} type="radio" checked={theme == e.theme} />
            <div className={styles["theme-label"]}>{e.theme}</div>
          </div>
        ))}
      </div>
      </section>
      <section>
      <SectionHeading on={true} headingStyles="mt-5" section="Emoji skin tone preference"></SectionHeading>
      <p className="subtext">Preferred default emoji skin tone</p>
      {emojis.map((e, i) => (
        <label key={i} className="me-2">
          <input onChange={handleEmojiChange} value={e.emoji} checked={e.emoji == emoji} className={`form-check-input ${styles["emoji-input"]}`} type="radio" />
          <span className={styles["emoji-label"]}>{e.emoji}</span>
        </label>
      ))}
      </section>
      <section>
      <SectionHeading on={true} headingStyles="mt-5" section="Accent color"></SectionHeading>
      <p className="subtext">Highlight color for objects like buttons</p>
      <div className={styles["accent-section"]}>
        {accents.map((e, i) => (
          <div key={i} className={`me-2 ${classNames({ [styles["circle-selected"]]: e.color == accent })} ${styles["circle-border"]}`}>
            <div onClick={() => handleAccentChange(e.color)} style={{ backgroundColor: `${e.color}` }} className={`${styles["circle"]}`}></div>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}

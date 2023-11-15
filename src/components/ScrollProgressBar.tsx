import { useState, useEffect } from "react";
import styles from "@/styles/ScrollProgressBar.module.css";

type ScrollProgressBarProps = {
  size?: string;
  startHeight: number;
  startColor: string;
  fillColor?: string;
  distance: number;
  icons: React.ElementType[];
};

export default function ScrollProgressBar({ size = "2em", startHeight, startColor, fillColor = "#1D8754", distance, icons }: ScrollProgressBarProps) {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress: () => void = () => {
      const scrollableHeight: number = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll: number = window.scrollY;
      const progress: number = (currentScroll / scrollableHeight) * (startHeight + 100);
      setScrollProgress(progress - startHeight);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const getIconColor = (iconIndex: number): string => {
    if (scrollProgress >= iconIndex * distance) {
      console.log(scrollProgress)
      // 25 but -1 to offset. so 24.
      return fillColor;
    }
    return startColor;
  };

  return (
    <div className={styles["scroll-container"]}>
      <div className={styles["scroll-wrapper"]}>
        <div className={styles["scroll-progress-bar"]} style={{ height: `${scrollProgress}%` }}></div>
        {icons.map(
          (Icon, index): React.ReactNode => (
            <div className={styles["item-container"]} key={index}>
              <div className={styles["item-counter"]}>
                <Icon size={size} color={getIconColor(index)} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

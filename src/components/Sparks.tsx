import React from 'react'
import styles from "../styles/Sparks.module.css"
export default function Sparks() {
  return (
    <div className={`ms-auto ${styles["heart-icon"]} `}>
    <svg viewBox="0 0 54 54" fill="black" stroke="red" width="24" role="presentation" color="black" style={{width:"3em", height:"3em"}} >
      <g  className={styles["heart"]}>
        <path className={styles["heart heart-outline"]} d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z" ></path>
        <path className={styles["heart heart-filled"]} d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z" stroke-width="2"></path>
      </g>
      <g className={styles["sparks"]}>
        <path className={styles["spark"]} d="M27 8V0M27 46v8" stroke-width="2"></path>
        <path className={styles["spark"]} d="M41.171 12.828l5.657-5.657M12.829 12.828L7.171 7.172" stroke-width="2"></path>
        <path className={styles["spark"]} d="M46 27h8M8 27H0" stroke-width="2"></path>
        <path className={styles["spark"]} d="M41.172 41.172l5.657 5.656M12.829 41.171l-5.657 5.657" stroke-width="2"></path>
      </g>
    </svg>
  </div>
  )
}

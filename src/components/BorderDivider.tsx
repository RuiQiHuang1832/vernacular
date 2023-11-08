import React from 'react'
import styles from "@/styles/BorderDivider.module.css"

type BorderDividerProps = {
    borderBottom?: string;
    left?: string;
    right?: string;
    marginTop?: string;
    marginBottom?: string;
}

export default function BorderDivider(props: BorderDividerProps) {
    const {borderBottom, left, right, marginTop, marginBottom} = props
  return (
    <div style={{marginTop: marginTop, marginBottom: marginBottom }} className={styles["container-box"]}>
    <div style={{borderBottom: borderBottom, left: left, right: right}} className={styles["divider"]}></div>
    </div>
  )
}

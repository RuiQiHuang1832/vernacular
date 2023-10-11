import React from 'react'
import style from "@/styles/Input.module.css";
import classNames from 'classnames';

type InputHeader = {
    icon: React.ElementType;
    text: string
}

export default function Input(props: InputHeader) {
    const inputContainer = classNames("input-group mb-3", style["input-container"])
    const iconContainer = classNames("input-group-text pe-0 border-0 bg-transparent")
    const input = classNames("bg-transparent text-white form-control border-0 special-form-control",
    style["placeholder"] )
  return (
    <div className={inputContainer} tabIndex={0}>
    <span className={iconContainer}>
      <props.icon size="1.5em" className="text-white"></props.icon>
    </span>
    <input type="text" className={input} placeholder={props.text} />
  </div>
  )
}

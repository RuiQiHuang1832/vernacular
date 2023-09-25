import React from "react";
import styles from "@/styles/Form.module.css";
import Button from "./Button";
import classNames from "classnames";

interface formPropType {
  title: string;
  input: {
    color: string;
    text: string;
    type: string;
  }[];
  checkbox?: React.ReactNode[];
}

export default function Form(props: formPropType) {
  const formStyle = classNames(styles["form"], "text-center");
  const inputStyle = classNames(styles["input"], "form-control py-3 ");
  return (
    <form className={formStyle}>
      <h3 className="text-center mb-4">Let&apos;s Chat</h3>
      {props.input.map((e, index) => (
        <div className="row mb-3" key={index}>
          <div className="col">
            <input type={e.type} className={inputStyle} style={{ backgroundColor: e.color }} placeholder={e.text} />
          </div>
        </div>
      ))}
      {props.checkbox &&
        props.checkbox.map((e, index) => (
          <div className="form-check" key={index}>
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">{e}</label>
          </div>
        ))}
      <Button color="btn btn-dark" href="/login" text="Let's connect!" width={"auto"}></Button>
    </form>
  );
}

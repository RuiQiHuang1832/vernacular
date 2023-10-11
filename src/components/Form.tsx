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
  buttonText: string;
  btnColor:string;
  info?:string;
  additionalLink?:React.ReactNode;
}

export default function Form(props: formPropType) {
  const formStyle = classNames(styles["form"], "defaultGreen");
  const inputStyle = classNames(styles["input"], "form-control py-3 ");
  return (
    <form className={formStyle}>
      <h3 className="text-center mb-4">{props.title}</h3>
      <p className="text-white pb-3 col-11 mx-auto">{props.info}</p>
      {props.input.map((e, index) => (
        <div className="row mb-3" key={index}>
          <div className="col">
            <input type={e.type} className={inputStyle} style={{ backgroundColor: e.color }} required placeholder={e.text} />
          </div>
        </div>
      ))}
      {props.checkbox &&
        props.checkbox.map((e, index) => (
          <div className="form-check" key={index}>
            <input className="form-check-input" required type="checkbox" />
            <label className="form-check-label ">{e}</label>
          </div>
        ))}
        {props.additionalLink}
        <div className="text-center">
      <Button type="submit" color={`${props.btnColor } btn`} text={props.buttonText} width={"auto"}></Button>
      </div>
    </form>
  );
}

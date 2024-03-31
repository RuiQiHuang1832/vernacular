'use client'
import Button from "@/components/Button";
import styles from "@/styles/login-styles/StepPassword.module.css";
import { LuArrowRightToLine, LuArrowLeftToLine } from "react-icons/lu";
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import { useState } from "react";
import _ from "lodash";

interface StepPassword {
  password:string;
  setPassword:(password: string) => void;
}

export default function StepPassword(props:StepPassword) {
  const [hiddenStatus, setHiddenStatus ] = useState(true);
  const handleEyeChange = () => {
    setHiddenStatus(!hiddenStatus)
  }
   // Debounce the setPassword function
  const debouncedSetPassword = _.debounce((value: string) => {
    props.setPassword(value);
  }, 500);  // 500 milliseconds debounce time
  
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetPassword(e.target.value)
  }

  return (
    <div>
      <p style={{ fontSize: "14px" }} className="fw-light mb-5">
        Your password must be at <span className="text-info">least 8 characters long</span>, and contain at <span className="text-info">least one digit and one non-digit character</span>
      </p>
      <div className="input-group  mb-3">
        <input type={hiddenStatus ? "password" : "text"} onChange={handleOnChange} className={`form-control fw-light ${styles["password-input"]}`} placeholder="Enter your password" />
        <span onClick={handleEyeChange} className={`input-group-text ${styles["password-eye"]}`}>
          {hiddenStatus ? <FaEye/> : <FaEyeSlash />}
        </span>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <Button buttonColor={{ cssColor: "black" }} styleClass={`mb-3 ${styles["button"]}`} radius="10px" padding="13px 17px" type="button">
          <LuArrowLeftToLine></LuArrowLeftToLine>
        </Button>
        <Button buttonColor={{ cssColor: "black" }} styleClass={`mb-3 ${props.password === "" ? styles["button-continue-disabled"] : styles["button"] } `} radius="10px" padding="12px" type="button">
          Continue&nbsp;<LuArrowRightToLine></LuArrowRightToLine>
        </Button>
      </div>
    </div>
  );
}

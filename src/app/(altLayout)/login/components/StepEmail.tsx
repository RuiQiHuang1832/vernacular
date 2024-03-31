import Button from "@/components/Button";
import styles from "@/styles/login-styles/StepEmail.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsQrCode } from "react-icons/bs";


const altLogin = [
  { provider: "break" }, 
  { provider: "Continue with Google", icon: FcGoogle, color: "none", size: "1.5em" }, 
  { provider: "Continue with Apple", icon: BsApple, color: "black", size: "1.5em" }, 
  { provider: "break" }, 
  { provider: "Log in with QR code", icon: BsQrCode, color: "black", size: "1em" }
];

interface StepEmailProps {
  handleContinue:React.MouseEventHandler<HTMLButtonElement>
}


export default function StepEmail(props:StepEmailProps) {
 
  return (
    <div>
      <input type="email" className={`form-control fw-light mb-3 ${styles["email-input"]}`} placeholder="Enter phone number or email" />
      <Button buttonColor={{ cssColor: "black" }} eventOnClick={props.handleContinue} styleClass={`mb-3`} radius="10px" padding="12px" type="button">Continue</Button>
      {altLogin.map((e, i) => {
        if (e.provider === "break") {
          return (
            <div key={i} className={`${styles["or"]} mb-3`}>
              <p className={styles["label"]}>or</p>
            </div>
          );
        } else {
          return (
            <button key={i} className={`${styles["button"]} mb-3`}>
              <div className={`${styles["button-icon"]}`}>
                <e.icon color={e.color} size="1.5em" />
              </div>
              <span className={`${styles["button-text"]}`}>{e.provider}</span>
            </button>
          );
        }
      })}
      <p className={styles["disclaimer"]}>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated dialer, from Uber and its affiliates to the number provided. Text “STOP” to 12303 to opt out.</p>
    </div>
  );
}

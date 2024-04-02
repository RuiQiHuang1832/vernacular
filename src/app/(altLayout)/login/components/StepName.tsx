import Button from "@/components/Button";
import { LuArrowLeftToLine } from "react-icons/lu";
import styles from "@/styles/login-styles/StepName.module.css"
interface StepName {
  handleBack: () => void;
}

export default function StepName(props: StepName) {
  return (
    <div>
      <p style={{ fontSize: "14px" }} className="fw-light mb-5">
        Let us know how to properly address you
      </p>
      <div className="input-group  mb-3">
        <input type="text" className={`form-control step-input`} placeholder="Enter first name" />
      </div>
      <div className="input-group  mb-3">
        <input type="text" className={`form-control step-input`} placeholder="Enter last name" />
      </div>
      <div className="d-flex justify-content-between mt-5">
      <Button buttonColor={{ cssColor: "black" }} eventOnClick={props.handleBack} styleClass={`mb-3 ${styles["button"]}`} radius="10px" padding="13px 17px" type="button">
        <LuArrowLeftToLine></LuArrowLeftToLine>
      </Button>
      <Button buttonColor={{ cssColor: "black" }} styleClass={`mb-3 ${styles["button"]}`} radius="10px" padding="12px" type="button">
        Submit
      </Button>
      </div>
    </div>
  );
}

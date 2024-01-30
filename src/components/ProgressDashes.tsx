import styles from "@/styles/ProgressDashes.module.css";
import classNames from "classnames";

interface ProgressDashesProps {
  length: number;
  current: number;
}

export default function ProgressDashes(props: ProgressDashesProps) {
  const dashElements = Array.from({ length: props.length }, (_, index) => (
    <div
      key={index}
      className={classNames(styles["dash"], {
        [styles["completed"]]: props.current > index,
        [styles["current"]]: props.current - 1 == index,
      })}
    ></div>
  ));

  return (
    <>
      <div className="d-flex">{dashElements}</div>
      <div className="mt-2">
        {props.current} of {props.length}
      </div>
    </>
  );
}

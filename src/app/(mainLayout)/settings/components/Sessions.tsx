"use client";
import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { RiComputerLine } from "react-icons/ri";
import Button from "@/components/Button";
import styles from "@/styles/settings-styles/Sessions.module.css";

export default function Sessions() {
  interface InfoItem {
    [key: string]: string[];
  }
  interface seeMoreType {
    [key: number]: boolean;
  }
  const info: InfoItem[] = [
    {
      "Device:": ["Chrome on Windows"],
      "Last Location:": ["Oakland, California, United States"],
      "Signed in:": ["March 03, 2024", "Oakland, California, United States"],
    },
  ];

  const [seeMore, setSeeMore] = useState<seeMoreType>({});
  const handleOnClick = (i: number) => {
    setSeeMore((prevState) => ({ ...prevState, [i]: !prevState[i] }));
  };

  return (
    <div>
      <section>
        <SectionHeading on={true} section="Web sessions"></SectionHeading>
        <p className="subtext">This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.</p>
        {info.map((e, i) => (
          <div key={i} className={styles["individual-session-container"]}>
            <div className="d-flex flex-column">
              <div className="d-flex">
                <div className={styles["indicator"]}></div>
                <RiComputerLine className="mx-3" size={"2em"}></RiComputerLine>
                <div className="mx-2">
                  <strong className="d-block">Oakland 71.198.43.200</strong>
                  <small>Your current session</small>
                </div>
                <div className="ms-auto align-self-center">
                  <Button styleClass={styles["revoke-button"]} eventOnClick={() => handleOnClick(i)} buttonColor={{ cssColor: "grey" }} radius="10px" padding="5px 8px 5px 8px" width="auto" type="button">
                    See More
                  </Button>
                </div>
              </div>
              <small className="ms-3">Seen in US</small>
              {seeMore[i] &&
                Object.keys(e).map((key, j) => (
                  <div key={j} className="mx-3 mt-3">
                    <strong className="d-block">{key}</strong>
                    {info[i][key].map((k, z) => (
                      <small key={z} className="d-block">
                        {k}
                      </small>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
      <section>
        <SectionHeading on={true} section="Vernacular Mobile sessions"></SectionHeading>
        <p className="subtext pb-5">Vernacular Mobile can be used to verify your identity when signing in from a new device and as a two-factor authentication method. Learn more about authentication with Vernacular Mobile. To get started, install Vernacular Mobile for iOS or Android and sign in to your account.</p>
      </section>
    </div>
  );
}

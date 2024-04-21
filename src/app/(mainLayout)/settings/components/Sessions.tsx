import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { RiComputerLine } from "react-icons/ri";

export default function Sessions() {
  return (
    <div>
      <section>
        <SectionHeading on={true} section="Web sessions"></SectionHeading>
        <p className="subtext">This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.</p>
        <div className="border border-1 mb-3 rounded p-3 ps-0">
          <div className="d-flex flex-column">
            <div className="d-flex">
              <div className=" ms-3" style={{ width: "12px", height: "12px", border: "1px solid green", borderRadius: "10px", background: "green", marginTop: "8px" }}></div>
              <RiComputerLine className="mx-3" size={"2em"}></RiComputerLine>
              <div className="mx-2">
                <strong className="d-block">Oakland 71.198.43.200</strong>
                <small>Your current session</small>
              </div>
            </div>
            <small className="ms-3">Seen in US</small>
            <div className="mx-3 mt-3">
              <strong className="d-block ">Device:</strong>
              <small className="d-block">Chrome on Windows</small>
            </div>
            <div className="mx-3 mt-3">
              <strong className="d-block ">Last Location:</strong>
              <small className="d-block">Oakland, California, United States</small>
            </div>
            <div className="mx-3 mt-3">
              <strong className="d-block ">Signed in:</strong>
              <small className="d-block">March 03, 2024</small>
              <small>Oakland, California, United States</small>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SectionHeading on={true} section="Vernacular Mobile sessions"></SectionHeading>
        <p className="subtext">GitHub Mobile can be used to verify your identity when signing in from a new device and as a two-factor authentication method. Learn more about authentication with GitHub Mobile. To get started, install GitHub Mobile for iOS or Android and sign in to your account.</p>
      </section>
    </div>
  );
}

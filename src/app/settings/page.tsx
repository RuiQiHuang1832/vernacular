"use client";
import React from "react";
import styles from "@/styles/Settings.module.css";
import Billing from "./Billing";
import General from "./General";
import Data from "./Data";
import Integration from "./Integration";
import Members from "./Members";
import Appearance from "./Appearance";
import classNames from "classnames";

import { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("General");
  const activeLinkClass: string = styles["tab-active"];

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "General":
        return <General />;
      case "Billing":
        return <Billing />;
      case "Appearance":
        return <Appearance />;
      case "Data":
        return <Data />;
      case "Members":
        return <Members />;
      case "Integration":
        return <Integration />;
    }
  };

  return (
    <div className="container">
      <h3 className="text-white mt-5">Workspace Settings</h3>
      <section className="mt-5">
        <ul style={{ width: "35em" }} className={`nav nav-underline  justify-content-center border-bottom border-2 mx-end ${styles["underline"]}`}>
          <li className={`nav-item`}>
            <button className={`nav-link ${styles["tab"]} ${classNames({ [activeLinkClass]: activeTab === "General" })}`} aria-current="page" onClick={() => handleTabChange("General")}>
              General
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${styles["tab"]} ${classNames({ [activeLinkClass]: activeTab === "Billing" })}`} onClick={() => handleTabChange("Billing")}>
              Plan & Billing
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${styles["tab"]} `} onClick={() => handleTabChange("Appearance")}>
              Appearance
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${styles["tab"]} `} onClick={() => handleTabChange("Data")}>
              Data
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${styles["tab"]} `} onClick={() => handleTabChange("Members")}>
              Members
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${styles["tab"]} `} onClick={() => handleTabChange("Integration")}>
              Integration
            </button>
          </li>
        </ul>
        {renderTabContent()}
      </section>
    </div>
  );
}

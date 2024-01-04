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
import { FaGear, FaReceipt,FaPaintbrush,FaDatabase,FaPersonRays, FaCodeBranch  } from "react-icons/fa6";


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

  const listItems = [
    {item: "General", icon: <FaGear></FaGear>},
    {item: "Billing", icon: <FaReceipt></FaReceipt>},
    {item: "Appearance", icon: <FaPaintbrush></FaPaintbrush>},
    {item: "Data", icon: <FaDatabase></FaDatabase>},
    {item: "Members", icon: <FaPersonRays></FaPersonRays>},
    {item: "Integration", icon: <FaCodeBranch></FaCodeBranch>}
  
  ]
  

  return (
    <div style={{ padding: "0 30px 0 80px" }} className={`container-fluid px-5`}>
            <h3 className="text-white mt-5">Workspace Settings</h3>
      <section className="mt-5 row">
        <div  className={`list-group col-xxl-2 col-12 ${styles["list"]} mb-3 mb-xxl-0`}>
          {listItems.map((e, index) => (
            <button key={index} className={`text-start list-group-item ${styles["bg-color"]} ${styles["tab"]} ${classNames({ [activeLinkClass]: activeTab === e.item })}`} aria-current="page" onClick={() => handleTabChange(e.item)}>
            {e.icon}&ensp;<span className="align-middle">{e.item}</span>
            </button>
          ))}
        </div>
        <div  className="col-xxl-10 overflow-visible">
        {renderTabContent()}
        </div>
      </section>
    </div>
  );
}

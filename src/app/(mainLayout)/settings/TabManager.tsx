"use client";
import classNames from "classnames";
import { FaGear, FaReceipt, FaPaintbrush, FaBell } from "react-icons/fa6";
import { MdPrivacyTip } from "react-icons/md";
import { GiAerialSignal } from "react-icons/gi";
import styles from "@/styles/settings-styles/TabManager.module.css";
import { useState } from "react";


export default function TabManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<string>("General");
  const activeLinkClass: string = styles["tab-active"];

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  const listItems = [
    { item: "General", icon: <FaGear></FaGear> },
    { item: "Billing", icon: <FaReceipt></FaReceipt> },
    { item: "Sessions", icon: <GiAerialSignal></GiAerialSignal> },
    { item: "Notification", icon: <FaBell></FaBell> },
    { item: "Appearance", icon: <FaPaintbrush></FaPaintbrush> },
    { item: "Privacy & Security", icon: <MdPrivacyTip></MdPrivacyTip> },

  ];

  return (
    <div className="container-lg mt-5 text-white">
    <div className="mx-3 mx-lg-0">
      <h3>Workspace Settings</h3>
      <section className="mt-5 row justify-content-between">
        <div style={{flex:"1 0 0"}} className={`list-group col-md-2 col-12 mb-3 mb-xxl-0`}>
          {listItems.map((e, index) => (
            <button key={index} className={`text-start list-group-item ps-2 mb-1  text-nowrap ${styles["bg-color"]} ${styles["tab"]} ${classNames({ [activeLinkClass]: activeTab === e.item })}`} onClick={() => handleTabChange(e.item)}>
              {e.icon}&ensp;<span className="align-middle">{e.item}</span>
            </button>
          ))}
        </div>
        <div  className="col-md-9 overflow-visible">{children}</div>
      </section>
    </div>
    </div> 
  );


}

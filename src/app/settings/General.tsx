"use client";
import React from "react";
import { useState } from "react";
import styles from "@/styles/Settings.module.css";

const bioHeight = 100;
const editProfileHeight = 555.2 + bioHeight;
const otherFormsHeight = editProfileHeight / 2;
const spaceBetweenBoxes = 16;

export default function General() {
  const charLimit = 100;
  const [charCount, setCharCount] = useState(charLimit);
  const [checkBoxStates, setCheckboxStates] = useState([true, true, false]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(charLimit - e.target.value.length);
  };

  const handleCheckboxChange = (index: number) => {
    const newCheckboxStates = [...checkBoxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  const formField = [{ field: "Username" }, { field: "Email" }, { field: "Address" }, { field: "Phone" }, { field: "Address" }];

  const formFieldPassword = [{ field: "Current Password" }, { field: "New Password" }, { field: "Confirm Password" }];

  const notificationOptions = [
    {
      id: 0,
      label: "Order Confirmation",
      description: "You will be notified when a customer orders any product",
    },
    {
      id: 1,
      label: "Email Notification",
      description: "Turn on email notification to get updates through email",
    },
    {
      id: 2,
      label: "Order Delivered",
      description: "You will be notified once the order is delivered",
    },
  
  ];

  return (
    <div className="text-white mx-xxl-3 ">
      <div className={`row justify-content-center p-3 ${styles["form"]}`}>
        <section className="col-md-6">
          <div className="mb-3 fs-5">Edit Profile</div>
          <form style={{ minHeight: `${editProfileHeight}px` }} className={`p-4 ${styles["form"]}`}>
            <div>
              {formField.map((e, index) => (
                <div key={index} className="mb-3">
                  <span className="input-group">{e.field}</span>
                  <input defaultValue="..." type={e.field.toLowerCase()} className="form-control" />
                </div>
              ))}
              <div className="mb-3">
                <span className="input-group">Gender</span>
                <select className={`${styles["form-select"]} form-select break`}>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Choose not to answer</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Bio</label>
                <textarea maxLength={charLimit} onChange={(e) => handleChange(e)} className="form-control" placeholder="What would you like people to know about you?" id="floatingTextarea2" style={{ height: `${bioHeight}px`, resize: "none" }}></textarea>
                <p className="position-absolute" id="count">
                  {charCount} characters left
                </p>
              </div>
            </div>
          </form>
        </section>
        <section className="col-md-6">
          <div className="mb-3 mt-md-0 mt-3 fs-5">Change Password</div>
          <form className={`p-4 ${styles["form"]}`}>
            <div>
              {formFieldPassword.map((e, index) => (
                <div key={index} className="mb-3">
                  <span className="input-group">{e.field}</span>
                  <input type="text" className="form-control" />
                </div>
              ))}
            </div>
          </form>
          <div className="mt-3 fs-5">Notifications</div>
          <div style={{ minHeight: `${otherFormsHeight - spaceBetweenBoxes}px`, marginTop: `${spaceBetweenBoxes}px` }} className={`p-4 ${styles["form"]}`}>
            {notificationOptions.map((e) => (
              <div key={e.id} className={`form-check form-switch p-3 ${styles["form"]}`}>
                <div className="d-flex "> 
                <input 
                style={{ height:"23px", width:"45px" }} 
                className="form-check-input mt-xl-3 me-xl-3 my-auto order-1 ms-auto" 
                type="checkbox" role="switch" 
                id="flexSwitchCheckChecked" 
                checked={checkBoxStates[e.id]} 
                onChange={() => handleCheckboxChange(e.id)} />
                <label className="form-check-label order-0 text-wrap">{e.label}</label>
                </div>
                <small className="d-none d-xl-block">{e.description}</small>
              </div>
            ))}
          </div>
        </section>
        <div className="text-end">
          <button className="btn btn-success py-3 px-5 mt-3 default-button-size" type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

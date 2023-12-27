'use client'
import React from "react";
import { useState } from 'react';
import styles from "@/styles/Settings.module.css";

const bioHeight = 100;
const editProfileHeight = 555.2 + bioHeight;
const otherFormsHeight = editProfileHeight / 2 
const spaceBetweenBoxes = 16

export default function General() {
   const charLimit = 100
   const [charCount, setCharCount] = useState(charLimit);
   const [checkBoxStates, setCheckboxStates] = useState([true,true,false]);

   const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(charLimit - e.target.value.length)
   }

   const handleCheckboxChange = (index:number) => {
    const newCheckboxStates = [...checkBoxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);

   }

  return (
    <div className="text-white container">
      <div className={`row justify-content-center p-3 mt-3 ${styles["form"]}`}>
        <section className="col-6">
        <div className="mb-3 fs-5">Edit Profile</div>

          <form style={{ minHeight: `${editProfileHeight}px` }} className={`p-4 ${styles["form"]}`}>
            <div>
              <div className="mb-3">
                <span className="input-group">Username</span>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <span className="input-group">Email</span>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <span className="input-group">Address</span>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <span className="input-group">Phone</span>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <span className="input-group">Gender</span>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <span className="input-group">Location</span>
                <select className="form-select">
                  <option value="1">United States (US)</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Bio</label>
                <textarea maxLength={charLimit} onChange={(e) => handleChange(e)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: `${bioHeight}px`, resize:"none" }}></textarea>
                <p className="position-absolute" id="count">{charCount} characters left</p>
              </div>
            </div>
          </form>
        </section>
        <section className="col-6">
        <div className="mb-3 fs-5">Change Password</div>

          <form className={`p-4 ${styles["form"]}`}>
            <div>
              <div className="mb-3">
                <span className="input-group">Current Password</span>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <span className="input-group">New Password</span>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <span className="input-group">Confirm Password</span>
                <input type="text" className="form-control" />
              </div>
            </div>
          </form>
          <div className="mt-3 fs-5">Notifications</div>
          <div style={{ minHeight: `${otherFormsHeight - spaceBetweenBoxes}px`, marginTop:`${spaceBetweenBoxes}px` }} className={`p-4 ${styles["form"]}`}>
            <div className={`form-check form-switch p-3  ${styles["form"]}`}>
            <input style={{transform:"scale(1.5)"}}  className="form-check-input float-end mt-3 me-3" type="checkbox" role="switch" id="flexSwitchCheckChecked"  checked={checkBoxStates[0]} onChange={() => handleCheckboxChange(0)} />
              <label className="form-check-label">Order Status Changed</label><br/>
              <small className="">You will be notificed when customer order any product</small>
            </div>
            <div className={`form-check form-switch p-3  ${styles["form"]}`}>
            <input style={{transform:"scale(1.5)"}}  className="form-check-input float-end mt-3 me-3" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={checkBoxStates[1]} onChange={() => handleCheckboxChange(1)} />
              <label className="form-check-label">Order Status Changed</label><br/>
              <small className="">You will be notificed when customer order any product</small>
            </div>
            <div className={`form-check form-switch p-3  ${styles["form"]}`}>
              <input style={{transform:"scale(1.5)"}}  className="form-check-input float-end mt-3 me-3" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={checkBoxStates[2]} onChange={() => handleCheckboxChange(2)} />
              <label className="form-check-label">Order Status Changed</label><br/>
              <small className="">You will be notificed when customer order any product</small>
            </div>
          </div>
        </section>
        <div className="text-end">
        <button className="btn btn-success py-3 px-5 mt-3 default-button-size" type="submit">Save</button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import logo2 from "../../assets/logow.png";
import NavPageComponent from "../Nav/NavPageComponent.js";

export default function SupTopComponent() {
  return (
    <div className="ap-container" id="curriculum">
      <div className="ap-bg-img">
        <div className="top-section">
          <NavPageComponent />
          <div className="top-logo">
            <img src={logo2} />
          </div>
        </div>
        <div className="bottom-section ">
          <div className="bottom-text ">
            <h1 className="">
              <span>Support</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

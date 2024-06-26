import React from "react";
import logo2 from "../../assets/logow.png";
import NavPageComponent from "../Nav/NavPageComponent.js";

export default function AboutTopComponent() {
  return (
    <div className="ap-container" id="about">
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
              <span>About Us</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

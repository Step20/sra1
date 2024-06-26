import React from "react";
import logo2 from "../../assets/logow.png";
import about1 from "../../assets/a3.jpg";
import about2 from "../../assets/a4.jpg";
import about3 from "../../assets/a6.jpg";
import NavComponent from "../Nav/NavComponent.js";
import { FaArrowRightLong } from "react-icons/fa6";
import Fade from "react-reveal/Fade";

export default function AboutExComponent() {
  return (
    <div className="ae-container" id="about-ex">
      <div className="ae-content">
        <Fade>
          <div className="ae-top text-center">
            <h1>Learning Experiences</h1>
            <p className="mx-auto">
              Learning experiences at SUN RZE Academy are crafted to engage
              students deeply and practically, ensuring they apply their
              knowledge in meaningful ways.Our goal is to inspire curiosity,
              foster collaboration, and prepare students for future success.
            </p>
          </div>
        </Fade>
        <div className="box-group flex">
          <Fade up delay={1000}>
            <div className="box">
              <img src={about1} />
              <p>
                Kid use a multimeter to troubleshoot and enhance their robotics
                projects.
              </p>
            </div>
          </Fade>
          <Fade up delay={1350}>
            <div className="box">
              <img src={about2} />
              <p>
                Coding project, demonstrating hands-on learning and creativity.
              </p>
            </div>
          </Fade>
          <Fade up delay={1700}>
            <div className="box">
              <img src={about3} />
              <p>
                3D printer to bring their designs to life, showcasing
                innovation.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

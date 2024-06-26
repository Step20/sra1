import React from "react";
import logo2 from "../../assets/logow.png";
import NavComponent from "../Nav/NavComponent.js";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function CurOurComponent() {
  return (
    <div className="cur-container" id="about-who">
      <div className="cur-content" style={{ marginBottom: "11vw" }}>
        <Fade>
          <div className="left m-auto">
            <h1>Our Mission</h1>
            <p>
              Our mission is to cultivate the next generation of leaders,
              futurists, and innovators by providing a world-class learning
              experience. We prioritize sustainability, creativity, critical
              thinking, and problem-solving in our curriculum, ensuring students
              are prepared to thrive in a dynamic and evolving world.
            </p>
            <div className="btn-group gap-4">
              <HashLink
                to="/about#top"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                style={{ textDecoration: "none" }}
                ignoreCancelEvents={true}
              >
                <button className="learn-btn">Learn our Mission</button>
              </HashLink>
              <HashLink
                to="/contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                style={{ textDecoration: "none" }}
                ignoreCancelEvents={true}
              >
                <button className="view-btn">
                  <span className=""> Contact Us </span>
                  <div className="dot"></div>
                </button>
              </HashLink>
            </div>
          </div>
        </Fade>
        <Fade up delay={1000}>
          <div className="right">
            <div className="img float-right"></div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

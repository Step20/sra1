import React from "react";
import logo2 from "../../assets/logow.png";
import NavComponent from "../Nav/NavComponent.js";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function AboutOurComponent() {
  return (
    <div className="ao-container" id="about-our">
      <div className="ao-content" style={{ marginBottom: "16vw" }}>
        <Fade>
          <div className="left m-auto">
            <h1>Our Mission</h1>
            <p>
              Our mission is to cultivate the next generation of leaders,
              futurists and innovators by providing them with a world-class
              learning experience which includes a curriculum that emphasizes
              sustainability, creativity, critical thinking and problem solving.
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

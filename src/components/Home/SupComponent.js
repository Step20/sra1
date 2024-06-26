import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";

export default function SupComponent() {
  return (
    <div className="sup-container" id="sup">
      <div className="sup-content">
        <Fade up delay={1000}>
          <div className="left">
            <div className="img ">
              <div className="icon-bg">
                <FaArrowRightLong className="icon" />
              </div>
            </div>
          </div>{" "}
        </Fade>
        <Fade>
          <div className="right ">
            <div className="content float-right">
              <h1>Support Us</h1>
              <p>
                Your support helps SUN RZE Academy provide exceptional
                educational experiences and resources for our students. By
                contributing, you enable us to continue fostering innovation,
                creativity, and critical thinking in the next generation of
                leaders. Together, we can create a brighter future.
              </p>
              <div className="btn-group gap-4">
                <HashLink
                  to="/support"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ textDecoration: "none" }}
                  ignoreCancelEvents={true}
                >
                  <button className="learn-btn">Ways to Support</button>
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
          </div>
        </Fade>
      </div>
    </div>
  );
}

import React from "react";
import logo2 from "../../assets/logow.png";
import NavComponent from "../Nav/NavComponent.js";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function AboutWhoComponent() {
  return (
    <div className="sup-container" id="about-who">
      <div className="sup-content">
        <Fade up delay={1000}>
          <div className="left">
            <div className="img "></div>
          </div>
        </Fade>
        <Fade>
          <div className="right ">
            <div className="content float-right">
              <h1>Who We Are</h1>
              <p>
                At SUN RZE Academy, we are dedicated to nurturing the next
                generation of leaders and innovators through a transformative
                educational experience. Our passionate team is committed to
                fostering creativity, critical thinking, and a love for learning
                in every student.
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
                <Link
                  to="about-ex"
                  spy={true}
                  smooth={true}
                  offset={-170}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                >
                  <button className="view-btn">
                    <span className=""> View More </span>
                    <div className="dot"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>{" "}
        </Fade>
      </div>
    </div>
  );
}

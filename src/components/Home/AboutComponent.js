import React from "react";
import about from "../../assets/about2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function AboutComponent() {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="left m-auto">
          <Fade up>
            <img src={about} className="" />
          </Fade>
          <div className="box-section">
            <Fade up delay={1000}>
              <div className="box-pink ">
                <div className="top mb-1 flex justify-between">
                  <h4 className="font-semibold">Project-based</h4>
                  <div className="icon-bg">
                    <FaArrowRightLong className="icon" />
                  </div>
                </div>
                <p className="">
                  Our project-based approach ensures students actively apply
                  their knowledge to real-world challenges.
                </p>
              </div>
            </Fade>
            <Fade up delay={1500}>
              <div className="box-blue ">
                <h4 className="font-semibold ">STEM Learning</h4>
                <p className="mt-3">
                  Engaging students with hands-on activities in science, tech,
                  engineering, and math.
                </p>
              </div>{" "}
            </Fade>
          </div>
        </div>

        <Fade>
          <div className="right m-auto  ">
            <div className="content float-right">
              <h1>About Us</h1>
              <p>
                SUN RZE Academy is committed to developing the leaders and
                innovators of tomorrow through personalized, project-based
                learning. Our passionate staff ensures each student receives a
                unique educational experience, engaging the whole student -
                mind, body, and spirit.
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
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={750}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                >
                  <button href="#cur" className="view-btn">
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

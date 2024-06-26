import React from "react";
import about from "../../assets/cur2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function BoxComponent() {
  return (
    <div className="box-container" id="box">
      <div className="box-content">
        <Fade up>
          <div className="green-box">
            <h1 className="font-bold">
              Creating the Next<br></br>
              Generation of Innovators
            </h1>
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
                to="sup"
                spy={true}
                smooth={true}
                offset={-140}
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
        </Fade>

        <div className="bottom-section">
          <Fade up delay={1000}>
            <div className="black-box ">
              <div className="top-section  flex justify-between">
                <h4 className="font-semibold">
                  Hands-On Learning<br></br> Experience
                </h4>
                <div className="icon-bg">
                  <FaArrowRightLong className="icon" />
                </div>
              </div>
              <p className="">
                We prioritize hands-on learning experiences that engage students
                in real-world applications. Our goal is to grow problem-solving
                and critical thinking skills.
              </p>
            </div>
          </Fade>
          <Fade up delay={1500}>
            <div className="white-box">
              <div className="top-section">
                <ul className="space-r-1 space-y-2">
                  <li>Science</li>
                  <li>Engineering</li>
                  <li>Technology</li>
                  <li>Math</li>
                  <li>Arts</li>
                </ul>
              </div>
              <p>
                Our interdisciplinary approach equips students with the skills
                needed to thrive in today's dynamic world.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Tilt from "react-vanilla-tilt";
import logo2 from "../../assets/logow.png";
import NavComponent from "../Nav/NavComponent.js";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function HomeComponent() {
  return (
    <div className="home-container" id="home">
      <div className="home-bg-img">
        <div className="top-section">
          <NavComponent />
          <div className="top-logo ">
            <Fade delay={1000}>
              <img src={logo2} />
            </Fade>
          </div>
        </div>
        <div className="bottom-section  flex  absolute bottom-0 ">
          <div className="bottom-text ">
            <h1 className="">
              <p>
                <span className="p-span ">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    <button className="learn-btn"> Learn </button>
                  </Link>
                  The Future Our Future
                </span>
              </p>
              <span c>Exposure</span>
              <br></br>
              <span>Equals Expansion</span>
            </h1>
          </div>
          <Fade up delay={1000}>
            <div className="view-btn ">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                ignoreCancelEvents={true}
                activeClass="active"
                style={{ textDecoration: "none" }}
              >
                <button className="">
                  <span className=""> View More </span>
                  <div className="dot"></div>
                </button>
              </Link>
            </div>
          </Fade>
          <div className="bottom-box mx-auto">
            <Fade delay={1000}>
              <Tilt
                options={{ max: 12 }}
                style={{
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                className="home-block  "
              >
                <div>
                  <h4>
                    Next generation <br></br> of Innovators
                  </h4>
                  <p>
                    Cultivating future leaders through immersive, hands-on
                    learning focused on creativity, critical thinking, and
                    sustainability. Join us to shape a brighter future.
                  </p>
                </div>
              </Tilt>{" "}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

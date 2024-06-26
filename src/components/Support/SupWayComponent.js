import React from "react";
import logo2 from "../../assets/logow.png";
import about1 from "../../assets/about.png";
import NavComponent from "../Nav/NavComponent.js";
import { FaArrowRightLong } from "react-icons/fa6";
import Fade from "react-reveal/Fade";

export default function SupWayComponent() {
  return (
    <div className="ae-container" id="about-ex">
      <div className="ae-content">
        <Fade>
          <div className="ae-top text-center">
            <h1>Ways to Support</h1>
            <p className="mx-auto">
              Support SUN RZE Academy through financial donations, resource
              contributions, sharing our mission, and volunteering your time and
              skills. Your support in any of these forms helps enrich our
              students' educational experience and fosters a thriving learning
              community.
            </p>
          </div>
        </Fade>
        <div className="box-group flex">
          <Fade up delay={1000}>
            <div className="box">
              <img src={about1} />
              <p>
                Using an ethic of integrity and care, Donda Academy prepares{" "}
              </p>
            </div>
          </Fade>
          <Fade up delay={1350}>
            <div className="box">
              <img src={about1} />
              <p>
                Using an ethic of integrity and care, Donda Academy prepares{" "}
              </p>
            </div>
          </Fade>
          <Fade up delay={1700}>
            <div className="box">
              <img src={about1} />
              <p>
                Using an ethic of integrity and care, Donda Academy prepares{" "}
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

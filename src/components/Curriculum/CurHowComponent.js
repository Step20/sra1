import React from "react";
import logo2 from "../../assets/logow.png";
import about1 from "../../assets/l3.jpg";
import about2 from "../../assets/l1.jpeg";
import about3 from "../../assets/l2.jpg";
import NavComponent from "../Nav/NavComponent.js";
import { FaArrowRightLong } from "react-icons/fa6";
import Fade from "react-reveal/Fade";

export default function CurHowComponent() {
  return (
    <div className="ae-container" id="about-ex">
      <div className="ae-content">
        <Fade>
          <div className="ae-top text-center">
            <h1>How We Learn</h1>
            <p className="mx-auto">
              At SUN RZE Academy, learning is an interactive journey where
              students engage in hands-on projects, collaborate with peers, and
              explore their interests through personalized learning paths. We
              believe in fostering a supportive environment where curiosity is
              encouraged and every achievement celebrated, empowering students
              to reach their full potential.
            </p>
          </div>
        </Fade>
        <div className="box-group flex">
          <Fade up delay={1000}>
            <div className="box">
              <img src={about1} />
              <p>
                Engaged in problem-solving that involves free-thinking and
                innovative solutions.
              </p>
            </div>
          </Fade>
          <Fade up delay={1350}>
            <div className="box">
              <img src={about2} />
              <p>
                Students integrate artistic mediums with STEM, fostering a
                well-rounded education.
              </p>
            </div>
          </Fade>
          <Fade up delay={1700}>
            <div className="box">
              <img src={about3} />
              <p>
                Each student explores their unique interests, receiving tailored
                guidance and support.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

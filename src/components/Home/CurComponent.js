import React from "react";
import about from "../../assets/cur2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function CurComponent() {
  return (
    <div className="cur-container" id="cur">
      <div className="cur-content">
        <Fade>
          <div className="left ">
            <h1>Curriculum</h1>
            <p>
              Our curriculum is designed to inspire and challenge students with
              a focus on hands-on, project-based learning in technology,
              engineering, art, and critical thinking. We emphasize creativity
              and innovation, ensuring each student can explore their passions
              and develop their skills.
            </p>
            <div className="btn-group gap-4">
              <HashLink
                to="/curriculum#top"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                style={{ textDecoration: "none" }}
                ignoreCancelEvents={true}
              >
                <button className="learn-btn">View Curriculum</button>
              </HashLink>
              <Link
                to="box"
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
        </Fade>
        <Fade up delay={1000}>
          <div className="right">
            <div className="img float-right">
              <h3>
                <span>Learning new</span>
              </h3>
              <h3>
                <span>Tech skills</span>
              </h3>
              <div className="icon-bg">
                <FaArrowRightLong className="icon" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

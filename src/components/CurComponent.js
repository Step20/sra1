import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsArrowUpRight } from "react-icons/bs";
import Tilt from "react-vanilla-tilt";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import arrow from "../assets/arr2.png";
import cur from "../assets/vr.jpg";
import Fade from "react-reveal/Fade";

export const Cur = () => {
  return (
    <div className="about">
      <Container className="about-content" id="cur">
        <Row className="about-row my-auto mx-auto">
          <Col className="about-right">
            <Fade>
              <h1>Curriculum</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here distribution of letters.
              </p>
            </Fade>
            <HashLink
              href="/curriculum#top"
              to="/curriculum#top"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={{ textDecoration: "none" }}
              ignoreCancelEvents={true}
            >
              <Button className="l-btn ">View Curriculum</Button>
            </HashLink>
            <Link
              to="box"
              spy={true}
              smooth={true}
              offset={140}
              duration={500}
              ignoreCancelEvents={true}
              activeClass="active"
              style={{ textDecoration: "none" }}
            >
              <Button className="v-btn">
                <span class="text">View More</span>
                <span class="dot align-center"></span>
              </Button>
            </Link>
          </Col>
          <Col className="about-left">
            <Fade up>
              <div className="cur-right">
                <h4 className="t1">Learning new</h4>
                <h4 className="t2">Tech skills</h4>
                <div className="low">
                  <div className="circle">
                    <img src={arrow} />
                  </div>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsArrowUpRight } from "react-icons/bs";
import Tilt from "react-vanilla-tilt";
import Fade from "react-reveal/Fade";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";

export const Mis = () => {
  return (
    <div className="mis pb-5">
      <Container className="about-content">
        <Row className="about-row my-auto mx-auto">
          <Col className="about-right">
            <Fade>
              {" "}
              <h1>Our Mission</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here distribution of letters.
              </p>
            </Fade>
            <Button className="l-btn ">View Curriculum</Button>
            <HashLink
              to="/contact#con"
              spy={true}
              smooth={true}
              offset={3000}
              duration={500}
              style={{ textDecoration: "none" }}
              ignoreCancelEvents={true}
            >
              <Button className="v-btn">
                <span class="text">Contact Us</span>
                <span class="dot align-center"></span>
              </Button>
            </HashLink>
          </Col>{" "}
          <Col className="about-left">
            <Fade up>
              <div className="cur-right"></div>
            </Fade>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
};

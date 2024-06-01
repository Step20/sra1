import { useEffect, useState } from "react";
import useScrollListener from "../../hooks/navhook.js";
import { Container, Row, Col, Button } from "reactstrap";
import PageNav from "../NavComponent.js";
import { GiHamburgerMenu } from "react-icons/gi";
import ScrollToTop from "react-scroll-to-top";
import Fade from "react-reveal/Fade";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import Tilt from "react-vanilla-tilt";
import logo2 from "../../assets/logow.png";

export const Who = () => {
  return (
    <div className="about ">
      <Container className="about-content">
        <Fade>
          {" "}
          <Row className="about-row my-auto mx-auto">
            <Col className="about-left">
              <Fade up>
                <div className="aboutp-left"></div>
              </Fade>
            </Col>
            <Col className="about-right ">
              <h1>Who We Are</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here distribution of letters.
              </p>
              <Button className="l-btn ">Learn Our Mission</Button>
              <HashLink
                to="/about#lex"
                spy={true}
                smooth={true}
                offset={3000}
                duration={500}
                style={{ textDecoration: "none" }}
                ignoreCancelEvents={true}
              >
                <Button className="v-btn">
                  <span class="text">View More</span>{" "}
                  <span class="dot align-center"></span>
                </Button>
              </HashLink>
            </Col>
          </Row>{" "}
        </Fade>
      </Container>
    </div>
  );
};

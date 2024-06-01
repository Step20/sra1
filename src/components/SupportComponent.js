import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsArrowUpRight } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import Tilt from "react-vanilla-tilt";
import arrow from "../assets/arr2.png";
import sup from "../assets/sup.png";
import Fade from "react-reveal/Fade";

export const Support = () => {
  return (
    <div className="about ">
      <Container className="about-content" id="support">
        <Fade>
          {" "}
          <Row className="about-row my-auto mx-auto">
            <Col className="about-left">
              <Fade up>
                <div className="sup">
                  <div className="sup-left">
                    <div className="low">
                      <div className="circle">
                        <img src={arrow} />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col className="about-right ">
              <div className="sup-r">
                <h1>Support</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here distribution of letters.
                </p>
                <HashLink
                  href="/support"
                  to="/support#top"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ textDecoration: "none" }}
                  ignoreCancelEvents={true}
                >
                  <Button className="l-btn ">Ways to Support</Button>{" "}
                </HashLink>
                <HashLink
                  href="/contact"
                  to="/contact#con"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ textDecoration: "none" }}
                  ignoreCancelEvents={true}
                >
                  <Button className="v-btn">
                    <span class="text">Contact Us</span>{" "}
                    <span class="dot align-center"></span>
                  </Button>{" "}
                </HashLink>
              </div>
            </Col>
          </Row>{" "}
        </Fade>
      </Container>
    </div>
  );
};

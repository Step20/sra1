import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsArrowUpRight } from "react-icons/bs";
import Tilt from "react-vanilla-tilt";
import about from "../assets/about2.png";
import arrow from "../assets/arrow.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export const About = () => {
  return (
    <div className="about">
      <Container className="about-content" id="about">
        <Fade>
          <Row className="about-row my-auto mx-auto">
            <Col xs="12 " sm="12" className="about-left">
              <Fade up>
                <img
                  src={about}
                  className="about-img animate__animated animate__fadeInUp "
                />
              </Fade>
              <div className="l-low ">
                <Fade up>
                  <div className="p-low">
                    <div className="top">
                      <h4>Project based</h4>
                      <div className="circle">
                        <img src={arrow} />
                      </div>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>{" "}
                </Fade>
                <Fade up>
                  <div className="b-low">
                    <h4>STEM Learning</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable cont
                    </p>
                  </div>
                </Fade>
              </div>
            </Col>{" "}
            <Col xs="12" sm="12" className="about-right ">
              {" "}
              <h1>About Us</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here distribution of letters.
              </p>{" "}
              <HashLink
                to="/about#top"
                spy={true}
                smooth={true}
                offset={-100000}
                duration={500}
                style={{ textDecoration: "none" }}
                ignoreCancelEvents={true}
              >
                <Button className="l-btn ">Learn Our Mission</Button>
              </HashLink>
              <Link
                to="cur"
                spy={true}
                smooth={true}
                offset={80}
                duration={500}
                ignoreCancelEvents={true}
                activeClass="active"
                style={{ textDecoration: "none" }}
              >
                <Button className="v-btn ">
                  <span class="text  ">View More</span>{" "}
                  <span class="dot align-center"></span>
                </Button>
              </Link>
            </Col>
          </Row>{" "}
        </Fade>
      </Container>
    </div>
  );
};

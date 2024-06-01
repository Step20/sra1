import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsArrowUpRight } from "react-icons/bs";
import Tilt from "react-vanilla-tilt";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import arrow from "../assets/arrow.png";
import Fade from "react-reveal/Fade";

export const Box = () => {
  return (
    <div className="box" id="cur">
      <Container fluid className="box-content" id="box">
        <Row className="box-row  mx-auto">
          <Fade up>
            <Col sm="12">
              <div className="green">
                <h1>
                  Creating the Next<br></br>
                  Generation of Innovators
                </h1>
                <div className="btn my-2">
                  <HashLink
                    href="/about"
                    to="/about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    style={{ textDecoration: "none" }}
                    ignoreCancelEvents={true}
                  >
                    <Button className="l-btn ">Learn Our Mission</Button>
                  </HashLink>
                  <Link
                    to="support"
                    spy={true}
                    smooth={true}
                    offset={140}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <Button className="v-btn">
                      <span class="text">View More</span>{" "}
                      <span class="dot align-center"></span>
                    </Button>{" "}
                  </Link>
                </div>
              </div>
            </Col>
          </Fade>{" "}
          <Col sm="7">
            {" "}
            <Fade up>
              <div className="black">
                <div className="top">
                  <h4>
                    Hands-On Learning<br></br> Experience
                  </h4>
                  <div className="circle">
                    <img src={arrow} />
                  </div>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using
                </p>
              </div>
            </Fade>
          </Col>
          <Col sm="5">
            {" "}
            <Fade up>
              <div className="white">
                <div className="top">
                  <ul>
                    <li>Science</li>
                    <li>Engineering</li>
                    <li>Technology</li>
                    <li className="my-3">Math</li>
                    <li>Arts</li>
                  </ul>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at
                </p>
              </div>{" "}
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

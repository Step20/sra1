import { useEffect, useState } from "react";
import useScrollListener from "../../hooks/navhook.js";
import { Container, Row, Col, Button } from "reactstrap";
import PageNav from "../NavComponent.js";
import { GiHamburgerMenu } from "react-icons/gi";
import ScrollToTop from "react-scroll-to-top";
import Fade from "react-reveal/Fade";
import Tilt from "react-vanilla-tilt";
import { Link } from "react-scroll";
import logo2 from "../../assets/logow.png";
import ca from "../../assets/ca.png";
import go from "../../assets/go.png";
import ze from "../../assets/ze.png";

export const Exp = () => {
  return (
    <div className="exp2 " id="support">
      <Container className="exp-content">
        <Fade>
          <Row className="text-center mx-auto">
            <Col sm="12">
              <h1>Ways to Support</h1>
            </Col>
            <Col sm="12">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here distribution of letters.{" "}
              </p>
            </Col>
          </Row>
          <Fade up>
            <Row className="image-row my-5">
              <Col xs="12" sm="4" className="text-center mx-auto">
                <div className="image-card mx-auto text-center">
                  <img src={ca} />
                  <p>
                    Using an ethic of integrity and care,<br></br>Donda Academy
                    prepares
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="4" className="text-center mx-auto">
                <div className="image-card mx-auto text-center">
                  <img src={ze} />
                  <p>
                    Using an ethic of integrity and care,<br></br>Donda Academy
                    prepares
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="4" className="text-center mx-auto ">
                <div className="image-card mx-auto text-center">
                  <img src={go} />
                  <p>
                    Using an ethic of integrity and care,<br></br>Donda Academy
                    prepares
                  </p>
                </div>
              </Col>
            </Row>
          </Fade>{" "}
        </Fade>
      </Container>
    </div>
  );
};

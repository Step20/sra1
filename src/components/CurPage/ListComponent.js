import { useEffect, useState } from "react";
import useScrollListener from "../../hooks/navhook.js";
import { Container, Row, Col, Button } from "reactstrap";

import { GiHamburgerMenu } from "react-icons/gi";
import ScrollToTop from "react-scroll-to-top";
import Fade from "react-reveal/Fade";
import Tilt from "react-vanilla-tilt";
import { Link } from "react-scroll";
import logo2 from "../../assets/logow.png";
import exp from "../../assets/sup.png";

export const List = () => {
  return (
    <div className="list-out " id="cur">
      <Container fluid className="list-content">
        <Fade>
          <Row className="text-center mx-auto">
            <Col xs="12" className="text-center mx-auto">
              <h1>Curriculum</h1>
            </Col>
          </Row>
          <Fade up>
            <Row className="mx-auto my-5 ">
              <Col sm="3" xs="6" className="b-o mx-auto ">
                <div className="box mx-auto">
                  <h4>Technology</h4>
                  <ul>
                    <li>Coding</li>
                    <li>Robotics</li>
                    <li>Engineering</li>
                    <li>Tech Literacy</li>
                    <li>Electronics</li>
                    <li>Computer</li>
                    <li>AR/VR</li>
                  </ul>
                  <div className="btn-g">
                    <Button className="btn mx-auto">View Curriculum</Button>
                  </div>
                </div>
              </Col>
              <Col sm="3" xs="6" className="b-o mx-auto ">
                <div className="box">
                  <h4>Philosophy</h4>
                  <ul>
                    <li>Literature</li>
                    <li>Problem Solving</li>
                    <li>Free-thinking</li>
                    <li>Experiences</li>
                    <li>Self-History</li>
                    <li>
                      Future Mindset <br></br>
                      <br></br>
                    </li>
                  </ul>
                  <div className="btn-g">
                    <Button className="btn mx-auto">View Curriculum</Button>
                  </div>
                </div>
              </Col>
              <Col sm="3" xs="6" className="b-o mx-auto ">
                <div className="box">
                  <h4>Arts</h4>
                  <ul>
                    <li>Creativity</li>
                    <li>Music</li>
                    <li>Painting</li>
                    <li>Film</li>
                    <li>Art History</li>
                    <li>3D Modeling</li>
                    <li>Performance</li>
                  </ul>
                  <div className="btn-g">
                    <Button className="btn mx-auto">View Curriculum</Button>
                  </div>
                </div>
              </Col>
              <Col sm="3" xs="6" className="b-o mx-auto ">
                <div className="box">
                  <h4>Core Learning</h4>
                  <ul>
                    <li>Math</li>
                    <li>Language Arts</li>
                    <li>Science</li>
                    <li>Engineering</li>
                    <li>
                      History<br></br>
                      <br></br>
                      <br></br>
                    </li>
                  </ul>
                  <div className="btn-g">
                    <Button className="btn mx-auto">View Curriculum</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Fade>
        </Fade>
      </Container>
    </div>
  );
};

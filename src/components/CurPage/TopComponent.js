import { useEffect, useState } from "react";
import useScrollListener from "../../hooks/navhook.js";
import { Container, Row, Col, Button } from "reactstrap";
import PageNav2 from "../CurPage/NavComponent.js";
import { GiHamburgerMenu } from "react-icons/gi";
import ScrollToTop from "react-scroll-to-top";
import Fade from "react-reveal/Fade";
import Tilt from "react-vanilla-tilt";

import { Link } from "react-scroll";
import logo2 from "../../assets/logow.png";

export const Top = () => {
  const [tClassList, settClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y < 150 && scroll.y - scroll.lastY < 0)
      _classList.push("t2--hidden");

    settClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <div className="top-out" id="top">
      <div className="top-bg" id="cur">
        <Container fluid>
          <Row className="top-upper">
            <Col sm="1" className="nav-brand">
              <Fade>
                {" "}
                <img src={logo2} />{" "}
              </Fade>
            </Col>
            <Col className=" ">
              <PageNav2 />
            </Col>
          </Row>
          <Row className="top-lower2">
            <Col sm="10" className="top-text">
              <div className="t">
                <Fade left cascade>
                  <h1 className="t2 animate__animated  ">Curriculum</h1>
                </Fade>
              </div>
            </Col>{" "}
          </Row>
        </Container>{" "}
        <ScrollToTop
          className="scroll"
          color="white"
          smooth
          width="35"
          height="35"
        />
      </div>
    </div>
  );
};

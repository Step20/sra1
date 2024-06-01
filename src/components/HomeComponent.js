import { useEffect, useState } from "react";
import useScrollListener from "../hooks/navhook.js";
import { Container, Row, Col, Button } from "reactstrap";
import PageNav from "./NavComponent.js";
import PageNav3 from "./NavComponent2.js";
import { GiHamburgerMenu } from "react-icons/gi";
import ScrollToTop from "react-scroll-to-top";
import Fade from "react-reveal/Fade";
import Tilt from "react-vanilla-tilt";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import logo2 from "../assets/logow.png";

export default function Home() {
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
    <>
      {" "}
      <PageNav3 />
      <div className="home-out" id="home">
        <div className="home-bg">
          <Container fluid>
            {" "}
            <Row className="home-upper">
              {" "}
              <Col sm="1" className="nav-brand">
                <Fade>
                  {" "}
                  <img src={logo2} />{" "}
                </Fade>
              </Col>
              <Col className=" ">
                <PageNav />
              </Col>
            </Row>
            <Row className="home-lower">
              <Col sm="10" className="home-text">
                <div className="tup">
                  {" "}
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={110}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <Button className="t-btn animate__animated animate__fadeIn animate__delay-1s">
                      Learn
                    </Button>
                  </Link>
                  <Fade>
                    <p>The Future of Our Future</p>
                  </Fade>
                </div>

                <div className="t">
                  {" "}
                  <Fade left cascade>
                    <h1 className="t1">Exposure</h1>{" "}
                  </Fade>
                  <Fade left cascade>
                    <h1 className="t2 animate__animated  ">Equals Expansion</h1>
                  </Fade>
                </div>
              </Col>{" "}
              <Fade>
                {" "}
                <Col className=" ">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={110}
                    duration={500}
                    ignoreCancelEvents={true}
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <Button className="v-btn animate__animated animate__fadeInUp animate__delay-1s">
                      <span class="text">View More</span>
                      <span class="dot align-center"></span>
                    </Button>
                  </Link>
                </Col>
              </Fade>
              <Fade>
                <Col>
                  <Tilt
                    options={{ max: 12 }}
                    style={{
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                    className="home-block animate__animated animate__fadeIn animate__delay-1s "
                  >
                    <div>
                      <h4>
                        Next generation <br></br> of Innovators
                      </h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout point of using is that it has a
                        more-or-less normal
                      </p>
                    </div>{" "}
                  </Tilt>
                </Col>{" "}
              </Fade>
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
    </>
  );
}

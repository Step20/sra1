import React from "react";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-content" id="cont">
        <Row className="footer-row">
          <Col xs="6" sm="3" className="footer-text ">
            <h4>Contact Us</h4>{" "}
            <ul>
              <li>
                <AiFillPhone className="icon" /> (+88) 01924 7829
              </li>
              <li>
                <AiOutlineMail className="icon" /> info@gmail.com
              </li>
              <li>Richmond VA, 23225</li>
            </ul>
          </Col>
          <Col xs="6" sm="3" className="footer-text ">
            <h4>Legal</h4>{" "}
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </Col>
          <Col xs="6" sm="3" className="footer-text ">
            <h4>Resources</h4>{" "}
            <ul>
              <li>How it Works</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col xs="5" sm="3" className="footer-text ">
            <h4>Newsletter</h4>{" "}
            <ul>
              <li>
                Sign up for the last news and offers <br></br>from the SRA{" "}
              </li>
              <li>
                {" "}
                <InputGroup>
                  <Input
                    style={{ color: "white" }}
                    className="footer-input "
                    placeholder="Enter email address
                  "
                  />
                  <Button className="footer-btn ">Submit</Button>
                </InputGroup>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className="hr"></div>
        </Row>
        <Row className="foot-low">
          {/* <Col className="icon-group">
            <ul>
              <li>
                <FiFacebook className="icon" />
              </li>
              <li>
                <FiInstagram className="icon" />
              </li>
              <li>
                <AiOutlineYoutube className="icon" />
              </li>
            </ul>
          </Col> */}
          <Col className="copy mx-auto text-center">
            <p>© Copyright 2023 SUN RZE Academy All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

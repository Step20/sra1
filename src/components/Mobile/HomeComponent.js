import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ScrollToTop from "react-scroll-to-top";

export default function Home2() {
  return (
    <>
      <div className="home-outside">
        <div className="home-bg">
          <Container className="home" fluid>
            <Row className="bottom">
              <Col xs="12" className="text-top">
                <Button className="btn"> Learn </Button>
                <p>Future of Our Future</p>
              </Col>
              <Col xs="12" className="text-mid">
                <h1>Exposure</h1>
              </Col>
              <Col xs="12" className="text-low">
                <h1>Equals Expansion</h1>
              </Col>
            </Row>
          </Container>
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

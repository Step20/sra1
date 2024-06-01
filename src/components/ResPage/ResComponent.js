import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Fade from "react-reveal/Fade";
import { HashLink } from "react-router-hash-link";
import res from "../../assets/home.jpg";
import { RESOURCES_DATA } from "../../shared/resources";
import PageNav2 from "../CurPage/NavComponent.js";

function Res(props) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="res-out" id="res">
      <Container className="res-content">
        <Fade>
          <Row>
            <Col>
              <h1>Resources</h1>
            </Col>
          </Row>
          <Row>
            <div className="accord-out ">
              <Accordion className="accord " open={open} toggle={toggle}>
                {RESOURCES_DATA.map((resources, i) => (
                  <AccordionItem className="box" key={i}>
                    <AccordionHeader className="title" targetId={i}>
                      <h2>{resources.title}</h2>
                    </AccordionHeader>
                    <AccordionBody className="body" accordionId={i}>
                      <Row>
                        <Col sm="4">
                          <img src={resources.img} />
                        </Col>
                        <Col>
                          <p>{resources.desc}</p>
                          <a href={resources.resUrl}>
                            <p>Read more about {resources.title} here.</p>
                          </a>
                        </Col>
                      </Row>
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
export default Res;

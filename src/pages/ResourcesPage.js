import React, { useState } from "react";
import NavPageComponent from "../components/Nav/NavPageComponent.js";
import { RESOURCES_DATA } from "../shared/resources";
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
import NavSmComponent from "../components/Nav/NavSmComponent";
import Fade from "react-reveal/Fade";

export const ResourcesPage = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
      <NavSmComponent />
      <NavPageComponent />
      <div className="res-container">
        <div className="res-content">
          <Fade>
            <h1> Resources </h1>
          </Fade>
          <div className="accord-out">
            <Fade up delay={1000}>
              <div classNam="accord-container">
                <Accordion className="accord " open={open} toggle={toggle}>
                  {RESOURCES_DATA.map((resources, i) => (
                    <AccordionItem className="box" key={i}>
                      <AccordionHeader targetId={i}>
                        <h2 className="title ">{resources.title}</h2>
                      </AccordionHeader>
                      <AccordionBody accordionId={i}>
                        <Row>
                          {/* <Col sm="4">
                            <img className="img" src={resources.img} />
                          </Col> */}
                          <Col sm="8">
                            <p className="desc">{resources.desc}</p>
                            <a href={resources.resUrl}>
                              <p className="link">
                                Read more about {resources.title} here.
                              </p>
                            </a>
                          </Col>
                        </Row>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

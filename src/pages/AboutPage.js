import React from "react";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import { Top } from "../components/AboutPage/TopComponent";
import { Who } from "../components/AboutPage/WhoComponent";
import { Exp } from "../components/AboutPage/ExComponent";
import { Mis } from "../components/AboutPage/MisComponent";
import { Footer } from "../components/FooterComponent";

export const AboutPage = () => {
  return (
    <div id="about">
      <Top />
      <Who />
      <Exp />
      <Mis />
      <Footer />
    </div>
  );
};

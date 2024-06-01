import React from "react";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import Res from "../components/ResPage/ResComponent";
import PageNav4 from "../components/NavComponent3";
import PageNav2 from "../components/ResPage/NavComponent";
import { Footer } from "../components/FooterComponent";

export const ResPage = () => {
  return (
    <div id="con">
      <PageNav2 />
      <PageNav4 />
      <Res />
      <Footer />
    </div>
  );
};

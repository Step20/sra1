import React from "react";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import { Con } from "../components/ConPage/ConComponent";
import PageNav2 from "../components/ConPage/NavComponent";
import { Footer } from "../components/FooterComponent";

export const ConPage = () => {
  return (
    <div id="con">
      <PageNav2 />
      <Con />
      <Footer />
    </div>
  );
};

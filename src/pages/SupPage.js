import React from "react";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import { Top } from "../components/SupPage/TopComponent";
import { Exp } from "../components/SupPage/ExComponent";
import { Footer } from "../components/FooterComponent";

export const SupPage = () => {
  return (
    <div id="support">
      <Top />

      <Exp />

      <Footer />
    </div>
  );
};

import React from "react";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import { Top } from "../components/CurPage/TopComponent";
import { Exp } from "../components/CurPage/ExComponent";
import { List } from "../components/CurPage/ListComponent";
import { Mis } from "../components/CurPage/MisComponent";
import { Footer } from "../components/FooterComponent";

export const CurPage = () => {
  return (
    <div id="cur">
      <Top />
      <Exp />
      <List />
      <Mis />
      <Footer />
    </div>
  );
};

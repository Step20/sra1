import React from "react";
import { Container, Row, Col, Button, Input, InputGroup } from "reactstrap";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import Home from "../components/HomeComponent";
import Home2 from "../components/Mobile/HomeComponent";
import { About } from "../components/AboutComponent";
import { Cur } from "../components/CurComponent";
import { Box } from "../components/BoxComponent";
import { Support } from "../components/SupportComponent";
import { Footer } from "../components/FooterComponent";

export const Main = () => {
  return (
    <>
      <Home />

      <About />
      <Cur />
      <Box />
      <Support />
      <Footer />
    </>
  );
};

import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  FormGroup,
  Form,
  Label,
} from "reactstrap";
import Fade from "react-reveal/Fade";

import PageNav2 from "../CurPage/NavComponent.js";

export const Con = () => {
  return (
    <div className="con-out" id="con">
      {" "}
      <Container className="con-content">
        <Fade>
          {" "}
          <Row>
            <Col>
              <h1>Contact Us</h1>
            </Col>
          </Row>{" "}
        </Fade>
        <Fade up>
          <Row className="con-input ">
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label className="lab" for="firstName">
                      NAME
                    </Label>
                    <Input
                      className="inp"
                      id="firstName"
                      name="firstName"
                      placeholder="FIRST NAME"
                      type="firstName"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label className="lab" for="lastName">
                      <br></br>
                    </Label>
                    <Input
                      className="inp"
                      id="lastName"
                      name="lastName"
                      placeholder="LAST NAME"
                      type="lastName"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label className="lab" for="phoneNumber">
                  PHONE
                </Label>
                <Input
                  className="inp"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup>
                <Label className="lab" for="email">
                  EMAIL
                </Label>
                <Input className="inp" id="email" name="email" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label className="lab" for="topic">
                  TOPIC OF MESSAGE
                </Label>
                <Input className="inp" id="topic" name="topic" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label className="lab" for="message">
                  MESSAGE
                </Label>
                <Input
                  className="ta"
                  id="message"
                  name="message"
                  type="textarea"
                />
              </FormGroup>
              <Button className="btn">SUBMIT FORM</Button>
            </Form>
          </Row>{" "}
        </Fade>
      </Container>
    </div>
  );
};

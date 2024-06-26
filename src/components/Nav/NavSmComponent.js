import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import logo2 from "../../assets/logow.png";
import { NavHashLink } from "react-router-hash-link";

export default function NavSmComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="nav2 ">
        <Navbar className="nav3" fixed color="faded" light>
          <NavbarBrand href="/" className="py-3 me-auto">
            <img
              className="invert"
              src={logo2}
              style={{
                height: 40,
                width: 85,
              }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="me-2" />

          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="text-center">
              <NavItem>
                <NavHashLink
                  to="/#home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ textDecoration: "none" }}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  className="text"
                >
                  Home
                </NavHashLink>
              </NavItem>
              <NavItem>
                <NavHashLink
                  to="/about#top"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  className="text"
                  style={{ textDecoration: "none" }}
                >
                  About
                </NavHashLink>
              </NavItem>
              <NavItem>
                <NavHashLink
                  to="/curriculum#top"
                  spy={true}
                  smooth={true}
                  offset={110}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  className="text"
                  style={{ textDecoration: "none" }}
                >
                  Learning
                </NavHashLink>
              </NavItem>
              <NavItem>
                <NavHashLink
                  to="/support#top"
                  spy={true}
                  smooth={true}
                  offset={110}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  className="text"
                  style={{ textDecoration: "none" }}
                >
                  Support
                </NavHashLink>
              </NavItem>
              <NavItem>
                <NavHashLink
                  to="/resources"
                  spy={true}
                  smooth={true}
                  offset={110}
                  duration={500}
                  ignoreCancelEvents={true}
                  className="text"
                  activeClass="active"
                  style={{ textDecoration: "none" }}
                >
                  Resources
                </NavHashLink>
              </NavItem>
              <NavItem>
                <NavHashLink
                  to="/contact"
                  spy={true}
                  smooth={true}
                  offset={110}
                  duration={500}
                  ignoreCancelEvents={true}
                  activeClass="active"
                  className="text"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </NavHashLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

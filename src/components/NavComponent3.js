import { useEffect, useState } from "react";
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
import { GiHamburgerMenu } from "react-icons/gi";
import useScrollListener from "../hooks/navhook.js";
import logo2 from "../assets/logow.png";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";

export default function PageNav4() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Fade down>
        <div className="nav2 ">
          <Navbar className="nav3 " expand="lg">
            <NavbarBrand className="brand" href="/">
              <img src={logo2} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mx-auto group mx-auto text-center " navbar>
                <NavItem>
                  <HashLink
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
                  </HashLink>
                </NavItem>
                <NavItem>
                  <HashLink
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
                  </HashLink>
                </NavItem>
                <NavItem>
                  <HashLink
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
                  </HashLink>
                </NavItem>
                <NavItem>
                  <HashLink
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
                  </HashLink>
                </NavItem>
                <NavItem>
                  <HashLink
                    to="/resources#res"
                    spy={true}
                    smooth={true}
                    offset={110}
                    duration={500}
                    ignoreCancelEvents={true}
                    className="text"
                    activeClass="active"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Resources
                  </HashLink>
                </NavItem>
                <NavItem>
                  <HashLink
                    to="/contact#con"
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
                  </HashLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Fade>
    </>
  );
}

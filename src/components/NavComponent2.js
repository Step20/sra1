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

export default function PageNav3() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Fade down>
        <div className="nav2 mx-auto text-center">
          <Navbar className="nav3 mx-auto text-center" expand="lg">
            <NavbarBrand className="brand" href="/">
              <img src={logo2} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mx-auto group mx-auto text-center " navbar>
                <NavItem>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    ignoreCancelEvents={true}
                    className="text"
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                    ignoreCancelEvents={true}
                    className="text"
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="cur"
                    spy={true}
                    smooth={true}
                    offset={110}
                    duration={500}
                    ignoreCancelEvents={true}
                    className="text"
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    Learning
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="support"
                    spy={true}
                    smooth={true}
                    offset={110}
                    duration={500}
                    ignoreCancelEvents={true}
                    className="text"
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    Support
                  </Link>
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
                    style={{ textDecoration: "none" }}
                  >
                    Resources
                  </HashLink>
                </NavItem>
                <NavItem>
                  <Link
                    to="cont"
                    spy={true}
                    smooth={true}
                    offset={110}
                    duration={500}
                    ignoreCancelEvents={true}
                    className="text"
                    activeClass="active"
                    style={{ textDecoration: "none" }}
                  >
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Fade>
    </>
  );
}

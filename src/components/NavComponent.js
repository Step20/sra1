import { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
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

export default function PageNav() {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y < 3000 && scroll.y - scroll.lastY < 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <>
      {" "}
      <Fade down>
        <nav className={navClassList.join(" ")}>
          <ul className="nav mx-auto">
            <li href="/" className=" mx-3">
              {" "}
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                ignoreCancelEvents={true}
                className="li"
                activeClass="active"
                style={{ textDecoration: "none" }}
              >
                Home{" "}
              </Link>
            </li>

            <li className=" mx-3">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
                ignoreCancelEvents={true}
                className="li"
                activeClass="active"
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
            </li>
            <li className=" mx-3">
              <Link
                to="cur"
                spy={true}
                smooth={true}
                offset={110}
                duration={500}
                ignoreCancelEvents={true}
                className="li"
                activeClass="active"
                style={{ textDecoration: "none" }}
              >
                Learning
              </Link>
            </li>
            <li className="mx-3 ">
              <Link
                to="support"
                spy={true}
                smooth={true}
                offset={110}
                duration={500}
                ignoreCancelEvents={true}
                className="li"
                activeClass="active"
                style={{ textDecoration: "none" }}
              >
                Support
              </Link>
            </li>
            <li className="mx-3 ">
              <HashLink
                to="/resources#res"
                spy={true}
                smooth={true}
                offset={110}
                duration={500}
                ignoreCancelEvents={true}
                className="li"
                activeClass="active"
                style={{ textDecoration: "none" }}
              >
                Resources
              </HashLink>
            </li>
            <li className="mx-3 ">
              <Link
                to="cont"
                spy={true}
                smooth={true}
                offset={110}
                duration={500}
                ignoreCancelEvents={true}
                className="li"
                activeClass="active"
                style={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>{" "}
      </Fade>
      {/* <nav>
        <Navbar expand="lg">
          <NavbarBrand href="/">
            <img src={logo2} className="brand" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto group " navbar>
              <NavItem>
                <NavLink className=" text ">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className=" text">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className=" text">Learning</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className=" text">Support</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className=" text">Resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className=" text">Contact</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <Button className="v-btn mx-4">
                <span class="text">View More</span>{" "}
                <span class="dot align-center"></span>
              </Button>{" "}
              <Button className="m-btn">
                <GiHamburgerMenu className="icon" />
              </Button>
            </NavbarText>
          </Collapse>
        </Navbar>
      </nav> */}
    </>
  );
}

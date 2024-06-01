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
import useScrollListener from "../../hooks/navhook.js";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function PageNav2() {
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
          <ul className="nav" style={{ marginLeft: "40%" }}>
            <li href="/" className=" mx-3">
              {" "}
              <HashLink
                to="/#home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                style={{ textDecoration: "none" }}
                ignoreCancelEvents={true}
                activeClass="active"
                className="li"
              >
                Home{" "}
              </HashLink>
            </li>

            <li href="/about" className=" mx-3">
              <HashLink
                to="/about#top"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
                ignoreCancelEvents={true}
                activeClass="active"
                className="li"
                style={{ textDecoration: "none" }}
              >
                About
              </HashLink>
            </li>
            <li href="/curriculum" className=" mx-3">
              <HashLink
                to="/curriculum#top"
                spy={true}
                smooth={true}
                offset={110}
                duration={500}
                ignoreCancelEvents={true}
                activeClass="active"
                className="li"
                style={{ textDecoration: "none" }}
              >
                Learning
              </HashLink>
            </li>
            <li href="/support" className="mx-3 ">
              <HashLink
                to="/support#top"
                spy={true}
                smooth={true}
                offset={110}
                duration={500}
                ignoreCancelEvents={true}
                activeClass="active"
                className="li"
                style={{ textDecoration: "none" }}
              >
                Support
              </HashLink>
            </li>
            <li href="/" className="mx-3 ">
              <HashLink
                to="/resources#res"
                spy={true}
                smooth={true}
                offset={110}
                duration={500}
                ignoreCancelEvents={true}
                activeClass="active"
                className="li"
                style={{ textDecoration: "none", color: "black" }}
              >
                Resources
              </HashLink>
            </li>
            <li href="/contact" className="mx-3 ">
              <HashLink
                to="/contact#con"
                spy={true}
                smooth={true}
                offset={110}
                duration={500}
                ignoreCancelEvents={true}
                activeClass="active"
                className="li"
                style={{ textDecoration: "none" }}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>{" "}
      </Fade>
    </>
  );
}

/* eslint-disable no-restricted-globals */
import React from "react";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";

export default function NavComponent() {
  return (
    <>
      <nav className="nav1 animate__animated animate__fadeInDown animate__delay-1s">
        <ul className="nav mx-auto">
          <li href="/" className=" mx-3">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              ignoreCancelEvents={true}
              className="li "
              activeClass="active"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>

          <li className=" mx-3">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
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
              offset={-150}
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
              to="sup"
              spy={true}
              smooth={true}
              offset={-150}
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
              to="/resources"
              spy={true}
              smooth={true}
              offset={-145}
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
              to="con"
              spy={true}
              smooth={true}
              offset={0}
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
      </nav>
    </>
  );
}

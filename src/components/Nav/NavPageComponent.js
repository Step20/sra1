/* eslint-disable no-restricted-globals */
import React from "react";
import { Link } from "react-scroll";
import { NavHashLink } from "react-router-hash-link";

export default function NavPageComponent() {
  return (
    <>
      <nav className="nav1">
        <ul className="nav mx-auto">
          <li href="/" className=" mx-3">
            <NavHashLink
              to="/#home"
              spy={true}
              smooth={true}
              offset={0}
              className="li"
              duration={500}
              style={{ textDecoration: "none" }}
              ignoreCancelEvents={true}
            >
              Home{" "}
            </NavHashLink>
          </li>

          <li href="/about" className=" mx-3">
            <NavHashLink
              to="/about#top"
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
            </NavHashLink>
          </li>
          <li href="/curriculum" className=" mx-3">
            <NavHashLink
              to="/curriculum#top"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              ignoreCancelEvents={true}
              className="li"
              activeClass="active"
              style={{ textDecoration: "none" }}
            >
              Learning
            </NavHashLink>
          </li>
          <li href="/support" className="mx-3 ">
            <NavHashLink
              to="/support#top"
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
            </NavHashLink>
          </li>
          <li href="/" className="mx-3 ">
            <NavHashLink
              to="/resources"
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
            </NavHashLink>
          </li>
          <li href="/contact" className="mx-3 ">
            <NavHashLink
              to="/contact"
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
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

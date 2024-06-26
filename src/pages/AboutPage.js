import React from "react";
import AboutTopComponent from "../components/About/AboutTopComponent";
import AboutWhoComponent from "../components/About/AboutWhoComponent";
import AboutOurComponent from "../components/About/AboutOurComponent";
import AboutExComponent from "../components/About/AboutExComponent";
import FooterComponent from "../components/FooterComponent";
import NavSmComponent from "../components/Nav/NavSmComponent";

export const AboutPage = () => {
  return (
    <>
      <NavSmComponent />
      <AboutTopComponent />
      <AboutWhoComponent />
      <AboutExComponent />
      <AboutOurComponent />
    </>
  );
};

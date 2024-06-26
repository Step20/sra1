import React from "react";
import HomeComponent from "../components/Home/HomeComponent";
import AboutComponent from "../components/Home/AboutComponent";
import CurComponent from "../components/Home/CurComponent";
import BoxComponent from "../components/Home/BoxComponent";
import SupComponent from "../components/Home/SupComponent";
import FooterComponent from "../components/FooterComponent";
import NavSmComponent from "../components/Nav/NavSmComponent";

export const HomePage = () => {
  return (
    <>
      <NavSmComponent />
      <HomeComponent />
      <AboutComponent />
      <CurComponent />
      <BoxComponent />
      <SupComponent />
    </>
  );
};

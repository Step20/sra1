import React from "react";
import CurTopComponent from "../components/Curriculum/CurTopComponent";
import CurHowComponent from "../components/Curriculum/CurHowComponent";
import CurOurComponent from "../components/Curriculum/CurOurComponent";
import CurListComponent from "../components/Curriculum/CurListComponent";
import NavSmComponent from "../components/Nav/NavSmComponent";

export const CurPage = () => {
  return (
    <>
      <NavSmComponent />
      <CurTopComponent />
      <CurHowComponent />
      <CurListComponent />
      <CurOurComponent />
    </>
  );
};

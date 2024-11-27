import React from "react";
import Header from "./Layout/Header";
import Challenge1 from "../page/Challenge1";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <>
      <Header />
      <div className="article">
        <Outlet />
      </div>
    </>
  );
}

export default Index;

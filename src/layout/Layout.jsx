import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Loading from "../components/loading/Loading";

import useFirstLoad from "../scripts/useFirstLoad";
const Layout = () => {

  return (
    <>
      <main>
        <Loading />
        <div class="cd-index cd-main-content">
          <div
            id="clapat-page-content"
            class="light-content"
            data-bgcolor="#0c0c0c"
          >
            <Navbar icon="ICOFIT..png" />

            <Outlet />
          </div>
        </div>
      </main>
      <div class="cd-cover-layer"></div>
      <div id="magic-cursor">
        <div id="ball">
          <div id="ball-drag-x"></div>
          <div id="ball-drag-y"></div>
          <div id="ball-loader"></div>
        </div>
      </div>
      <div id="clone-image">
        <div class="hero-translate"></div>
      </div>
      <div id="rotate-device"></div>
    </>
  );
};

export default Layout;

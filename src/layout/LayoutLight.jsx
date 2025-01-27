import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Loading from "../components/loading/Loading";
const LayoutLight = () => {
  return (
    <>
      <main>
        <Loading />
        <div class="cd-index cd-main-content">
          <div
            id="clapat-page-content"
            class="dark-content"
            data-bgcolor="#ffffff"
          >
            <Navbar icon="ICOFIT. (1).png" />

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

export default LayoutLight;

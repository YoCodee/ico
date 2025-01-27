import React from "react";
import Hore from "../components/GSAP/Hore";
import OverlapingImage from "../components/GSAP/OverlapingImage";
import Putar from "../components/GSAP/Putar";
import ProjectNav from "../components/GSAP/ProjectNav";
import useFirstLoad from "../scripts/useFirstLoad";
const HomePage = () => {
   
  return (
    <>
      <div id="content-scroll">
        <div id="main">
          <Hore />

          <div id="main-content">
            <OverlapingImage />

            <br />

            <Putar />

            <ProjectNav Title="About" link="/about" Hover="About" />
          </div>
        </div>
      </div>

      <div id="app"></div>
    </>
  );
};

export default HomePage;

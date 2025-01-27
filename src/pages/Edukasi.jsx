import React from "react";
import MainCompEdukasi from "../components/GSAP/EdukasiComponent/MainCompEdukasi";
import ProjectNav from "../components/GSAP/ProjectNav";
const Edukasi = () => {
  return (
    <>
      <div id="content-scroll">
        <div id="main">
          <div id="hero">
            <div id="hero-styles">
              <div
                id="hero-caption"
                class="content-full-width parallax-scroll-caption text-align-center height-title"
              >
                <div class="inner">
                  <h1 class="hero-title caption-timeline primary-font-title">
                    <span>edukasi</span>
                  </h1>
                  <div class="hero-subtitle caption-timeline">
                    <span>
                      MENYEDIAKAN EDUKASI DARI ARTIKEL YANG SUDAH TERVERIFIKASI
                    </span>
                  </div>
                </div>
              </div>
              <div id="hero-footer">
                <div class="hero-footer-left">
                  <div class="button-wrap right scroll-down">
                    <div class="icon-wrap parallax-wrap">
                      <div class="button-icon parallax-element">
                        <i class="fa-solid fa-angle-down"></i>
                      </div>
                    </div>
                    <div class="button-text sticky right">
                      <span data-hover="Scroll to Explore">
                        Scroll to Explore
                      </span>
                    </div>
                  </div>
                </div>
                <div class="hero-footer-right"></div>
              </div>
            </div>
          </div>

          <div id="main-content">
            <MainCompEdukasi />

            <br />

        

            <ProjectNav Title="Challenge" link="/challenge" Hover="Challenge" />
          </div>
        </div>
      </div>

      <div id="app"></div>
    </>
  );
};

export default Edukasi;

import React from "react";
import PreHero from "../components/GSAP/PreHero";
import MainCompChallenge from "../components/GSAP/ChallengeComp/MainCompChallenge";
import ProjectNav from "../components/GSAP/ProjectNav";
const Challenge = () => {
  return (
    <>
      <div id="content-scroll">
        <div id="main">
          <div id="hero" class="has-image autoscroll1">
            <div id="hero-styles">
              <div id="hero-caption" class="content-full-width height-title">
                <div class="inner">
                  <h1 class="hero-title1 caption-timeline primary-font-title">
                    Challenge
                  </h1>
                </div>
              </div>
              <div id="hero-description" class="content-full-width">
                <div class="inner">
                  <p class="bigger has-opacity">
                    Tantang diri Anda untuk berkontribusi dalam gerakan fashion
                    berkelanjutan dengan mengikuti Challenge Fashion Ramah
                    Lingkungan di EcoFit! Setiap bulan, kami menghadirkan
                    berbagai tantangan seru yang mengajak Anda untuk mengurangi
                    pembelian pakaian baru, berkreasi dengan pakaian yang sudah
                    dimiliki, dan menerapkan gaya hidup yang lebih bertanggung
                    jawab terhadap lingkungan.
                  </p>
                </div>
              </div>
              <div id="hero-footer">
                <div class="hero-footer-left">
                  <div class="button-wrap right scroll-down">
                    <div class="icon-wrap parallax-wrap">
                      <div class="button-icon parallax-element">
                        <i class="arrow-icon-down"></i>
                      </div>
                    </div>
                    <div class="button-text sticky right">
                      <span data-hover="Scroll to Explore">
                        Scroll to Explore
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="hero-image-wrapper">
            <div id="hero-background-layer" class="parallax-scroll-image">
              <div
                id="hero-bg-image"
                style={{ backgroundImage: "url(image/bgChallenge.png)" }}
              ></div>
            </div>
          </div>
          <div id="main-content">
            <MainCompChallenge />

            <br />

            <ProjectNav Title="Home" link="/" Hover="About" />
          </div>
        </div>
      </div>

      <div id="app"></div>
    </>
  );
};

export default Challenge;

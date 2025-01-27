import React from "react";

const PreHero = ({ Title, Body, imageName }) => {
  return (
    <>
      <div id="hero" class="has-image">
        <div id="hero-styles">
          <div id="hero-caption" class="content-full-width height-title">
            <div class="inner">
              <h1 class="hero-title caption-timeline primary-font-title">
                <span>{Title}</span>
              </h1>
            </div>
          </div>
          <div id="hero-description" class="content-full-width">
            <div class="inner">
              <p class="bigger has-opacity">{Body}</p>
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
                  <span data-hover="Scroll to Explore">Scroll to Explore</span>
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
            style={{ backgroundImage: `url(image/${imageName})` }}
          >
            <div class="hero-video-wrapper">
              <video loop muted playsinline class="bgvid">
                <source src="image/{var.png}" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreHero;

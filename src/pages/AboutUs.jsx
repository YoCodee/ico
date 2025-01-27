import React, { useEffect } from "react";
import Hore from "../components/GSAP/Hore";
import OverlapingImage from "../components/GSAP/OverlapingImage";
import Putar from "../components/GSAP/Putar";
import ProjectNav from "../components/GSAP/ProjectNav";
import { Link } from "react-router-dom";
import useFirstLoad from "../scripts/useFirstLoad";
const AboutUs = () => {

  return (
    <>
      <div id="content-scroll">
        <div id="main">
          <div id="hero" class="has-image autoscroll1">
            <div id="hero-styles">
              <div id="hero-caption" class="content-full-width height-title">
                <div class="inner">
                  <h1 class="hero-title caption-timeline primary-font-title">
                    <span>About</span>
                  </h1>
                </div>
              </div>
              <div id="hero-description" class="content-full-width">
                <div class="inner">
                  <p class="bigger has-opacity">
                    Selamat datang di EcoFit, platform fashion berkelanjutan
                    yang hadir untuk membantu Anda tampil stylish sekaligus
                    peduli terhadap lingkungan. Kami percaya bahwa fashion tidak
                    hanya tentang gaya, tetapi juga tentang tanggung jawab.
                    Dengan menggabungkan teknologi, edukasi, dan komunitas,
                    EcoFit menawarkan solusi cerdas untuk mengurangi dampak
                    negatif industri fashion terhadap planet kita.
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

          <div id="main-content">
            <div id="main-page-content">
              <div
                class="content-row row_padding_top row_padding_bottom light-section change-header-color"
                data-bgcolor="#eee"
              >
                <div class="pinned-section">
                  <div class="scrolling-element left">
                    <figure class="has-animation">
                      <a href="image/about/ICOFIT.png" class="image-link">
                        <img src="image/about/ICOFIT.png" alt="Image Title" />
                      </a>
                    </figure>
                  </div>

                  <div class="pinned-element right">
                    <h1 class="primary-font-title has-mask-fill">The Goals</h1>
                    <p>
                      <span class="has-opacity">
                        Menemukan Gaya Ramah Lingkungan melalui rekomendasi AI
                        dan komunitas kami.
                      </span>
                    </p>
                    <p>
                      <span class="has-opacity">
                        {" "}
                        Tukar dan Jual-Beli Pakaian Bekas untuk mendukung
                        ekonomi sirkular.
                      </span>
                    </p>
                    <p>
                      <span class="has-opacity">
                        {" "}
                        Belajar tentang Mode Berkelanjutan lewat artikel dan
                        video edukatif.
                      </span>
                    </p>
                    <p>
                      <span class="has-opacity">
                        Ikut Tantangan Fashion Hijau dengan hadiah menarik untuk
                        setiap langkah kecil menuju keberlanjutan.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="content-row full dark-section" data-bgcolor="#171717">
                <figure
                  class="has-parallax has-parallax-content"
                  data-delay="100"
                >
                  <img src="image/about/FIT.png" alt="Image Title" />
                  <div class="parallax-image-content content-max-width text-align-center">
                    <div class="outer">
                      <div class="inner">
                        <h2 class="big-title has-mask-fill primary-font-title">
                          Jadilah bagian dari revolusi fashion yang ramah
                          lingkungan!
                        </h2>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>

              <div
                class="content-row row_padding_top row_padding_bottom light-section change-header-color"
                data-bgcolor="#eee"
              >
                <div class="pinned-section">
                  <div class="pinned-element left">
                    <h1 class="primary-font-title has-mask-fill">Visi Misi</h1>
                    <p>
                      <span class="has-opacity">
                        Kami ingin menjadikan fashion sebagai kekuatan untuk
                        perubahan positif. Bersama, mari kita kurangi limbah
                        tekstil, kurangi jejak karbon, dan ciptakan masa depan
                        yang lebih hijau. Dengan EcoFit, Anda tidak hanya
                        terlihat keren, tetapi juga berkontribusi pada dunia
                        yang lebih baik.
                      </span>
                    </p>
                  </div>

                  <div class="scrolling-element right">
                    <figure class="has-animation">
                      <a href="image/about/Year.png" class="image-link">
                        <img src="image/about/Year.png" alt="Image Title" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ProjectNav Title="Style" link="/style" Hover="Style" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div id="app"></div>
    </>
  );
};

export default AboutUs;


import React from "react";

const MainCompChallenge = () => {
  return (
    <>
      <div id="main-page-content">
        <div
          class="content-row row_padding_top light-section text-align-center"
          data-bgcolor="#f9f9f9"
        >
          <h1 class="has-mask-fill primary-font-title">Challenge</h1>

          <p>
            <span class="has-opacity">
              AYO TINGKATKAN KESADARANMU DENGAN MENGIKUTI CHALLENGE INI
            </span>
            <br class="destroy" />
            <span class="has-opacity">
              BERSAMA ICOFIT BUAT FASHION MU BERGUNA DAN BERMANFAAT BAGI
              LINGKUNGAN
            </span>
          </p>

          <hr />
          <hr />
        </div>

        <div class="content-row full light-section" data-bgcolor="#f9f9f9">
          <div class="clapat-slider-wrapper content-slider looped-carousel has-animation autocenter dark-cursor">
            <div class="clapat-slider">
              <div class="clapat-slider-viewport">
                <div class="clapat-slide">
                  <div class="slide-img">
                    <img src="image/challenge/6.png" alt="Image Title" />
                  </div>
                </div>
                <div class="clapat-slide">
                  <div class="slide-img">
                    <img src="image/challenge/7.png" alt="Image Title" />
                  </div>
                </div>
                <div class="clapat-slide">
                  <div class="slide-img">
                    <img src="image/challenge/8.png" alt="Image Title" />
                  </div>
                </div>
                <div class="clapat-slide">
                  <div class="slide-img">
                    <img src="image/challenge/9.png" alt="Image Title" />
                  </div>
                </div>
              </div>
            </div>

            <div class="clapat-controls">
              <div class="clapat-button-next slider-button-next"></div>
              <div class="clapat-button-prev slider-button-prev"></div>
              <div class="clapat-pagination"></div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="container">
          <h1>Challenge Fashion Ramah Lingkungan</h1>
          <p>
            Ikuti tantangan kami dan ciptakan gaya fashion yang lebih
            berkelanjutan!
          </p>
          <ul class="challenge-list">
            <li>Buat 3 outfit dari pakaian yang sudah Anda miliki</li>
            <li> Tidak membeli pakaian baru selama sebulan</li>
            <li> Donasikan pakaian yang tidak terpakai</li>
            <li> Upcycle pakaian lama menjadi sesuatu yang baru</li>
            <li>
              Bagikan pengalaman Anda di media sosial dengan tagar
              #EcoFitChallenge
            </li>
          </ul>
          <a
            href="https://www.instagram.com"
            style={{padding: "10px 30px", borderRadius: "50px", background: "black", color: "white",}}
            class="btn"
          >
            Ikuti Challenge Sekarang
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default MainCompChallenge;

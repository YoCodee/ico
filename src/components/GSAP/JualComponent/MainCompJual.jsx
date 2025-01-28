import React from "react";
import { Link } from "react-router-dom";
import "../../../style/hovercub.css";
const MainCompJual = () => {
  const handleReload = () => {
    window.location.reload();
    window.location.href = "/shopp";
  };
  return (
    <>
      <div id="main-page-content">
        <div
          class="content-row small row_padding_top dark-section text-align-center"
          data-bgcolor="#1c1e1c"
        >
          <h1 class="primary-font-title has-mask-fill">Kategori Jualbeli</h1>
          <p>
            <span class="has-opacity">
              Dibawah ini ada 3 kategori yang bisa di jual beli ataupun
              ditukarkan di EcoFit
            </span>
            <br class="destroy" />
            <span class="has-opacity">
              Diantaralainnya ada Pakaian, Celana dan Aksesoris
            </span>
          </p>

          <hr />
          <hr />
        </div>

        <div class="content-row dark-section" data-bgcolor="#1c1e1c">
          <div class="zoom-gallery">
            <ul class="zoom-wrapper-gallery" data-heightratio="0.7">
              <li class="zoom-center">
                <div class="zoom-img-wrapper">
                  <img src="image/Jual/1.png" />
                </div>
              </li>
              <li>
                <div class="zoom-img-wrapper">
                  <img src="image/Jual/2.png" />
                </div>
              </li>
              <li>
                <div class="zoom-img-wrapper">
                  <img src="image/Jual/3.png" />
                </div>
              </li>
            </ul>
            <div class="zoom-wrapper-thumb"></div>
          </div>
        </div>

        <div
          class="content-row row_padding_top dark-section text-align-center"
          data-bgcolor="#1c1e1c"
        >
          <h1 class="primary-font-title has-mask-fill">Pakaian</h1>
          <p>
            <span class="has-opacity">
              Salah satu Kategori yang bisa di jual
            </span>
            <br class="destroy" />
            <span class="has-opacity">
              Contoh lainnya yaitu Sweater, T-Shirt, Hoodie
            </span>
          </p>
        </div>

        <div
          class="content-row row_padding_top dark-section"
          data-bgcolor="#1c1e1c"
        >
          <div class="zoom-gallery">
            <ul class="zoom-wrapper-gallery" data-heightratio="0.7">
              <li>
                <div class="zoom-img-wrapper">
                  <img src="image/Jual/1.png" />
                </div>
              </li>
              <li class="zoom-center">
                <div class="zoom-img-wrapper">
                  <img src="image/Jual/2.png" />
                </div>
              </li>
              <li>
                <div class="zoom-img-wrapper">
                  <img src="image/Jual/3.png" />
                </div>
              </li>
            </ul>
            <div class="zoom-wrapper-thumb"></div>
          </div>
        </div>

        <div
          class="content-row small row_padding_top dark-section text-align-center"
          data-bgcolor="#1c1e1c"
        >
          <h1 class="primary-font-title has-mask-fill">Celana</h1>
          <p>
            <span class="has-opacity">
              Salah satu Kategori yang bisa di jual
            </span>
            <br class="destroy" />
            <span class="has-opacity">
              Contoh lainnya adalah Celana Panjang, Jogger, Jeans
            </span>
          </p>
        </div>

        <div
          class="content-row row_padding_top dark-section"
          data-bgcolor="#1c1e1c"
        >
          <div class="zoom-gallery">
            <ul class="zoom-wrapper-gallery" data-heightratio="0.7">
              <li>
                <div class="zoom-img-wrapper">
                  <img src="image/Jual/1.png" />
                </div>
              </li>
              <li>
                <div class="zoom-img-wrapper">
                  <img src="image/Jual/2.png" />
                </div>
              </li>
              <li class="zoom-center">
                <div class="zoom-img-wrapper">
                  <img src="image/Jual/3.png" />
                </div>
              </li>
            </ul>
            <div class="zoom-wrapper-thumb"></div>
          </div>
        </div>

        <div
          class="content-row small row_padding_top dark-section text-align-center"
          data-bgcolor="#1c1e1c"
        >
          <h1 class="primary-font-title has-mask-fill">Aksesoris</h1>
          <p>
            <span class="has-opacity">
              Salah satu Kategori yang bisa di jual
            </span>
            <br class="destroy" />
            <span class="has-opacity">
              Contoh lainnya adalah Topi, tas , Sepatu, Jam Tangan{" "}
            </span>
          </p>
        </div>

        <div
          class="content-row row_padding_top dark-section"
          data-bgcolor="#1c1e1c"
        >
          {" "}
          <Link className="link-container" onClick={handleReload}>
            <h1>Ayo Masuk MarketPlace kami</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainCompJual;

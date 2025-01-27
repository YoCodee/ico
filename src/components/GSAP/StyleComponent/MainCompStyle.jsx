import React from "react";
import { Link } from "react-router-dom";
const MainCompStyle = () => {
  const handleReload = () => {
    window.location.reload();
    window.location.href = "/question";
  }
  return (
    <>
      <div id="main-page-content">
        <div
          class="content-row row_padding_top row_padding_bottom light-section change-header-color"
          data-bgcolor="#f9f9f9"
        >
          <div class="one_half"></div>

          <div class="one_half last">
            <h1 class="primary-font-title has-mask-fill">Boys Style</h1>
            <p>
              <span class="has-opacity">
                STYLE YANG KAMI SUDAH SESUAIKAN DENGAN KESESUAIAN PRIA SEHARI
                DENGAN MEMADUKAN SET SET YANG SUDAH KAMI PILIH AGAR ENAK DI
                PAKAI BUAT PERGI KE KAMPUS, NONGKRONG, DATE ATAUPUN ACARA FORMAL
                DAN NON FORMAL.
              </span>
            </p>
          </div>
        </div>
        <div
          class="content-row row_padding_bottom text-align-center full light-section change-header-color"
          data-bgcolor="#f9f9f9"
        >
          <div class="moving-gallery fw-gallery random-sizes">
            <ul class="wrapper-gallery">
              <li>
                <img src="image/img-style/Sweater Vintage.png" />
              </li>
              <li>
                <img src="image/img-style/Sweater Vintage.png" />
              </li>
              <li>
                <img src="image/img-style/Sweater Vintage.png" />
              </li>
              <li>
                <img src="image/img-style/Sweater Vintage.png" />
              </li>
            </ul>
          </div>
        </div>
        <div
          class="content-row row_padding_bottom light-section change-header-color"
          data-bgcolor="#f9f9f9"
        >
          <div class="one_half">
            <h1 class="primary-font-title has-mask-fill">girl style</h1>
            <p>
              <span class="has-opacity">
                STYLE PEREMPUAN YANG KAMI SUDAH SESUAIKAN DENGAN KESESUAIAN
                WANITA SEHARI DENGAN MEMADUKAN SET SET YANG SUDAH KAMI PILIH
                AGAR ENAK DI PAKAI BUAT PERGI KE KAMPUS, NONGKRONG, DATE ATAUPUN
                ACARA FORMAL DAN NON FORMAL.
              </span>
            </p>
          </div>

          <div class="one_half last"></div>
        </div>
        <div
          class="content-row row_padding_bottom text-align-center full light-section change-header-color"
          data-bgcolor="#f9f9f9"
        >
          <div class="moving-gallery bw-gallery random-sizes">
            <ul class="wrapper-gallery">
              <li>
                <img src="image/img-style/SweaterGirl.png" />
              </li>
              <li>
                <img src="image/img-style/SweaterGirl.png" />
              </li>
              <li>
                <img src="image/img-style/SweaterGirl.png" />
              </li>
              <li>
                <img src="image/img-style/SweaterGirl.png" />
              </li>
            </ul>
          </div>
        </div>
        <div
          class="content-row row_padding_bottom light-section change-header-color text-align-center"
          data-bgcolor="#f9f9f9"
        >
          <br />
          <br />
          <br />
          <h1 class="primary-font-title has-mask-fill">
            Bersama EcoFit, Anda bisa tetap tampil modis sambil berkontribusi
            pada gerakan fashion yang lebih sadar lingkungan. Mari bergaya
            dengan bijak dan berkelanjutan!
          </h1>
        </div>

        <div
          class="content-row row_padding_bottom light-section change-header-color text-align-center"
          data-bgcolor="#f9f9f9"
        >
          <br />
          <br />
          <br />
          <div class="">
            <Link
              onClick={handleReload}
              class="btn"
              style={{
                fontsize: "24px",
                padding: "20px 64px",
                borderRadius: "50px",
                backgroundColor: "#000000",
                color: "white",
              }}
         
            >
              Coba Style mu
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCompStyle;

import React from "react";
import { Link } from "react-router-dom";
const OverlapingImage = () => {
  const StylePage = () => {
    window.location.reload();
    window.location.href = "/style";
  };
  const JualPage = () => {
    window.location.reload();
    window.location.href = "/jual";
  };
  const EdukasiPage = () => {
    window.location.reload();
    window.location.href = "/edukasi";
  };
  const ChallengePage = () => {
    window.location.reload();
    window.location.href = "/challenge";
  };
  return (
    <div id="main-page-content" class="content-full-width">
      <div
        class="content-row full text-align-center row_padding_left row_padding_right dark-section"
        data-bgcolor="#0c0c0c"
      >
        <div id="itemsWrapperLinks">
          <div id="itemsWrapper" class="webgl-fitthumbs fx-one">
            <div class="overlapping-gallery">
              <div class="overlapping-image" onClick={StylePage}>
                <div
                  class="overlapping-image-inner trigger-item"
                  data-centerLine="OPEN"
                >
                  <div class="img-mask">
                    <Link class="slide-link" data-type="page-transition"></Link>
                    <div class="section-image trigger-item-link">
                      <img
                        src="image/1.png"
                        class="item-image grid__item-img"
                        alt=""
                      />
                    </div>
                    <img
                      src="image/1.png"
                      class="grid__item-img grid__item-img--large"
                      alt=""
                    />
                  </div>
                  <div class="slide-caption trigger-item-link-secondary">
                    <div class="slide-title primary-font-title">
                      <span></span>
                    </div>
                    <div class="slide-date">
                      <span>2025</span>
                    </div>
                    <div class="slide-cat">
                      <span>Style</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="overlapping-image" onClick={JualPage}>
                <div
                  class="overlapping-image-inner trigger-item"
                  data-centerLine="OPEN"
                >
                  <div class="img-mask">
                    <Link class="slide-link" data-type="page-transition"></Link>
                    <div class="section-image trigger-item-link">
                      <img
                        src="image/2.png"
                        class="item-image grid__item-img"
                        alt=""
                      />
                    </div>
                    <img
                      src="image/2.png"
                      class="grid__item-img grid__item-img--large"
                      alt=""
                    />
                  </div>
                  <div class="slide-caption trigger-item-link-secondary">
                    <div class="slide-title primary-font-title">
                      <span></span>
                    </div>
                    <div class="slide-date">
                      <span>2025</span>
                    </div>
                    <div class="slide-cat">
                      <span>Jual Beli</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="overlapping-image" onClick={EdukasiPage}>
                <div
                  class="overlapping-image-inner trigger-item"
                  data-centerLine="OPEN"
                >
                  <div class="img-mask">
                    <Link class="slide-link" data-type="page-transition"></Link>
                    <div class="section-image trigger-item-link">
                      <img
                        src="image/3.png"
                        class="item-image grid__item-img"
                        alt=""
                      />
                    </div>
                    <img
                      src="image/3.png"
                      class="grid__item-img grid__item-img--large"
                      alt=""
                    />
                  </div>
                  <div class="slide-caption trigger-item-link-secondary">
                    <div class="slide-title primary-font-title">
                      <span></span>
                    </div>
                    <div class="slide-date">
                      <span>2025</span>
                    </div>
                    <div class="slide-cat">
                      <span>Edukasi</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="overlapping-image" onClick={ChallengePage}>
                <div
                  class="overlapping-image-inner trigger-item"
                  data-centerLine="OPEN"
                >
                  <div class="img-mask">
                    <Link class="slide-link" data-type="page-transition"></Link>
                    <div class="section-image trigger-item-link">
                      <img
                        src="image/4.png"
                        class="item-image grid__item-img"
                        alt=""
                      />
                    </div>
                    <img
                      src="image/4.png"
                      class="grid__item-img grid__item-img--large"
                      alt=""
                    />
                  </div>
                  <div class="slide-caption trigger-item-link-secondary">
                    <div class="slide-title primary-font-title">
                      <span></span>
                    </div>
                    <div class="slide-date">
                      <span>2025</span>
                    </div>
                    <div class="slide-cat">
                      <span>Challenge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default OverlapingImage;

import React from "react";

const Putar = () => {
  return (
    <div
      class="content-row text-align-center dark-section"
      data-bgcolor="#0c0c0c"
    >
      <div class="move-thumbs-wrapper">
        <div class="start-thumbs-caption">
          <h2 class="primary-font-title big-title has-mask-fill">
            Apa yang kami Sediakan
          </h2>
          <br />
          <p>Ini adalah kelebihan website Icofit.</p>
        </div>

        <div class="start-thumbs-wrapper">
          <div class="start-move-thumb" data-start="top 120%" data-stop="600%">
            <div class="move-thumb-inner">
              <div class="section-image">
                <img src="image/pro-index/met1.png" class="item-image" alt="" />
              </div>
            </div>
          </div>

          <div class="start-move-thumb" data-start="top 90%" data-stop="1100%">
            <div class="move-thumb-inner">
              <div class="section-image">
                <img src="image/pro-index/met2.png" class="item-image" alt="" />
              </div>
            </div>
          </div>

          <div class="start-move-thumb" data-start="top 90%" data-stop="400%">
            <div class="move-thumb-inner">
              <div class="section-image">
                <img src="image/pro-index/met3.png" class="item-image" alt="" />
              </div>
            </div>
          </div>

          <div class="start-move-thumb" data-start="top 120%" data-stop="600%">
            <div class="move-thumb-inner">
              <div class="section-image">
                <img src="image/pro-index/met4.png" class="item-image" alt="" />
              </div>
            </div>
          </div>

          <div class="start-move-thumb" data-start="top 100%" data-stop="750%">
            <div class="move-thumb-inner">
              <div class="section-image">
                <img src="image/pro-index/met5.png" class="item-image" alt="" />
              </div>
            </div>
          </div>

          <div class="start-move-thumb" data-start="top 40%" data-stop="300%">
            <div class="move-thumb-inner">
              <div class="section-image">
                <img src="image/pro-index/met6.png" class="item-image" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="end-thumbs-wrapper">
          <div class="end-move-thumb"></div>
          <div class="end-move-thumb"></div>
          <div class="end-move-thumb"></div>
          <div class="end-move-thumb"></div>
          <div class="end-move-thumb"></div>
          <div class="end-move-thumb"></div>
        </div>
      </div>
    </div>
  );
};

export default Putar;

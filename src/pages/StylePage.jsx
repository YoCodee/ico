import React from "react";
import PreHero from "../components/GSAP/PreHero";
import MainCompStyle from "../components/GSAP/StyleComponent/MainCompStyle";
import ProjectNav from "../components/GSAP/ProjectNav";
const StylePage = () => {
  return (
    <>
      <div id="content-scroll">
        <div id="main">
          <PreHero
            Title="/Style"
            Body="                Konsultasi Gaya Ramah Lingkungan Temukan gaya terbaik Anda
                dengan cara yang lebih berkelanjutan! Di EcoFit, kami menawarkan
                layanan Konsultasi Gaya Ramah Lingkungan yang membantu Anda
                memilih pakaian bekas atau pakaian yang telah diperbarui sesuai
                dengan gaya pribadi Anda. Dengan bantuan teknologi AI dan
                komunitas fashion yang peduli lingkungan, kami memberikan
                rekomendasi pakaian yang tidak hanya stylish tetapi juga ramah
                lingkungan."
            imageName="var.png"
          />

          <div id="main-content">
            <MainCompStyle />

            <br />

            <ProjectNav Title="jual" link="/jual" Hover="jual" />
          </div>
        </div>
      </div>

      <div id="app"></div>
    </>
  );
};

export default StylePage;

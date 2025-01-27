import React from "react";
import MainCompJual from "../components/GSAP/JualComponent/MainCompJual";
import PreHero from "../components/GSAP/PreHero";
import ProjectNav from "../components/GSAP/ProjectNav";
const JualPage = () => {
  return (
    <>
      <div id="content-scroll">
        <div id="main">
          <PreHero
            Title="/Jualbeli"
            Body="                        Berikan pakaian Anda kesempatan kedua dan temukan
                        fashion yang lebih berkelanjutan dengan fitur Jual-Beli
                        Pakaian Bekas di EcoFit. Kami menyediakan platform yang
                        memudahkan Anda untuk menjual pakaian yang sudah tidak
                        terpakai atau menemukan pakaian preloved berkualitas
                        dengan harga yang lebih terjangkau. Dengan bergabung
                        dalam gerakan ini, Anda tidak hanya memperbarui gaya
                        Anda, tetapi juga berkontribusi dalam mengurangi limbah
                        tekstil dan mendukung ekonomi sirkular."
            imageName="bgbg.png"
          />

          <div id="main-content">
            <MainCompJual />

            <br />

            <ProjectNav Title="edukasi" link="/edukasi" Hover="edukasi" />
          </div>
        </div>
      </div>

      <div id="app"></div>
    </>
  );
};

export default JualPage;

import React from "react";
import { useLocation } from "react-router-dom";
import "../../style/Result.css";
import { Link } from "react-router-dom";
import ProjectNav from "../../components/GSAP/ProjectNav";
const Result = () => {
  const next = () => {
    window.location.reload();
    window.location.href = "/";
  };
  // Fungsi untuk mengambil query parameter dari URL
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const activity = query.get("activity");
  const confidence = query.get("confidence");
  const color = query.get("color");
  const age = query.get("age");
  const gender = query.get("gender");

  // Data rekomendasi gaya berdasarkan parameter
  const recommendations = [
    {
      id: 1,
      style: "Casual",
      description: "Gaya santai cocok untuk kegiatan sehari-hari.",
      image: "/image/img-style/3.png",
      condition: activity === "home" && color === "bright",
    },
    {
      id: 2,
      style: "Streetwear",
      description: "Gaya trendy cocok untuk anak muda yang suka keluar rumah.",
      image: "/image/img-style/Sweater Vintage.png",
      condition: activity === "outside" && confidence === "yes",
    },
    {
      id: 3,
      style: "Formal",
      description: "Gaya resmi untuk acara-acara penting.",
      image: "/image/img-style/4.png",
      condition: age === "adult" && color === "dark",
    },
    {
      id: 4,
      style: "Vintage",
      description: "Gaya klasik yang cocok untuk semua umur.",
      image: "/image/img-style/SweaterGirl.png",
      condition: color === "dark" && gender === "female",
    },
    {
      id: 5,
      style: "Sporty",
      description: "Gaya aktif bagi yang suka olahraga.",
      image: "/image/img-style/6.png",
      condition: activity === "outside" && confidence === "no",
    },
    {
      id: 6,
      style: "Bohemian",
      description: "Gaya bebas dan artistik untuk yang kreatif.",
      image: "/image/img-style/7.png",
      condition: gender === "female" && color === "bright",
    },
    {
      id: 7,
      style: "Minimalist",
      description: "Gaya simpel dan elegan untuk mereka yang praktis.",
      image: "/image/img-style/5.png",
      condition: confidence === "yes" && color === "dark",
    },
    {
      id: 8,
      style: "Business Casual",
      description: "Gaya semi formal yang tetap nyaman.",
      image: "/image/img-style/Sweater Vintage.png",
      condition: age === "adult" && activity === "home",
    },
    {
      id: 9,
      style: "Athleisure",
      description: "Gaya kasual dengan sentuhan olahraga.",
      image: "/image/img-style/7.png",
      condition: activity === "outside" && color === "bright",
    },
    {
      id: 10,
      style: "Preppy",
      description: "Gaya klasik dengan sentuhan modern.",
      image: "/image/img-style/4.png",
      condition: gender === "male" && confidence === "yes",
    },
  ];

  // Filter rekomendasi berdasarkan kondisi yang sesuai
  const filteredRecommendations = recommendations.filter(
    (item) => item.condition
  );

  return (
    <>
      <div>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginTop: "70px",
            color: "#000",
            textAlign: "center",
          }}
        >
          Hasil Pencarian
        </h1>
        <div className="container">
          {filteredRecommendations.length > 0 ? (
            filteredRecommendations.map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.style} />
                <h2>{item.style}</h2>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>Tidak ada hasil yang cocok.</p>
          )}
        </div>
      </div>
      <div class="content-row full dark-section" data-bgcolor="#171717">
        <figure class="has-parallax has-parallax-content" data-delay="100">
          <img src="image/about/FIT.png" alt="Image Title" />
          <div class="parallax-image-content content-max-width text-align-center">
            <div class="outer">
              <div class="inner">
                <h2 class="big-title has-mask-fill primary-font-title">
                  Hasil Rekomendasi ini didapat dari Hasil dari Pilihanmu dan
                  Hasil ini bersifat subjektif berdasarkan jawaban anda.
                </h2>
              </div>
            </div>
          </div>
        </figure>
      </div>
      <div id="page-nav">
        <div class="page-nav-wrap">
          <div class="page-nav-caption content-full-width text-align-center height-title">
            <div class="inner">
              <div class="next-hero-subtitle caption-timeline">
                <span>Cari tau tentang apa itu ICOFIT</span>
              </div>
              <br />
              <Link
                onClick={next}
                class="page-title next-ajax-link-page"
                data-type="page-transition"
                data-centerline="Home."
              >
                <div class="next-hero-title primary-font-title caption-timeline">
                  <span>Home.</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;

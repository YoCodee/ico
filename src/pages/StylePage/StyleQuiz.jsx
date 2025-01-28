import { useState } from "react";
import "../../style/Quiz.css";

const StyleQuiz = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    activity: "",
    confidence: "",
    color: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const showResults = () => {
    const queryString = new URLSearchParams(formData).toString();
    window.location = `/result?${queryString}`;
  };

  return (
    <div>
      <header
        className="fullscreen-menu invert-header"
        style={{ backgroundColor: "#0c0c0c" }}
      >
        <div id="header-container">
          <div id="logo" className="hide-ball">
            <a href="index.html">
              <img
                className="black-logo"
                src="image/pro-index/ICOFIT. (1).png"
                alt="Black Logo"
              />
              <img
                className="white-logo"
                src="image/pro-index/ICOFIT. (1).png"
                alt="White Logo"
              />
            </a>
          </div>
        </div>
      </header>

      <div className="utama">
        {page === 1 && (
          <div className="container active">
            <p className="question">
              Apakah anda lebih <span className="satu">suka</span> berada di
              rumah atau keluar?
            </p>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="activity"
                  value="home"
                  onChange={handleChange}
                />{" "}
                Berada di rumah
              </label>
              <label>
                <input
                  type="radio"
                  name="activity"
                  value="outside"
                  onChange={handleChange}
                />{" "}
                Keluar rumah
              </label>
            </div>
            <button className="btn" onClick={nextPage}>
              Next
            </button>
          </div>
        )}

        {page === 2 && (
          <div className="container active">
            <p className="question">
              Apakah anda sangat <span className="dua"> percaya diri</span>{" "}
              dengan diri anda?
            </p>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="confidence"
                  value="yes"
                  onChange={handleChange}
                />{" "}
                Ya
              </label>
              <label>
                <input
                  type="radio"
                  name="confidence"
                  value="no"
                  onChange={handleChange}
                />{" "}
                Tidak
              </label>
            </div>
            <button className="btn" onClick={nextPage}>
              Next
            </button>
          </div>
        )}

        {page === 3 && (
          <div className="container active">
            <p className="question">
              <span className="tiga">Warna</span> apa yang anda sukai?
            </p>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="color"
                  value="bright"
                  onChange={handleChange}
                />{" "}
                Terang
              </label>
              <label>
                <input
                  type="radio"
                  name="color"
                  value="dark"
                  onChange={handleChange}
                />{" "}
                Gelap
              </label>
            </div>
            <button className="btn" onClick={nextPage}>
              Next
            </button>
          </div>
        )}

        {page === 4 && (
          <div className="container active">
            <p className="question">
              Rentang <span className="empat">usia</span> anda berapa?
            </p>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="age"
                  value="young"
                  onChange={handleChange}
                />{" "}
                Di bawah 20
              </label>
              <label>
                <input
                  type="radio"
                  name="age"
                  value="adult"
                  onChange={handleChange}
                />{" "}
                20-30
              </label>
              <label>
                <input
                  type="radio"
                  name="age"
                  value="senior"
                  onChange={handleChange}
                />{" "}
                Di atas 30
              </label>
            </div>
            <button className="btn" onClick={nextPage}>
              Next
            </button>
          </div>
        )}

        {page === 5 && (
          <div className="container active">
            <p className="question">
              Apa <span className="lima">gender</span> anda?
            </p>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />{" "}
                Laki-laki
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />{" "}
                Perempuan
              </label>
            </div>
            <button className="btn" onClick={showResults}>
              Lihat Hasil
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleQuiz;

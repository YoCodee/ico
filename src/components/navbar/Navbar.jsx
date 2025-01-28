import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ icon }) => {
  const Home123 = () => {
    window.location.reload();
    window.location.href = "/";
  };
  const About = () => {
    window.location.reload();
    window.location.href = "/about";
  };
  const Style = () => {
    window.location.reload();
    window.location.href = "/style";
  };
  const Jual = () => {
    window.location.reload();
    window.location.href = "/jual";
  };
  const Edukasi = () => {
    window.location.reload();
    window.location.href = "/edukasi";
  };
  const Challenge = () => {
    window.location.reload();
    window.location.href = "/challenge";
  };
  return (
    <header class="fullscreen-menu invert-header" data-menucolor="#0c0c0c">
      <div id="header-container">
        <div id="logo" class="hide-ball">
          <Link class="ajax-link" data-type="page-transition" onClick={Home123}>
            <img
              class="black-logo"
              src={`image/pro-index/${icon}`}
              alt="icofit"
            />
            <img
              class="white-logo"
              src={`image/pro-index/${icon}`}
              alt="icofit"
            />
          </Link>
        </div>

        <nav>
          <div class="nav-height">
            <div class="outer">
              <div class="inner">
                <ul data-breakpoint="10025" class="flexnav">
                  <li class="link menu-timeline">
                    <Link
                      class="ajax-link"
                      data-type="page-transition"
                      onClick={Home123}
                    >
                      <div class="before-span">
                        <span data-hover="Home">Home</span>
                      </div>
                    </Link>
                  </li>
                  <li class="link menu-timeline">
                    <Link
                      class="ajax-link"
                      data-type="page-transition"
                      onClick={About}
                    >
                      <div class="before-span">
                        <span data-hover="About">About</span>
                      </div>
                    </Link>
                  </li>
                  <li class="link menu-timeline">
                    <Link
                      class="ajax-link"
                      data-type="page-transition"
                      href="contact.html"
                    >
                      <div class="before-span">
                        <span data-hover="Contact">Contact</span>
                      </div>
                    </Link>
                  </li>
                  <li class="link menu-timeline">
                    <Link class="" href="#">
                      <div class="before-span">
                        <span data-hover="Service">Service</span>
                      </div>
                    </Link>
                    <ul>
                      <li>
                        <Link data-type="page-transition" onClick={Style}>
                          Style
                        </Link>
                      </li>
                      <li>
                        <Link data-type="page-transition" onClick={Jual}>
                          Jual Beli
                        </Link>
                      </li>
                      <li>
                        <Link data-type="page-transition" onClick={Edukasi}>
                          Edukasi
                        </Link>
                      </li>
                      <li>
                        <Link data-type="page-transition" onClick={Challenge}>
                          Challenge
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div class="button-wrap right menu burger-lines">
          <div class="icon-wrap parallax-wrap">
            <div class="button-icon parallax-element">
              <div id="burger-wrapper">
                <div id="menu-burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="button-text sticky right">
            <span data-hover="Menu">Menu</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

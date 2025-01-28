import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({icon}) => {
  return (
  
    <header
    class="fullscreen-menu invert-header"
    data-menucolor="#0c0c0c"
  >
    <div id="header-container">
  
      <div id="logo" class="hide-ball">
        <a
          class="ajax-link"
          data-type="page-transition"
          href="index.html"
        >
          <img
            class="black-logo"
            src={`image/pro-index/${icon}`}
            alt="ChurchViz Logo"
          />
          <img
            class="white-logo"
            src={`image/pro-index/${icon}`}
            alt="ChurchViz Logo"
          />
        </a>
      </div>
  
      <nav>
        <div class="nav-height">
          <div class="outer">
            <div class="inner">
              <ul data-breakpoint="10025" class="flexnav">
                <li class="link menu-timeline">
                  <Link
                    to="/"
                    class="ajax-link"
                    data-type="page-transition"
                    ><div class="before-span">
                      <span data-hover="Home">Home</span>
                    </div></Link>
                </li>
                <li class="link menu-timeline">
                  <a
                    class="ajax-link"
                    data-type="page-transition"
                    href="about-us.html"
                    ><div class="before-span">
                      <span data-hover="About">About</span>
                    </div></a>
                </li>
                <li class="link menu-timeline">
                  <a
                    class="ajax-link"
                    data-type="page-transition"
                    href="contact.html"
                    ><div class="before-span">
                      <span data-hover="Contact">Contact</span>
                    </div></a>
                </li>
                <li class="link menu-timeline">
                  <a class="" href="#"
                    ><div class="before-span">
                      <span data-hover="Service">Service</span>
                    </div></a>
                  <ul>
                    <li>
                      <a
                        href="Style.html"
                        data-type="page-transition"
                        >Style</a>
                    </li>
                    <li>
                      <a href="JualBeli.html" data-type="page-transition"
                        >Jual Beli</a>
                    </li>
                    <li>
                      <a
                        href="VideoEdukasi.html"
                        data-type="page-transition"
                        >Edukasi</a>
                    </li>
                    <li>
                      <a href="challenge.html" data-type="page-transition"
                        >Challenge</a>
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

  )
}

export default Navbar
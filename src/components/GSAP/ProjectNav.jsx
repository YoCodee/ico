import React from "react";
import { Link } from "react-router-dom";

const ProjectNav = ({ Title, link, Hover }) => {
  const handleReload = () => {
    window.location.reload();
    window.location.href = link;
  };
  return (
    <div id="page-nav">
      <div class="page-nav-wrap">
        <div class="page-nav-caption content-full-width text-align-center height-title">
          <div class="inner">
            <div class="next-hero-subtitle caption-timeline">
              <span>Cari tau tentang apa itu ICOFIT</span>
            </div>
            <br />
            <Link
              to={link}
              class="page-title next-ajax-link-page"
              data-type="page-transition"
              data-centerline={Hover}
            >
              <div class="next-hero-title primary-font-title caption-timeline">
                <span>{Title}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNav;

import { useEffect } from "react";
import $ from "jquery";
import { gsap, Power2, Power0 } from "gsap";

const useFirstLoad = () => {
  useEffect(() => {
    // Handle popstate (back/forward button)
    const handlePopState = () => {
      window.location.reload(true);
    };
    window.addEventListener("popstate", handlePopState);

    const setHeaderBackground = () => {
      const isLightContent = $("#clapat-page-content").hasClass("light-content");
      const bgColor = document.querySelector("#clapat-page-content").getAttribute("data-bgcolor");

      $("nav").css("background-color", $("header").data("menucolor"));
      gsap.to("main", { duration: 0.5, backgroundColor: bgColor, ease: Power2.easeInOut });

      if (isLightContent) {
        $("#magic-cursor").addClass("light-content");
      } else {
        $("#magic-cursor").removeClass("light-content");
      }

      if ($("#hero").length > 0) {
        if ($("#hero").hasClass("has-image") || $("header").hasClass("fullscreen-menu")) {
          $("header").css("background-color", "transparent");
        } else if ($("#blog").length > 0 || $("#post").length > 0) {
          $("header").css("background-color", isLightContent ? "#171717" : "#fff");
        }
      } else {
        $("header").css("background-color", "transparent");
      }
    };

    setHeaderBackground();

    $(".video-cover").each(function () {
      const image = $(this).data("src");
      $(this).css({ "background-image": `url(${image})` });
    });

    $("a.ajax-link").on("click", () => {
      $("body").addClass("show-loader");
      setTimeout(() => {
        $("#header-container").removeClass("light-content-header dark-content-header");
      }, 50);

      $(".flexnav").removeClass("flexnav-show");
      $("#menu-burger").removeClass("open");

      gsap.to("nav", {
        duration: 0.3,
        backgroundColor: document.querySelector("#clapat-page-content").getAttribute("data-bgcolor"),
      });

      $("header").removeClass("white-header");
      $("#app").remove();
      setTimeout(() => {
        $("#canvas-slider.active").remove();
      }, 300);
      $(".temporary-hero").remove();
      
      gsap.to($(".fullscreen-menu .menu-timeline"), { duration: 0.3, y: -30, opacity: 0, stagger: 0.03, ease: Power2.easeIn });
    });

    // Handle menu interactions
    $("nav .ajax-link").on("click", function () {
      $(this).parents(".menu-timeline").addClass("hover");
      $(this).parents(".item-with-ul").addClass("hover");
      gsap.set($(this).find("span"), { yPercent: 0 });
      $("header").removeClass("white-header");
      $("#app").remove();
      $(".big-title-caption").remove();
    });

    $("#burger-wrapper, .menu .button-text").on("click", function () {
      $("#menu-burger, nav").toggleClass("open");

      if ($("#menu-burger").hasClass("open")) {
        gsap.to("nav", { duration: 0.3, opacity: 1, ease: Power2.easeInOut });
        $("header").addClass("over-sidebar over-white-section");
      } else {
        gsap.to("nav", { duration: 0.3, opacity: 0, delay: 0.6, ease: Power2.easeInOut });
      }
    });

    $(".wpcf7-form-control-wrap").each(function () {
      if ($(this).has("label").length <= 0) {
        $(this).append('<label class="input_label"></label>');
      }
    });

    // Cleanup event listeners
    return () => {
      window.removeEventListener("popstate", handlePopState);
      $("a.ajax-link").off("click");
      $("nav .ajax-link").off("click");
      $("#burger-wrapper, .menu .button-text").off("click");
    };
  }, []);
};

export default useFirstLoad;

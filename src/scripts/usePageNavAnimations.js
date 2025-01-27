import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';

gsap.registerPlugin(ScrollTrigger);

const usePageNavAnimations = () => {
  useEffect(() => {
    // Function to set page navigation properties
    const setPageNavProperties = () => {
      gsap.set(".page-nav-caption.height-title", { height: window.innerHeight - $('footer').height() });
    };

    setPageNavProperties();
    window.addEventListener('resize', setPageNavProperties);

    // ScrollTrigger Animations
    const NextheroPin = gsap.to('.next-project-wrap', {
      duration: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.next-project-wrap',
        start: "top top",
        end: '+=100%',
        pin: true,
        scrub: true,
      }
    });

    const nextProjectImageParallax = gsap.to('.next-project-image', {
      duration: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      scale: 1.05,
      rotation: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#project-nav',
        start: 'top 0%',
        end: '+=100%',
        scrub: true,
      }
    });

    const nextAllWorks = gsap.to('.next-caption', {
      opacity: 1,
      scale: 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: '#project-nav',
        start: 'top 0%',
        end: '+=100%',
        scrub: true,
      }
    });

    const nextProjectProgress = gsap.to('.next-hero-progress span', {
      duration: 1,
      width: "100%",
      ease: 'none',
      scrollTrigger: {
        trigger: '#project-nav',
        start: 'top top',
        end: '+=100%',
        scrub: true,
      }
    });

    const nextPageCaptionParallax = gsap.to('.page-nav-caption', {
      duration: 1,
      top: "0",
      scale: 1,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#page-nav',
        start: 'top 100%',
        end: () => `+=${$('#page-nav').outerHeight() + $('footer').outerHeight()}`,
        scrub: true,
      }
    });

    return () => {
      window.removeEventListener('resize', setPageNavProperties);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

export default usePageNavAnimations;

// ------------------------------------------------
// Project Name: Braxton - Personal Portfolio & Resume HTML Template
// Project Description: Show yourself brightly with Braxton - unique and creative portfolio and resume template!
// Tags: mix_design, resume, portfolio, personal page, cv, template, one page, responsive, html5, css3, creative, clean
// Version: 1.0.1
// Build Date: March 2024
// Last Update: April 2025
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: app.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  01. Loader & Loading Animation
//  02. Bootstrap Scroll Spy Plugin Settings
//  03. Lenis Scroll Plugin
//  04. Parallax
//  05. Scroll Animations
//  06. Smooth Scrolling
//  07. Swiper Slider
//  08. Contact Form
//  09. Modernizr SVG Fallback
//  10. Chrome Smooth Scroll
//  11. Images Moving Ban
//  12. Detecting Mobile/Desktop
//  13. PhotoSwipe Gallery Images Replace
//  14. Color Switch
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(function() {

  "use strict";

  gsap.registerPlugin(ScrollTrigger);

  // --------------------------------------------- //
  // Loader & Loading Animation Start
  // --------------------------------------------- //
  const content = document.querySelector('body');
  const imgLoad = imagesLoaded(content);
  let loaderHidden = false;

  const hideLoader = () => {
    if (loaderHidden) return;
    loaderHidden = true;

    const loaderContent = document.getElementById("loaderContent");
    const loader = document.getElementById("loader");

    if (loaderContent) loaderContent.classList.add("fade-out");
    setTimeout(() => {
      if (loader) loader.classList.add("loaded");
    }, 300);
  };

  imgLoad.on('done', instance => {

    hideLoader();

    gsap.set(".animate-headline", {y: 50, opacity: 0});
    ScrollTrigger.batch(".animate-headline", {
      interval: 0.1,
      batchMax: 4,
      duration: 6,
      onEnter: batch => gsap.to(batch, {
        opacity: 1, 
        y: 0,
        ease: 'sine',
        stagger: {each: 0.15, grid: [1, 4]}, 
        overwrite: true
      }),
      onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
      onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
      onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
    });

  });

  // Fallback: never keep users stuck behind loader
  imgLoad.on('fail', () => hideLoader());
  setTimeout(() => hideLoader(), 5000);
  // --------------------------------------------- //
  // Loader & Loading Animation End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Bootstrap Scroll Spy Plugin Settings Start
  // --------------------------------------------- //
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#menu',
    smoothScroll: true,
    rootMargin: '0px 0px -40%',
  });
  // --------------------------------------------- //
  // Bootstrap Scroll Spy Plugin Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Lenis Scroll Plugin Start
  // --------------------------------------------- //
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  // --------------------------------------------- //
  // Lenis Scroll Plugin End
  // --------------------------------------------- //

  // ------------------------------------------------------------------------------ //
  // Parallax (apply parallax effect to any element with a data-speed attribute) Start
  // ------------------------------------------------------------------------------ //
  gsap.to("[data-speed]", {
    y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: 0
    }
  });
  // --------------------------------------------- //
  // Parallax End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Scroll Animations Start
  // --------------------------------------------- //
  // Animation In Up
  const animateInUp = document.querySelectorAll(".animate-in-up");
  animateInUp.forEach((element) => {
    gsap.fromTo(element, {
      opacity: 0,
      y: 50,
      ease: 'sine',
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: element,
        toggleActions: 'play none none reverse',
      }
    });
  });

  // Animation Rotation
  const animateRotation = document.querySelectorAll(".animate-rotation");
  animateRotation.forEach((section) => {
    var value = $(section).data("value");
    gsap.fromTo(section, {
      ease: 'sine',
      rotate: 0,
    }, {
      rotate: value,
      scrollTrigger: {
        trigger: section,
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });
  });

  // Animation Cards Stack
  // Grid 2x
  gsap.set(".animate-card-2", {y: 100, opacity: 0});
  ScrollTrigger.batch(".animate-card-2", {
    interval: 0.1,
    batchMax: 2,
    duration: 6,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 2]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
  });

  // Grid 3x
  gsap.set(".animate-card-3", {y: 50, opacity: 0});
  ScrollTrigger.batch(".animate-card-3", {
    interval: 0.1,
    batchMax: 3,
    duration: 3,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 3]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });

  // Grid 5x
  gsap.set(".animate-card-5", {y: 50, opacity: 0});
  ScrollTrigger.batch(".animate-card-5", {
    interval: 0.1,
    batchMax: 5,
    delay: 1000,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 5]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });

  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-2", {y: 0, opacity: 1}));
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-3", {y: 0, opacity: 1}));
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-5", {y: 0, opacity: 1}));
  // --------------------------------------------- //
  // Scroll Animations End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Smooth Scrolling Start
  // --------------------------------------------- //
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
  // --------------------------------------------- //
  // Smooth Scrolling End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Swiper Slider Start
  // --------------------------------------------- //
  const toolsSlider = document.querySelector("tools-slider");
  const testimonialsSlider = document.querySelector("testimonials-slider");

  if (!toolsSlider) {
    const swiper = new Swiper('.swiper-tools', {
      spaceBetween: 20,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
      breakpoints: {
        1600: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2,
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
  };

  if (!toolsSlider) {
    const swiper = new Swiper('.swiper-testimonials', {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: true,
      speed: 1000,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };
  // --------------------------------------------- //
  // Swiper Slider Start
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function() {
    var th = $(this);
    var submitBtn = th.find('button[type="submit"]');
    var btnCaption = submitBtn.find('.btn-caption');
    var btnIcon = submitBtn.find('i');
    var defaultCaption = btnCaption.text();
    var minLoaderMs = 2200;
    var startedAt = Date.now();

    var name = th.find('input[name="Name"]').val() || '';
    var company = th.find('input[name="Company"]').val() || '';
    var email = th.find('input[name="E-mail"]').val() || '';
    var phone = th.find('input[name="Phone"]').val() || '';
    var message = th.find('textarea[name="Message"]').val() || '';

    var subject = encodeURIComponent('Portfolio Contact Message - ' + name);
    var body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Company: ' + company + '\n' +
      'Email: ' + email + '\n' +
      'Phone: ' + phone + '\n\n' +
      'Message:\n' + message
    );

    var setLoading = function (isLoading) {
      submitBtn.prop('disabled', isLoading);
      submitBtn.toggleClass('is-sending', isLoading);
      btnCaption.text(isLoading ? 'Sending...' : defaultCaption);
      btnIcon.attr('class', isLoading ? 'ph-bold ph-spinner-gap' : 'ph-bold ph-paper-plane-tilt');
    };

    var waitMinLoader = function (next) {
      var elapsed = Date.now() - startedAt;
      var delay = Math.max(0, minLoaderMs - elapsed);
      setTimeout(next, delay);
    };

    var showSuccess = function () {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.form__reply').addClass('is-visible');
      setTimeout(function() {
        $('.contact').find('.form__reply').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
        th.trigger('reset');
      }, 5000);
    };

    var showError = function (text) {
      alert(text || 'Could not send message right now. Please try again.');
    };

    setLoading(true);

    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize(),
      dataType: 'json',
      timeout: 12000
    }).done(function(response) {
      waitMinLoader(function () {
        setLoading(false);
        if (response && response.ok) {
          showSuccess();
          return;
        }
        showError((response && response.message) ? response.message : 'Could not send message right now.');
      });
    }).fail(function(xhr) {
      waitMinLoader(function () {
        setLoading(false);
        window.location.href = 'mailto:alihamid2609@gmail.com?subject=' + subject + '&body=' + body;
        showSuccess();
      });
    });

    return false;
  });
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Modernizr SVG Fallback Start
  // --------------------------------------------- //
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };
  // --------------------------------------------- //
  // Modernizr SVG Fallback End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Chrome Smooth Scroll Start
  // --------------------------------------------- //
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };
  // --------------------------------------------- //
  // Chrome Smooth Scroll End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Images Moving Ban Start
  // --------------------------------------------- //
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });
  // --------------------------------------------- //
  // Images Moving Ban End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Detecting Mobile/Desktop Start
  // --------------------------------------------- //
  var isMobile = false;
  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('html').addClass('touch');
    isMobile = true;
  }
  else {
    $('html').addClass('no-touch');
    isMobile = false;
  }
  //IE, Edge
  var isIE = /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d+/.test(navigator.userAgent);
  // --------------------------------------------- //
  // Detecting Mobile/Desktop End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // PhotoSwipe Gallery Images Replace Start
  // --------------------------------------------- //
  $('.gallery__link').each(function(){
    $(this)
    .append('<div class="picture"></div>')
    .children('.picture').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
  });
  // --------------------------------------------- //
  // PhotoSwipe Gallery Images Replace End
  // --------------------------------------------- //

});

// --------------------------------------------- //
// Color Switch Start
// --------------------------------------------- //
const themeBtn = document.querySelector('.color-switcher');

function getCurrentTheme(){
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  localStorage.getItem('template.theme') ? theme = localStorage.getItem('template.theme') : null;
  return theme;
}

function loadTheme(theme){
  const root = document.querySelector(':root');
  if(theme === "light"){
    themeBtn.innerHTML = `<em></em><i class="ph-bold ph-moon-stars"></i>`;
  } else {
    themeBtn.innerHTML = `<em></em><i class="ph-bold ph-sun"></i>`;
  }
  root.setAttribute('color-scheme', `${theme}`);
};

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  if(theme === 'dark'){
    theme = 'light';
  } else {
    theme = 'dark';
  }
  localStorage.setItem('template.theme', `${theme}`);
  loadTheme(theme);
});

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
});
// --------------------------------------------- //
// Color Switch End
// --------------------------------------------- //






// --------------------------------------------- //
// Let's Talk Fallback Start
// --------------------------------------------- //
window.addEventListener('DOMContentLoaded', () => {
  const talkBtn = document.getElementById('notify-trigger');
  if (!talkBtn) return;

  if (!talkBtn.getAttribute('href')) {
    talkBtn.setAttribute('href', 'mailto:alihamid2609@gmail.com?subject=Portfolio%20Inquiry');
  }

  talkBtn.addEventListener('click', (event) => {
    const href = talkBtn.getAttribute('href') || '';
    if (!href.startsWith('mailto:')) return;
    event.preventDefault();
    window.location.href = href;
  });
});
// --------------------------------------------- //
// Let's Talk Fallback End
// --------------------------------------------- //




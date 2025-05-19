import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const mobileNavButton = document.getElementById("mobileNavButton");
const mobileNav = document.getElementById("mobileNav");
const navContainer = document.querySelector(".navContainer");
const headerSwiper = document.querySelector(".headerSwiper");
const blog = document.getElementById("blog");


//! loading
console.log("✅ index.js loaded");

window.addEventListener("load", () => {
  console.log("✅ window loaded");

  const loader = document.querySelector(".loadingContainer");
  console.log("⏳ loader found:", loader);

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden");
      console.log("✅ loader hidden");
    }, 2000);
  } else {
    console.error("❌ loader not found");
  }
});

//! open navbar
mobileNavButton.addEventListener("click", openMobileNav)
function openMobileNav() {
  mobileNav.classList.toggle("active")
  navContainer.classList.toggle("active")
}

//! blog siwper
const categoriesSwiper = new Swiper(blog, {
  grabCursor: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    680: {
      slidesPerView: 2
    },
    // when window width is >= 640px
    840: {
      slidesPerView: 3
    }
  },
});

//! header swiper
var menu = ['01', '02', '03']
var header = new Swiper(headerSwiper, {
  grabCursor: true,
  slidesPerView: 1,
  effect: 'fade',
  speed: 700,
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
    },
  },
  autoplay: {
    delay: 5000,
  },

})


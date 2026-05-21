// fleet page js starts here

$(document).on("click", ".mobile_menu_btn", function () {
  $("nav").addClass("active");
});
$(document).on("click", "nav ul li a", function () {
  $("nav").removeClass("active");
});
$(document).on("click", ".mobile_menu_close_btn", function () {
  $("nav").removeClass("active");
});

// fleet page js ends here

// home page js starts here

// var swiper1 = new Swiper(".clientele_slider", {
//   slidesPerView: 6,
//   spaceBetween: 5,
//   loop: true,
//   autoplay: {
//     delay: 3000,
//   },
//   navigation: {
//     prevEl: ".clientele-slider-prev",
//     nextEl: ".clientele-slider-next",
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 5,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 5,
//     },
//     // when window width is >= 640px
//     900: {
//       slidesPerView: 4,
//       spaceBetween: 5,
//     },
//     1100: {
//       slidesPerView: 6,
//       spaceBetween: 5,
//     },
//   },
// });

//our story slider

// var swiper1 = new Swiper(".our_story_slider_swiper", {
//   slidesPerView: 2,
//   spaceBetween: 0,
//   loop: false,
//   // autoplay: {
//   //   delay: 3000,
//   // },
//   navigation: {
//     prevEl: ".ourstory-slider-prev",
//     nextEl: ".ourstory-slider-next",
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     // when window width is >= 640px
//     900: {
//       slidesPerView: 2,
//       spaceBetween: 0,
//     },
//     1100: {
//       slidesPerView: 2,
//       spaceBetween: 0,
//     },
//   },
// });

// partner slider

// var swiper1 = new Swiper(".partner_slider_swiper", {
//   slidesPerView: 7,
//   spaceBetween: 0,
//   loop: false,
//   autoplay: {
//     delay: 3000,
//   },
//   // navigation: {
//   //   prevEl: ".ourstory-slider-prev",
//   //   nextEl: ".ourstory-slider-next",
//   // },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 0,
//     },
//     // when window width is >= 640px
//     900: {
//       slidesPerView: 7,
//       spaceBetween: 0,
//     },
//     1100: {
//       slidesPerView: 7,
//       spaceBetween: 0,
//     },
//   },
// });

// happy clients slider

// var swiper1 = new Swiper(".happy_client_swiper", {
//   slidesPerView: 2,
//   spaceBetween: 20,
//   loop: false,
//   autoplay: {
//     delay: 3000,
//   },
//   navigation: {
//     prevEl: ".client-slider-prev",
//     nextEl: ".client-slider-next",
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     // when window width is >= 640px
//     900: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     1100: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//   },
// });

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".scroll_top_btn").show();
  } else {
    $(".scroll_top_btn").hide();
  }
});

$(".scroll_top_btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// $(window).scroll(function () {
//     if ($(window).scrollTop() > 200) {
//         $(".scroll_top_btn").show();

//     }
//     else {
//         $(".scroll_top_btn").hide();
//     }
// });

// $(".scroll_top_btn").click(function () {
//     $("html, body").animate({ scrollTop: 0 }, "slow");
// });

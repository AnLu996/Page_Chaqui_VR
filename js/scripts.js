/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


$(".chasqui-carousel").owlCarousel({
  loop: false,     // evita bucle infinito
  margin: 5,       // 🔑 igual que en CSS
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 4 }
  }
});

$(document).ready(function () {
  $(".chasqui-carousel .chasqui-item").click(function () {
    $(".chasqui-carousel .chasqui-item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});


"use strict";

let next = document.querySelector(".unique-next");
let prev = document.querySelector(".unique-prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".unique-item");
  document.querySelector(".unique-slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".unique-item");
  document.querySelector(".unique-slide").prepend(items[items.length - 1]);
});





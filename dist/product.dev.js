"use strict";

var activeImage = document.querySelector(".product-image .active");
var productImages = document.querySelectorAll(".image-list img ");

function changeImage(e) {
  activeImage.src = e.target.src;
  e.target.classList.add("active-img");
}

productImages.forEach(function (image) {
  return image.addEventListener("click", changeImage);
});

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var dot = document.getElementsByClassName("dot");

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");

    if (i == 3) {
      dots[i].style.display = "block";
      dots[i - 3].style.display = "none";
    }
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace("active-dot", "");
  }

  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-opacity-off";
  dot[slideIndex - 1].className += " active-dot";
}
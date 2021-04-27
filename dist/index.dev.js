"use strict";

var cart_item = localStorage.getItem('cart_item');
var whislist = localStorage.getItem('whishlist');
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage["cart_item"] === null) {
    cart_item = 0;
    document.getElementById('car-item').innerHTML = cart_item;
    localStorage.setItem('cart_item', JSON.stringify(cart_item));
  } else {
    document.getElementById('car-item').innerHTML = cart_item;
  }

  if (localStorage["whishlist"] === null) {
    cart_item = 0;
    document.getElementById('whish-item').innerHTML = whislist;
    localStorage.setItem('whishlist', whislist);
  } else {
    document.getElementById('whish-item').innerHTML = whislist;
  }
}, false);

function addcart() {
  cart_item++;
  document.getElementById('car-item').innerHTML = cart_item;
  localStorage.setItem('cart_item', JSON.stringify(cart_item));
}

function addwhishlist() {
  whislist++;
  document.getElementById('whish-item').innerHTML = whislist;
  localStorage.setItem('whishlist', whislist);
}

var slideIndex = 1;
window.addEventListener("load", function () {
  showSlides(slideIndex);
});

function plusSlides(n) {
  if (n < 0) {
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("product_item");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    if (window.matchMedia("(max-width: 900px)").matches) {
      slides[i].style.display = "none";
    } else {
      slides[slideIndex - 1].style.display = "block";
    }
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var exampleModal = document.getElementById('form-input');
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget; // Extract info from data-bs-* attributes
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.

  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyInput = exampleModal.querySelector('.modal-body input');
});
var togglePassword = document.querySelector('#togglePassword');
var password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type); // toggle the eye slash icon

  this.classList.toggle('fa-eye-slash');
});
;
var passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', resetCustomValidity());

function resetCustomValidity() {
  passwordInput.setCustomValidity('');
} // A production site would use more stringent password testing. 


function validatePassword() {
  var message = '';

  if (!/.{6,}/.test(passwordInput.value)) {
    message = 'At least eight characters. ';
  }

  if (!/.*[A-Z].*/.test(passwordInput.value)) {
    message += 'At least one uppercase letter. ';
  }

  if (!/.*[!@#$%^&*].*/.test(passwordInput.value)) {
    message += 'At least one special characters.';
  }

  if (!/.*[0-9].*/.test(passwordInput.value)) {
    message += 'At least one number.';
  }

  passwordInput.setCustomValidity(message);
}

var form = document.querySelector('form');
var signinButton = document.querySelector('button#sign-in');

function handleFormSubmission() {
  validatePassword();
  form.reportValidity();

  if (form.checkValidity() === false) {} else {
    // On a production site do form submission.
    alert('Logging in!');
    signinButton.disabled = 'true';
  }
}
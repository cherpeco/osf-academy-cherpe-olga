"use strict";

var exampleModal = document.getElementById('form-input');
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
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

var cart_item = localStorage.getItem('cart_item');
var whishlist = localStorage.getItem('whishlist');
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage["cart_item"] == null) {
    cart_item = 0;
    document.getElementById('car-item').append(cart_item);
    localStorage.setItem('cart_item', JSON.stringify(cart_item));
  } else {
    document.getElementById('car-item').append(cart_item);
  }

  if (localStorage["whishlist"] == null) {
    whislist = 0;
    document.getElementById('whish-item').append(whishlist);
    localStorage.setItem('whishlist', whishlist);
  } else {
    document.getElementById('whish-item').append(whishlist);
  }
}, false);

function addcart() {
  cart_item++;
  document.getElementById('car-item').innerHTML = cart_item;
  localStorage.setItem('cart_item', JSON.stringify(cart_item));
}

function addwhishlist() {
  whishlist++;
  document.getElementById('whish-item').innerHTML = whishlist;
  localStorage.setItem('whishlist', JSON.stringify(whishlist));
}

var quantity = document.getElementById('quantity');
var val = parseInt(quantity.value, 10);

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

function addCartProd() {
  cart_item += parseInt(quantity.value);
  document.getElementById('car-item').innerHTML = cart_item;
  localStorage.setItem('cart_item', JSON.stringify(cart_item));
}

function increment() {
  document.getElementById('quantity').stepUp();
}

function decrement() {
  document.getElementById('quantity').stepDown();
}
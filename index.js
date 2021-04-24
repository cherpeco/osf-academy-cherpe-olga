var cart_item =parseInt(document.getElementById("car-item").textContent, 10);
var whislist = parseInt(document.getElementById("whish-item").textContent, 10);
function addcart () {
cart_item++;
 document.getElementById('car-item').innerHTML= cart_item;
}

function addwhishlist(){
  whislist++;
  document.getElementById('whish-item').innerHTML= whislist;

}


var slideIndex = 1;
window.addEventListener("load",function() {
 
  showSlides(slideIndex);
 
})
function plusSlides(n){

  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("product_item");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    if (window.matchMedia("(max-width: 900px)").matches) {
      slides[i].style.display = "none";
    } else {
      slides[slideIndex-1].style.display = "block";
    }
   
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function currentSlide(n){
  showSlides(slideIndex = n);
}







function openForm() {
  document.getElementById("form-input").style.display = "block";
}
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');

togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
if (passwordInput.type === 'password') {
  passwordInput.type = 'text';
  togglePasswordButton.textContent = 'Hide password';
  togglePasswordButton.setAttribute('aria-label',
    'Hide password.');
} else {
  passwordInput.type = 'password';
  togglePasswordButton.textContent = 'Show password';
  togglePasswordButton.setAttribute('aria-label',
    'Show password as plain text. ' +
    'Warning: this will display your password on the screen.');
}
}

passwordInput.addEventListener('input', resetCustomValidity); 
function resetCustomValidity() {
passwordInput.setCustomValidity('');
}

// A production site would use more stringent password testing. 
function validatePassword() {
let message= '';
if (!/.{8,}/.test(passwordInput.value)) {
  message = 'At least eight characters. ';
}
if (!/.*[A-Z].*/.test(passwordInput.value)) {
  message += 'At least one uppercase letter. ';
}
if (!/.*[a-z].*/.test(passwordInput.value)) {
  message += 'At least one lowercase letter.';
}
passwordInput.setCustomValidity(message);
}

const form = document.querySelector('form');
const signinButton = document.querySelector('button#sign-in');

form.addEventListener('submit', handleFormSubmission);                       

function handleFormSubmission(event) {
event.preventDefault();
validatePassword();
form.reportValidity();
if (form.checkValidity() === false) {
} else {
  // On a production site do form submission.
  alert('Logging in!')
  signinButton.disabled = 'true';
}
}


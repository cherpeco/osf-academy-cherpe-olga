var exampleModal = document.getElementById('form-input')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')
})


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

; 
const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', resetCustomValidity()); 
function resetCustomValidity() {
  passwordInput.setCustomValidity('');
}


// A production site would use more stringent password testing. 
function validatePassword() {
let message= '';
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

const form = document.querySelector('form');
const signinButton = document.querySelector('button#sign-in');
                  

function handleFormSubmission() {
validatePassword();
form.reportValidity();
if (form.checkValidity() === false) {
} else {
  // On a production site do form submission.
  alert('Logging in!')
  signinButton.disabled = 'true';
}
}


function ReadMore() {
  var threedots = document.getElementById("threedots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (threedots.style.display === "none") {
    threedots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    threedots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}


let cart_item = localStorage.getItem('cart_item');
var whislist =  localStorage.getItem('whishlist');
let quantity_input = document.getElementById('quantity').valueAsNumber;
document.addEventListener('DOMContentLoaded', function() {
  if(localStorage["cart_item"] == null)
  {
    cart_item = 0;
    document.getElementById('car-item').innerHTML= cart_item;
    localStorage.setItem('cart_item', JSON.stringify( cart_item));
  
  }
  else{
    document.getElementById('car-item').innerHTML= cart_item;
  
  }
  if(localStorage["whishlist"] == null)
  {
   whislist = 0;
    document.getElementById('whish-item').innerHTML= whislist;
    localStorage.setItem('whishlist', whislist)
  
  }
  else{
    document.getElementById('whish-item').innerHTML= whislist;
  
  }
}, false);



function addcart () {
cart_item++;
document.getElementById('car-item').innerHTML= cart_item;
localStorage.setItem('cart_item', JSON.stringify( cart_item));
}


function addwhishlist(){
  whislist++;
  document.getElementById('whish-item').innerHTML= whislist;
  localStorage.setItem('whishlist', whislist)
}


function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : evt.keyCode;
         
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
         
          

         return true;
      }
  
function addCartProd(){
   cart_item = +cart_item + +quantity.value;
    document.getElementById('car-item').innerHTML= cart_item;
   localStorage.setItem('cart_item',  cart_item);
        
  }
function increment() {
  document.getElementById('quantity').stepUp();
}
function decrement() {
  document.getElementById('quantity').stepDown();
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}
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



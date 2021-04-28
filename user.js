


var cart_item = localStorage.getItem('cart_item');
var whislist =  localStorage.getItem('whishlist');

document.addEventListener('DOMContentLoaded', function() {
  if(localStorage["cart_item"]== null)
  {
    cart_item = 0;
    document.getElementById('car-item').append(cart_item);
    localStorage.setItem('cart_item', JSON.stringify( cart_item));
  
  }
  else{
    document.getElementById('car-item').append(cart_item);
  
  }
  if(localStorage["whishlist"]== null)
  {
    whislist = 0;
    document.getElementById('whish-item').append(whislist);
    localStorage.setItem('whishlist', whislist)
  
  }
  else{
    document.getElementById('whish-item').append(whislist);
  
  }
}, false);



function addcart () {
cart_item++;
document.getElementById('car-item').innerHTML= cart_item;
localStorage.setItem('cart_item', JSON.stringify( cart_item))
}

function addwhishlist(){
  whislist++;
  document.getElementById('whish-item').innerHTML= whislist;
  localStorage.setItem('whishlist', JSON.stringify( whislist))
}


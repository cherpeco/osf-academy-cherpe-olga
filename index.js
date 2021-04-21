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


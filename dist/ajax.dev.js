"use strict";

$(document).ready(function () {
  $(document).on('click', '#load-more', function (e) {
    $.ajax({
      type: 'GET',
      url: './images.json',
      dataType: 'json',
      success: function success(data) {
        if (window.matchMedia("(max-width: 900px)").matches) {
          var newdata = "";
          newdata += " <div class='col-12 col-md-3 product_item'  style='display:none' ><img src='" + data.product[0].src + " '/> " + "<br>" + "<p>" + data.product[0].name + " <br>" + data.product[0].price + "</p> </div>" + "<div class='col-12 col-md-3 product_item' style='display:none'><img src='" + data.product[1].src + " '/> " + "<br>" + "<p>" + data.product[1].name + " <br>" + data.product[1].price + "</p> </div>";
        } else {
          var newdata = "";
          newdata += "<div class='col-12 col-md-3 product_item'><img src='" + data.product[0].src + " '/> " + "<br>" + "<p>" + data.product[0].name + " <br>" + data.product[0].price + "</p> </div>" + "<div class='col-12 col-md-3 product_item'><img src='" + data.product[1].src + " '/> " + "<br>" + "<p>" + data.product[1].name + " <br>" + data.product[1].price + "</p> </div>" + "<div class='col-12 col-md-3 product_item'><img src='" + data.product[2].src + " '/> " + "<br>" + "<p>" + data.product[2].name + " <br>" + data.product[2].price + "</p> </div>" + "<div class='col-12 col-md-3 product_item'><img src='" + data.product[3].src + " '/> " + "<br>" + "<p>" + data.product[3].name + " <br>" + data.product[3].price + "</p> </div> ";
        }

        $('#product').append(newdata);
      },
      error: function error() {
        console.log('Houston, we have a problem!');
      }
    });
  });
});
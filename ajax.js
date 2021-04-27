$(document).ready(function(){ 
$(document).on('click', '#load-more', function(e){
    $.ajax({
        type: 'GET',
        url: './images.json',
        dataType: 'json',
        success: function(data) {
            if (window.matchMedia("(max-width: 900px)").matches) {
              
                var newdata = "";
                       newdata += " <div class='col-12 col-md-3 product_item'  style='left: 0px'  ><img src='"+ data.product[0].src + " '/> " +"<br>" + "<p>" + data.product[0].name + " <br>" + data.product[0].price + "</p> </div>" + 
                       "<div class='col-12 col-md-3 product_item' style='left:0px' ><img src='"+ data.product[1].src + " '/> " +"<br>" + "<p>" + data.product[1].name + " <br>" + data.product[1].price + "</p> </div>"
            } else{
                       var newdata = "";
                       newdata += "<div class='col-12 col-md-3 product_item'><img src='"+ data.product[0].src + " '/> " +"<br>" + "<p>" + data.product[0].name + " <br>" + data.product[0].price + "</p> </div>" + 
                       "<div class='col-12 col-md-3 product_item'><img src='"+ data.product[1].src + " '/> " +"<br>" + "<p>" + data.product[1].name + " <br>" + data.product[1].price + "</p> </div>" + 
                       "<div class='col-12 col-md-3 product_item'><img src='"+ data.product[2].src + " '/> " +"<br>" + "<p>" + data.product[2].name + " <br>" + data.product[2].price + "</p> </div>" + 
                       "<div class='col-12 col-md-3 product_item'><img src='"+ data.product[3].src + " '/> " +"<br>" + "<p>" + data.product[3].name + " <br>" + data.product[3].price + "</p> </div> " 
            }
            
            $('#product').append(newdata);
        },
        error: function() { 
            console.log('Houston, we have a problem!');
        }
    });

});



$('.prod-feat').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $('.prev-prod-feat'),
    nextArrow: $('.next-prod-feat'),
    responsive: [
        {
          breakpoint: 1200,
          settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 3,
          },
        },
        {
          breakpoint: 900,
          settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          }
        }
    ]
  });

  if (localStorage.getItem('cookieSeen') != 'shown') {
    $('.cookie-banner').delay(10000).fadeIn();
    localStorage.setItem('cookieSee','shown')
  };
  $('.accept').on('click', function() {
    localStorage.setItem('cookieSeen','shown')
    $('.cookie-banner').fadeOut();
  });
  $('.close').click(function() {
    $('.cookie-banner').fadeOut();
  });


$(document).on('click', '#color', function(e){
  $(this).toggleClass('active_dot');
});



});



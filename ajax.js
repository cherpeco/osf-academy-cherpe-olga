$(document).ready(function(){

      
$(document).on('click', '#load-more', function(e){
    $.ajax({
        type: 'GET',
        url: './images.json',
        dataType: 'json',
        success: function(data) {
            var newdata = "";
                       newdata += "<div class='row-item col-12'> <div class='col-3 product_item'><img src='"+ data.product[0].src + " '/> " +"<br>" + "<p>" + data.product[0].name + " <br>" + data.product[0].price + "</p> </div>" + 
                       "<div class='col-3 product_item'><img src='"+ data.product[1].src + " '/> " +"<br>" + "<p>" + data.product[1].name + " <br>" + data.product[1].price + "</p> </div>" + 
                       "<div class='col-3 product_item'><img src='"+ data.product[2].src + " '/> " +"<br>" + "<p>" + data.product[2].name + " <br>" + data.product[2].price + "</p> </div>" + 
                       "<div class='col-3 product_item'><img src='"+ data.product[3].src + " '/> " +"<br>" + "<p>" + data.product[3].name + " <br>" + data.product[3].price + "</p> </div> </div" 
                       
            $('#product').append(newdata);
        },
        error: function() { 
            console.log('Houston, we have a problem!');
        }
    });

});

});
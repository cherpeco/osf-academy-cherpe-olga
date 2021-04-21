$(document).ready(function(){
    $.getJSON("./images.json", function(data){
        console.log("Hello");
        console.log("DATA"+ data.description); // Prints: Harry
    }).fail(function(){
        console.log("An error has occurred.");
    });
  });
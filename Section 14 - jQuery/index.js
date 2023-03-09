// single property is getting something
// two properties are setting something

// $("h1").css("color", "red");
 
$("h1").addClass("big-title margin-50");

// $("h1").text("Bye"); // similar to innerHTML method

$("button").css("color", "blue");

$("img").attr("src");

$("a").attr("href", "https://www.naver.com");



 $("h1").click(function (){ 
    $("h1").css("color", "yellow");
     
 });

//  $("button").click(function (){ 
//     $("h1").css("color", "purple");
     
//  });

// Same function above
// jQeury method

// JS method
 for(var i = 0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
 }


 $("button").select(function () { 
    $("h1").css("color", "purple");
 });



 $("input").keypress(function (event) { 
   $("h1").text(event.key);
 });


 $("input").keypress(function (event) { 
   $("h1").text(event.key);
 });



 $("h1").on("click", function () {
   $("h1").css("color", "purple");
 });

// jQuery before and after method
$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");


// Custom animation

// $("button").on("click", function () {
//    $("h1").show();
//  });


// $("h1").on("click", function () {
//    $("h1").hide();
//  });




// // fadeIn
// $("button").on("click", function () {
//    $("h1").fadeIn();
//  });


// // fadeOut
//  $("h1").on("click", function () {
//    $("h1").fadeOut();
//  });



// slideDown
// $("button").on("click", function () {
//    $("h1").slideDown();
//  });


// slideUp
//  $("h1").on("click", function () {
//    $("h1").slideUp();
//  });



// animate
// $("button").on("click", function () {
//    $("h1").animate({opacity: 0.5});
//  });


 // animate slideUp, slideDown animate
 $("button").on("click", function () {
   $("h1").slideUp().slideDown().animate({opacity: 0.5});
 });


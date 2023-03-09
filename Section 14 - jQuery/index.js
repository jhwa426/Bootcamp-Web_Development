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


// JS method
 for(var i = 0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
 }


// Same function above
// jQeury method
 $("button").select(function () { 
    $("h1").css("color", "purple");
 });
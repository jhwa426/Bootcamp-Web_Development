'use strict';

// image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png 
var randomImageSource1 = "/Section 12 -  Boss Level Challenge 1 - The Dicee Game/images/" + randomDiceImage1; // /images/dice1.png - /images/dice6.png
var image1 = document.querySelectorAll("img")[0];

// image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png 
var randomImageSource2 = "/Section 12 -  Boss Level Challenge 1 - The Dicee Game/images/" + randomDiceImage2; // /images/dice1.png - /images/dice6.png
var image2 = document.querySelectorAll("img")[1];

// load image
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Players draw🚩"
} else {
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!!";
}

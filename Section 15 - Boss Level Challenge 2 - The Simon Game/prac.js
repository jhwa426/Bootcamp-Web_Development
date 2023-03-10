var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];










function nextSequence() {
    var randomNumber = Math.floor(Math.random () * 4) // Generator random number 0 - 3
     
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    console.log(gamePattern);
    // step 3
}
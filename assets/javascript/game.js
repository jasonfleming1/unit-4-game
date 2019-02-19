// requirements
// 1. a random number is presented to the user a "target number"
// 2. the randomNumber range is from 19-120
// 3. there are four crystals for the user to click
// 4. each crystal is assigned a random value
// 5. the randomValue range is 1-12
// 6. each clicked value is added to create a user's score
// 7. if the user score equals the target number, then increment a win counter and reset the game variables
// 8. if the user score is less than the target number, additional clicks are allowed
// 9. if the user score is greaterthan the target number, increment the loss counter and reset the game variables

// Here we define a few gloable variables
// =========================================

var wins = 0;
var losses = 0;
var crystalCount = [];
var userScore = 0;
var goldValue = 0;
var redValue = 0;
var blueValue = 0;
var whiteValue = 0;
var targetNumber = 0;

console.log(wins)
console.log(losses)
console.log(userScore)
console.log("gold " + goldValue)
console.log("red " + redValue)
console.log("blue " + blueValue)
console.log("whiteValue " + whiteValue)

// Here we are staring the game when the document has loaded
// ========================================================================================

$(document).ready(function() {

  // Here we'll create a newGame reset function after wins and losses
  // ========================================================================================

    function newGame () {
    userScore = 0;
    console.log(userScore);
 
  // Here we'll generate a target number for the current game (had help from google here)
  // ========================================================================================

    var min=19;
    var max=120;
    targetNumber = Math.floor(Math.random() * (+max - +min)) + +min;
    console.log("Random number generated is  " + targetNumber);
    $( "#targetNumber" ).html(targetNumber);

// Here we'll generate a random Crystal Value for the current game
// ========================================================================================
    
    var gMin=1;
    var gMax=12;
    goldValue = Math.floor(Math.random() * (+gMax - +gMin)) + +gMin;
    console.log("Gold click value is  " + goldValue);

    var rMin=1;
    var rMax=12;
    redValue = Math.floor(Math.random() * (+rMax - +rMin)) + +rMin;
    console.log("Red click value is  " + redValue);

    var bMin=1;
    var bMax=12;
    blueValue = Math.floor(Math.random() * (+bMax - +bMin)) + +bMin;
    console.log("Blue click value is  " + blueValue);

    var wMin=1;
    var wMax=12;
    whiteValue = Math.floor(Math.random() * (+wMax - +wMin)) + +wMin;
    console.log("White click value is  " + whiteValue);

// Here we'll use the crystal clicks to accumulate a user's score
// ========================================================================================

  $("#gold").click(function () {
    console.log("white click score " + (userScore + goldValue))
  });

  $("#red").click(function () {
    console.log("Red click score " + (userScore + redValue))
  });

  $("#blue").click(function () {
    console.log("blue click score " + (userScore + blueValue))
  });

  $("#white").click(function () {
    console.log("white click score " + (userScore + whiteValue))
  });

  console.log(wins)
  console.log(losses)
  console.log(userScore)
  console.log("gold " + goldValue)
  console.log("red " + redValue)
  console.log("blue " + blueValue)
  console.log("whiteValue " + whiteValue)

}
// call reset
// ========================================================================================
  newGame();
});


// 0. set a game default value on load & a reset function for a new game
// 1. a random number is presented to the user a "target number"
// 2. the randomNumber range is from 19-120
// 3. there are four crystals for the user to click
// 4. each crystal is assigned a random value
// 5. the randomValue range is 1-12
// 6. each clicked value is added to create a user's score (contain win scenario in each click)
// 7. if the user score equals the target number, then increment a win counter and load new game variables
// 8. if the user score is less than the target number, additional clicks are allowed
// 9. if the user score is greaterthan the target number, increment the loss counter and load new game variables

// Here we are staring the game when the document has loaded
// ==========================================================================================

$(document).ready(function() {

  // Here we set the default game values after the doc loads
  // ========================================================================================
      // set initial game variables ==>
      var wins = 0;
      var losses = 0;
      var userScore = 0;

      // display initial game variables in game space ==> 
      $( "#countWins" ).text(wins);
      $( "#countLosses" ).text(losses);
      $( "#userScore" ).text(userScore);

      // create target number and display on game scoreboard ==> 
      var min=19;  
      var max=120;  
      var targetNumber = Math.floor(Math.random() * (+max - +min)) + +min; //googleFoo, controlled random integer
      $( "#targetNumber" ).text(targetNumber); 

      // assign a random value to each crystal and not display it ==> 
      var goldValue = Math.floor(Math.random() * 12 + 1); //using 12 so I can incude 12 as a possible value
      var redValue = Math.floor(Math.random() * 12 + 1);
      var blueValue = Math.floor(Math.random() * 12 + 1);
      var whiteValue = Math.floor(Math.random() * 12 + 1);

      // qc our initial game values ==>
      console.log("The Target Number is  " + targetNumber);
      console.log("The Crystal Values (gold, red, blue, white) is  " + goldValue + ", " + redValue + ", " + blueValue +", " + whiteValue);

  // Here we'll create functions to be called during game play
  // ========================================================================================
      
      // reset the game target, score, and click values ==>

      function reset() {
        min=19;  
        max=120;  
        targetNumber = Math.floor(Math.random() * (+max - +min)) + +min; //create new targetNumber
        $( "#targetNumber" ).text(targetNumber); //display new targetNumber
        goldValue = Math.floor(Math.random() * 12 + 1); //establish new crystal values
        redValue = Math.floor(Math.random() * 12 + 1);
        blueValue = Math.floor(Math.random() * 12 + 1);
        whiteValue = Math.floor(Math.random() * 12 + 1);    
        userScore = 0;
        $ ( "#userScore" ).text(userScore); //display reset userScore
        console.log(goldValue + " " + redValue + " " + blueValue + " " + whiteValue)
        console.log("new user score should be zero but " + userScore)
        }

        // qa the mystery crystal values ==>
        console.log("Gold click will be " + goldValue)
        console.log("Red click will be " + redValue)
        console.log("Blue click will be " + blueValue)
        console.log("White click will be " + whiteValue)

    // winner event that resets the game ==>

    function winner() {
      wins++;
      $( "#countWins" ).text(wins);
      reset ()
    }

    // loser event that resets the game ==>

    function loser() {
      losses++;
      $( "#countLosses" ).text(losses);
      reset ()
    }

  // Here we'll set the game space for click events
  // ========================================================================================

    // when the user clicks the GOLD crystal ==>

    $("#gold").click(function () {
      userScore = (goldValue + userScore);  //add the gold value to the user's score
      $( "#userScore" ).text(userScore);    //display post-click userScore
      if (userScore == targetNumber) {     
        winner ()
      }
      else if (userScore > targetNumber) {
        loser ()
      }
    });

    // when the user clicks the RED crystal ==>

    $("#red").click(function () {
      userScore = (redValue + userScore);
      $( "#userScore" ).text(userScore);
      if (userScore == targetNumber) {     
        winner ()
      }
      else if (userScore > targetNumber) {
        loser ()
      }
    });

    // when the user clicks the BLUEcrystal ==>

    $("#blue").click(function () {
      userScore = (blueValue + userScore);
      $ ( "#userScore" ).text(userScore);
      if (userScore == targetNumber) {     
        winner ()
      }
      else if (userScore > targetNumber) {
        loser ()
      }
    });

    // when the user clicks the WHITE crystal ==>

    $("#white").click(function () {
      userScore = (whiteValue + userScore);
      $( "#userScore" ).text(userScore);
      if (userScore == targetNumber) {     
        winner ()
      }
      else if (userScore > targetNumber) {
        loser ()
      }
    });
});


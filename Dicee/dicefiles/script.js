let player1Score;
let player2Score;


document.querySelector("button").onclick = function() {
  roll()
};


function roll() {




  function player1Throw() {

    player1Score = Math.floor(Math.random() * 6) + 1;
    console.log(player1Score);

    if (player1Score == 1) {

      document.querySelector("img").src = "dicefiles/images/dice1.png";

    } else if (player1Score == 2) {
      document.querySelector("img").src = "dicefiles/images/dice2.png";

    } else if (player1Score == 3) {
      document.querySelector("img").src = "dicefiles/images/dice3.png";
    } else if (player1Score == 4) {
      document.querySelector("img").src = "dicefiles/images/dice4.png";
    } else if (player1Score == 5) {
      document.querySelector("img").src = "dicefiles/images/dice5.png";
    } else {
      document.querySelector("img").src = "dicefiles/images/dice6.png";
    }


  };


  function player2Throw() {

    player2Score = Math.floor(Math.random() * 6) + 1;
    console.log(player2Score);

    if (player2Score == 1) {

      document.querySelectorAll("img")[1].src = "dicefiles/images/dice1.png";

    } else if (player2Score == 2) {
      document.querySelectorAll("img")[1].src = "dicefiles/images/dice2.png";

    } else if (player2Score == 3) {
      document.querySelectorAll("img")[1].src = "dicefiles/images/dice3.png";
    } else if (player2Score == 4) {
      document.querySelectorAll("img")[1].src = "dicefiles/images/dice4.png";
    } else if (player2Score == 5) {
      document.querySelectorAll("img")[1].src = "dicefiles/images/dice5.png";
    } else {
      document.querySelectorAll("img")[1].src = "dicefiles/images/dice6.png";
    }


  };


  player1Throw();
  player2Throw();



  function winner() {

    if (player1Score > player2Score) {
      document.querySelector("h3").textContent = "Player 1 Wins";

    } else if (player2Score > player1Score) {

      document.querySelector("h3").textContent = "Player 2 Wins";

    } else {
      document.querySelector("h3").textContent = "Draw !";
    }


  };

  winner();
};

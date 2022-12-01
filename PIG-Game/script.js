/*
GAME RULES :
- The game has 2 players , playing in round.
- In each turn, a player rolls 2 dice as many times as he wishes. Sum of each result get added to his ROUND score.
- But, the player looses all his ROUND score when one of them is a 1. . After that it's the next player's turn.
- The player can choose to 'HOLD', which means that his ROUND score gets added to his GLOBAL score.
  After that , it's the next player's turn .
- By default the first player to reach 100 points on GLOBAl score wins the game.
- Players can set Final score other than 100 points, before starting the game or during the game.
*/




var scores, roundScore, activePlayer, gamePlaying;

init();
var lastDice;
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
         // 1.Random number
   var dice1= Math.floor(Math.random()*6)+1;
   var dice2= Math.floor(Math.random()*6)+1;

   // 2. Display the result
   document.getElementById('dice-1').style.display='block';
   document.getElementById('dice-2').style.display='block';
   document.getElementById('dice-1').src='dice-' + dice1 + '.png';
   document.getElementById('dice-2').src='dice-' + dice2 + '.png';

   //3. Update the roundScore if the rolled number was NOT 1
   if(dice1 !==1 & dice2 !==1) {
    //Add score
    roundScore += dice1 + dice2;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
   } else {
       //Next Player
       nextplayer();
    }
   }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying) {
        // Add current Score to Global score
    scores[activePlayer] += roundScore;
        // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector('.final-score').value;
    var winningScore;
    // Undefined , 0, null , or "" are COERCED to false
    // Anything else is COERCED to true

    if(input) {
        winningScore = input;
    } else {
        winningScore=100;
    }
    
     // Check if player won the game
    if(scores[activePlayer]>=winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = "Winner";
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
    //Next Player
    nextplayer();
    } 
    }
});

function nextplayer(){
    //Next Player
    activePlayer ===0 ? activePlayer=1 : activePlayer=0;
    roundScore=0;

    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';

}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying= true;

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';

   document.getElementById('score-0').textContent='0';
   document.getElementById('score-1').textContent='0';
   document.getElementById('current-0').textContent='0';
   document.getElementById('current-1').textContent='0';

   document.getElementById('name-0').textContent = "Player 1";
   document.getElementById('name-1').textContent = "Player 2";

   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-1-panel').classList.remove('active');
   document.querySelector('.player-0-panel').classList.add('active');

};

 

// function Rules() {
//     alert(" GAME RULES : 1) The game has 2 players , playing in round.                2) In each turn, a player rolls 2 dice as many times as he wishes. Sum of each result get added to his ROUND score.         3) But, the player looses all his ROUND score when one of them is a 1. After that it's the next player's turn.    4) The player can choose to 'HOLD', which means that his ROUND score gets added to his GLOBAL score. After that , it's the next player's turn .      5) By default the first player to reach 100 points on GLOBAl score wins the game.     6) Players can set Final score other than 100 points, before starting the game or during the game.");
// };

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




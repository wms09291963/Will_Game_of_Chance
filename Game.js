// This code may not be relevant 

// var scores, roundScore, activePlayer, dice, gamePlaying, lastDice;
//init();

// document.querySelector('.btn-roll').addEventListener('click', function(){
//	if (gamePlaying){
//		let dice = Math.floor(Math.random() * 6) + 1;
//		let diceDOM = document.querySelector('.dice');

		// Display result
//		diceDOM.style.display = 'block';
//		diceDOM.src = 'dice-' + dice + '.png';

		// Update round score if rolled num !== 1
//		if (dice === 6 && lastDice === 6){
			// player looses score
//			scores[activePlayer] = 0;
//			document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//			nextPlayer();
//		} else if(dice !== 1){
			// Add score
//			roundScore += dice;
//			document.querySelector('#current-' + activePlayer).textContent = roundScore;
//		} else {
			// Next player
//			nextPlayer();
//		}

//	  lastDice = dice;
//	}
//});

//document.querySelector('.btn-hold').addEventListener('click', function(){
//	if (gamePlaying){
		// Add current score to global score
//		scores[activePlayer] += roundScore;
		// Update UI
//		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		
//		let input = document.querySelector('.final-score').value;
//		let winningScore;
		
//		if(input){
//			winningScore = input;
//		} else {
//			winningScore = 100;
//		}

		// Check if player won the game
	//	if (scores[activePlayer] >= input){
	//		document.querySelector('#name-' + activePlayer).textContent = 'WINNER!...';
	//		document.querySelector('.dice').style.display = 'none';
	//		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
	//		document.	querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	//		gamePlaying = false;
	//	} else {
	//		nextPlayer();
//		}	
//	}
	
//});

//function nextPlayer(){
//	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//	roundScore = 0;

//	document.getElementById('current-0').textContent = '0';
//	document.getElementById('current-1').textContent = '0';

//	document.querySelector('.player-0-panel').classList.toggle('active');
//	document.querySelector('.player-1-panel').classList.toggle('active');
	
//	document.querySelector('.dice').style.display = 'none';
//};

//document.querySelector('.btn-new').addEventListener('click', init);

//function init(){
//	scores = [0, 0];
//	activePlayer = 0;
//	roundScore = 0;
//	gamePlaying = true;

//	document.querySelector('.dice').style.display = 'none';

//	document.getElementById('score-0').textContent = '0';
//	document.getElementById('score-1').textContent = '0';

//	document.getElementById('current-0').textContent = '0';
//	document.getElementById('current-1').textContent = '0';

//	document.getElementById('name-0').textContent = 'Player 1';
//	document.getElementById('name-1').textContent = 'Player 2';

//	document.querySelector('.player-0-panel').classList.remove('winner');
//	document.querySelector('.player-1-panel').classList.remove('winner');
//	document.querySelector('.player-0-panel').classList.remove('active');
//	document.querySelector('.player-1-panel').classList.remove('active');

//	document.querySelector('.player-0-panel').classList.add('active');
//}

var player_House = "Player House";
var player1 = "Player 1";
var player2 = "Player 2";
var player3 = "Player 3";
var player4 = "Player 4";
var Player5 = "Player 5";


// Function to change the player name

    function editNames() {
        player1 = prompt("Change Player1 name");
        player2 = prompt("Change player2 name");
        player3 = prompt("Change Player3 name");
        player4 = prompt("Change Player4 name");
        player5 = prompt("Change Player5 name");
        
  
        document.querySelector("p.Player1").innerHTML = player1;
        document.querySelector("p.Player2").innerHTML = player2;
        document.querySelector("p.Player3").innerHTML = player3;
        document.querySelector("p.Player4").innerHTML = player4;
        document.querySelector("p.Player5").innerHTML = player5;
        
    }
 
 // Function to roll the dice
   
<script>
        var para;
        var rannum;
        function clickevent(){
        rannum = Math.floor(Math.random() * 6) + 1;
        para = document.getElementById("demo");
        para.innerHTML = rannum;
        if(rannum==1){
            document.getElementById("myImg").src = "dice1.png";
        }
        if(rannum==2){
            document.getElementById("myImg").src = "dice2.png";
        }
        if(rannum==3){
            document.getElementById("myImg").src = "dice3.png";
        }
        if(rannum==4){
            document.getElementById("myImg").src = "dice4.png";
        }
        if(rannum==5){
            document.getElementById("myImg").src = "dice5.png";
        }
        if(rannum==6){
            document.getElementById("myImg").src = "dice6.png";
        }
    }
    
    
    </script>
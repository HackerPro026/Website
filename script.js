

function alert2() {
    var encode = document.querySelector("#first-name").value;
    alert(encode);
}
 function startGame1() {
    var turn = 1;
var board = ["1","2","3","4","5","6","7","8","9"];

function move(x, turn, board){
	x= parseInt(x);
	if(turn%2 == 1){
		board[(x-1)] = "X";
		return board;
	}
	if (turn%2 == 0){
		board[x-1] = "O";
		return board;
	}
	return board;
}
function check(turn, board){
	if ((board[0] =="X")&&(board[1] =="X")&&(board[2] =="X")){
		return"win";
	}
	if ((board[3] =="X")&&(board[4] =="X")&&(board[5] =="X")){
		return"win";
	}
	if ((board[6] =="X")&&(board[7] =="X")&&(board[8] =="X")){
		return"win";
	}
	if ((board[0] =="X")&&(board[3] =="X")&&(board[6] =="X")){
		return"win";
	}
	if ((board[1] =="X")&&(board[4] =="X")&&(board[7] =="X")){
		return"win";
	}
	if ((board[2] =="X")&&(board[5] =="X")&&(board[8] =="X")){
		return"win";
	}
	if ((board[0] =="X")&&(board[4] =="X")&&(board[8] =="X")){
		return"win";
	}
	if ((board[2] =="X")&&(board[4] =="X")&&(board[6] =="X")){
		return"win";
		
	}
	if ((board[0] =="O")&&(board[1] =="O")&&(board[2] =="O")){
		return"win";
	}
	if ((board[3] =="O")&&(board[4] =="O")&&(board[5] =="O")){
		return"win";
	}
	if ((board[6] =="O")&&(board[7] =="O")&&(board[8] =="O")){
		return"win";
	}
	if ((board[0] =="O")&&(board[3] =="O")&&(board[6] =="O")){
		return"win";
	}
	if ((board[1] =="O")&&(board[4] =="O")&&(board[7] =="O")){
		return"win";
	}
	if ((board[2] =="O")&&(board[5] =="O")&&(board[8] =="O")){
		return"win";
	}
	if ((board[0] =="O")&&(board[4] =="O")&&(board[8] =="O")){
		return"win";
	}
	if ((board[2] =="O")&&(board[4] =="O")&&(board[6] =="O")){
		return"win";
	}

	if( turn > 9){
		return "draw";
	}
	else{
		return"continue";
	}
}
for(var i = 1; i < 10; i++){ //main loop
	var x = prompt("Tic Tac Toe: \n" + board[0] +" " + board[1] + " " + board[2] +"\n"+ board[3] + " "+ board[4]+ " "+board[5]
+ "\n"+ board[6] + " "+ board[7]+ " "+board[8] + "\n choose a number");
	board = move(x, turn,board);
	var z = check(turn, board);
	if (z == "win"){
		if(turn%2 == 0){
		alert("player O wins");
		i = 9;
		
	}
		if(turn%2 == 1){
		alert("player X wins");
		break;
	}}
	if(z == "draw"){
		alert("It's a tie!!!5");
		break;
	}

	turn++;
	
}




 }
 function startGame2() {
	var rules = {
		"rock" : "scissors",
		"paper" : "rock",
		"scissors" : "paper"
	  };
	  
	  
	  function getPlayerChoice() {
		var playerChoice = prompt("Rock, paper, or scissors \nChoice:");
		 playerChoice =  playerChoice.toLowerCase();
	  
	   if(Object.keys(rules).includes(playerChoice)){
		return playerChoice;
		 
	   }
	   alert("try again!");
	   return getPlayerChoice();
	  
		
	  }
	  
	  function getComputerChoice() {
	  var choices = Object.keys(rules);
	  var len = choices.length;
	  var idx = Math.floor(Math.random() * len);
	  return choices[idx];
	  
	  
	  }
	  
	  function compare(player, computer) {
		if(player == computer){
		  return 'tie';
		}else if(rules[player] == computer){
		return 'win';    
		}else if(rules[computer] == player){
		  return 'lose';
		}
		
	  }
		var score = {
		  wins: 0,
		  losses: 0,
		  ties: 0
	  }; 
	  function game(){
		  var playing = true;
		while(playing == true){
		  var playerC = getPlayerChoice();
		  var computerC = getComputerChoice();
		  var result = compare(playerC, computerC); 
		  alert(result);
		  done = prompt("want to play again?").toLowerCase();
		if(playing == 'yes'){
		 playing = true;
		} else if(playing == 'no'){
		  playing = false;
		  break;
		}
		
	  }
	  if(result == 'win'){
		score.wins++;
	  }else if(result == 'lose'){
		score.losses++;
	  }else if(result == 'tie'){
		score.ties++;
	  } else {
		console.log(Error)
	  }
	   alert("Wins: " + score.wins + "\nLosses: " + score.losses + "\nTies: " + score.ties);
	  console.log("done");
	  }
	  game();
	  
	  
	  
 }
 function startGame3() {
	var msg = prompt("What is your message?");
	var alpha = "abcdefghijklmnopqrstuvwxyz !@#$%^&*()+={}[]:;\"'<>,.?/_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var scramble = "mnopqrstuvwxyzabcdefghijkl_/?.,><'\";:][}{=+)(*&^%$#@! MNOPQRSTUVWXYZABCDEFGHIJKL";
	var encoded = "";
	for(var i = 0; i < (msg.length); i++){
	  var y = msg[i];
	  var x = alpha.indexOf(y);
	  encoded = encoded + scramble[x];
	
	}
	alert(encoded);
 }
 function startGame3() {
	var method = prompt("Put in a operation:");
	var input1 = prompt("First Number:");
	var input2 = prompt("Second Number:");
	input1 = parseFloat(input1);
	input2 = parseFloat(input2);
	
	if(method == "+"){
	  alert(input1 + input2); 
	}else if(method == "-"){
	  alert(input1 - input2);
	}else if(method == "x"){
	  alert(input1 - input2);
	}else if(method == "/"){
	  alert(input1 / input2);
	}else if(method == "÷"){
	  alert(input1 / input2)
	}
 }

 function startGame4() {
	function randomizor() {
		return Math.floor(Math.random() * 100);
	} 
	w = randomizor(); 
	var input = prompt("Guess me number (0 - 100)"); 
	if (input == w) {
		alert("Correct! You bested the computer")
	}else{
		alert("Wrong!")} alert("This was the awnser: " + w);
 }
 
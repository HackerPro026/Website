

function alert2() {
    var encode = document.querySelector("#first-name").value;
    alert(encode);
}
 function startGame() {
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
	var x = prompt(board[0] +" " + board[1] + " " + board[2] +"\n"+ board[3] + " "+ board[4]+ " "+board[5]
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
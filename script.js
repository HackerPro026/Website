

function alert2() {
    var encode = document.querySelector("#first-name").value;
    alert(encode);
    if (encode = ("Game Center")){
    alert('By pressing OK the download will begain');
alert('Are you shure');
alert('Realy Realy shure');
alert('Game loading 1%');
alert('Game loading 30%');
alert('Game loading 60%');
alert('Game loading 80%');
alert('100% Download Complete');
var password = prompt('What Is The Password For Game Center');
if (password == 'MishaISawesome325') {
  var input = prompt(
    'Would you like to play \n Tic Tac Toe, \n Rock Paper Scissors,\n  Random Number Game, \n Calculator or, \n Scrambler \n P.S. Please use upercase'
  );
} else i = 10000;
if (input == 'Scrambler') {
  String.prototype.shuffle = function() {
    var a = this.split(''),
      n = a.length;

    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join('');
  };
  var hello = prompt('what to scramble');
  alert(hello.shuffle());
}
if (input == 'Random Number Game') {
  var input1 = Math.floor(Math.random() * 100);
  var input2 = prompt('Pick a number between 0 and 100');

  if (input1 == input2) {
    alert('You beat the computer');
  } else alert('You loose the answer was ' + input1);
}
var s = prompt('Choose what kind of function you would like to use');
var input1 = prompt('This is a calculator, type one number');
var input2 = prompt('Type Second number');
input1 = parseInt(input1);
input2 = parseInt(input2);
if (s == '*') {
  alert(input1 * input2);
}
if (s == '-') {
  alert(input1 - input2);
}
if (s == '/') {
  alert(input1 / input2);
}
if (s == '+') {
  alert(input1 + input2);
}
if (input == 'Tic Tac Toe') {
  var turn = 1;
  var board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  alert('Pick a number, Be smart');
  function move(x, turn, board) {
    x = parseInt(x);
    if (board[x - 1] != 'X' && board[x - 1] != 'O') {
      if (turn % 2 == 1) {
        board[x - 1] = 'X';
        return board;
      }
      if (turn % 2 === 0) {
        board[x - 1] = 'O';
        return board;
      }
      return board;
    } else {
      alert('not a valid choice');
      i = 10000;
      return 'none';
    }
  }

  function check(turn, board) {
    if (board[0] == 'X' && board[1] == 'X' && board[2] == 'X') {
      return 'win';
    }
    if (board[3] == 'X' && board[4] == 'X' && board[5] == 'X') {
      return 'win';
    }
    if (board[6] == 'X' && board[7] == 'X' && board[8] == 'X') {
      return 'win';
    }
    if (board[0] == 'X' && board[3] == 'X' && board[6] == 'X') {
      return 'win';
    }
    if (board[1] == 'X' && board[4] == 'X' && board[7] == 'X') {
      return 'win';
    }
    if (board[2] == 'X' && board[5] == 'X' && board[8] == 'X') {
      return 'win';
    }
    if (board[0] == 'X' && board[4] == 'X' && board[8] == 'X') {
      return 'win';
    }

    if (board[2] == 'X' && board[4] == 'X' && board[6] == 'X') {
      return 'win';
    }

    if (board[0] == 'O' && board[1] == 'O' && board[2] == 'O') {
      return 'win';
    }
    if (board[3] == 'O' && board[4] == 'O' && board[5] == 'O') {
      return 'win';
    }
    if (board[6] == 'O' && board[7] == 'O' && board[8] == 'O') {
      return 'win';
    }
    if (board[0] == 'O' && board[3] == 'O' && board[6] == 'O') {
      return 'win';
    }
    if (board[1] == 'O' && board[4] == 'O' && board[7] == 'O') {
      return 'win';
    }
    if (board[2] == 'O' && board[5] == 'O' && board[8] == 'O') {
      return 'win';
    }
    if (board[0] == 'O' && board[4] == 'O' && board[8] == 'O') {
      return 'win';
    }
    if (board[2] == 'O' && board[4] == 'O' && board[6] == 'O') {
      return 'win';
    }
    if (turn > 9) {
      return 'draw';
    } else {
      return 'continue';
    }
  }
  for (var i = 1; i < 10; i++) {
    var x = prompt(
      'gameboard:  \n' +
        board[0] +
        ' ' +
        board[1] +
        ' ' +
        board[2] +
        '\n' +
        board[3] +
        ' ' +
        board[4] +
        ' ' +
        board[5] +
        '\n' +
        board[6] +
        ' ' +
        board[7] +
        ' ' +
        board[8]
    );
    board = move(x, turn, board);
    var z = check(turn, board);
    if (z == 'win') {
      if (turn % 2 == 0) {
        alert('player O wins');
      }
      if (turn % 2 == 1) {
        alert('player X wins');
      }
      break;
    }
    if (z == 'draw') {
      alert('the game is a draw');
      break;
    }
    turn++;
  }
}
if (input == 'Rock Paper Scissors') {
  //This is copywrited
  var NameP1 = prompt('What is your name');
  var NameP2 = prompt('What is the computers Name');

  var InputP1 = prompt('Rock \nPaper \nScissors ' + NameP1);
  var InputP2 = Math.floor(Math.random() * 3);

  if (InputP2 == 0) InputP2 = 'Rock';

  if (InputP2 == 1) InputP2 = 'Paper';

  if (InputP2 == 2) InputP2 = 'Scissors';
  //Copywrite ends

  if (InputP1 == 'Rock' || InputP1 == 'rock') {
    if (InputP2 == 'Rock' || InputP2 == 'rock') {
      alert("It's a TIE! " + NameP2 + ' choose ' + InputP2);
    } else if (InputP2 == 'Scissors' || InputP2 == 'scissors') {
      alert(NameP1 + ' Wins!');
    } else if (InputP2 == 'Paper' || InputP2 == 'paper') {
      alert(NameP2 + ' Wins!');
    }
  } else if (InputP1 == 'Paper' || InputP1 == 'paper') {
    if (InputP2 == 'Rock' || InputP2 == 'rock') {
      alert(NameP1 + ' Wins!');
    } else if (InputP2 == 'Scissors' || InputP2 == 'scissors') {
      alert(NameP2 + ' Wins!');
    } else if (InputP2 == 'Paper' || InputP2 == 'paper') {
      alert("It's a TIE! " + NameP2 + ' choose ' + InputP2);
    }
  } else if (InputP1 == 'Scissors' || InputP1 == 'scissors') {
    if (InputP2 == 'Rock' || InputP2 == 'rock') {
      alert(NameP2 + ' Wins!');
    } else if (InputP2 == 'Scissors' || InputP2 == 'scissors') {
      alert("It's a TIE! " + NameP2 + ' choose ' + InputP2);
    } else if (InputP2 == 'Paper' || InputP2 == 'paper') {
      alert(NameP1 + ' Wins!');
    }
  }
} else {
  alert('Retry later');
}

}
}

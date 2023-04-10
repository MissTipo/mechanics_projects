const arra = document.getElementsByClassName("common")
Array.from(arra).forEach(
    element => console.log(element.textContent
    ));
var X_PLAYER_TURN = true;
var O_PLAYER_TURN = false;
var WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
var count = 0
console.log(WINNING_COMBINATIONS)
var X_PLAYERS_COMBINATION = []
var O_PLAYERS_COMBINATION = []
var first = document.getElementById("_1st")
var second = document.getElementsByClassName("_2nd")
var third = document.getElementsByClassName("_3rd")
var fourth = document.getElementsByClassName("_4th")
var fifth = document.getElementsByClassName("_5th")
var sixth = document.getElementsByClassName("_6th")
var seventh = document.getElementsByClassName("_7th")
var eighth = document.getElementsByClassName("_8th")
var ninth = document.getElementsByClassName("_9th")
// first.addEventListener('click', start_game)

var elements = document.querySelectorAll('.common');

var X_PLAYER_TURN = true;
var O_PLAYER_TURN = false;
const Player_X = []
const Player_O = []
function clickHandler() {
	const position = Array.from(elements).indexOf(this);
	if (X_PLAYER_TURN) {
		this.textContent = 'X';
		X_PLAYER_TURN = false;
		Player_X.push(position)
		count += 1
		O_PLAYER_TURN = true;
	} else if (O_PLAYER_TURN) {
		this.textContent = 'O';
		O_PLAYER_TURN = false;
		X_PLAYER_TURN = true;
		Player_O.push(position);
		count += 1;
	}
	console.log("Player X", Player_X)
  	console.log("Player_O", Player_O)
  	findWinner(WINNING_COMBINATIONS, Player_X, Player_O)
  
  	// Remove the click event listener after the first click
  	this.removeEventListener('click', clickHandler);
}

elements.forEach(function(element) {
  element.addEventListener('click', clickHandler);
});

function findWinner(WINNING_COMBINATIONS, X, O) {
    for (const combination of WINNING_COMBINATIONS) {
      if (combination.every(pos => X.includes(pos))) {
        alert('Player X wins');
		location.reload();
        return;
      }
      if (combination.every(pos => O.includes(pos))) {
        alert('Player O wins');
		location.reload();
        return;
      }
    }
    if (X.length + O.length == 9) {
      	alert('Game is a draw');
	  	location.reload();
		return;
    }
  }


// const arrqa = document.getElementsByClassName("common")
// Array.from(arrqa).forEach(
//     element => {
//         element.addEventListener('click', function () {
//             if (X_PLAYER_TURN) {
//                 element.textContent = 'X';
//                 X_PLAYER_TURN = false;
//                 O_PLAYER_TURN = true;
//               } else if (O_PLAYER_TURN) {
//                 element.textContent = 'O';
//                 O_PLAYER_TURN = false;
//                 X_PLAYER_TURN = true;
//               }
//             });
//           });
            // console.log("An element with class 'common' was clicked!");

            // Check which element was clicked and change its text content
    //         if (element.id === '_1st') {
    //             if (X_PLAYER_TURN) {
    //                 element.textContent = 'X';
    //                 O_PLAYER_TURN = true;
    //                 X_PLAYER_TURN = false;
    //             }
    //             else {
    //                 element.textContent = 'O'
    //                 O_PLAYER_TURN = false;
    //                 X_PLAYER_TURN = true;
    //             }
    //         } else if (element.classList.contains('_2nd' || '_3rd' || '_4th' || '_5th' || '_6th' || '_7th' || '_8th' || '_9th')) {
    //             if (X_PLAYER_TURN) {
    //                 element.textContent = 'X';
    //                 X_PLAYER_TURN = false;
    //                 O_PLAYER_TURN = true;
    //             }
    //             else {
    //                 element.textContent = 'O'
    //                 O_PLAYER_TURN = false;
    //                 X_PLAYER_TURN = true;
    //             }
    //         }
    //     });
    // });
    //         } else if (element.classList.contains('_3rd')) {
    //             if (X_PLAYER_TURN) {
    //                 element.textContent = 'X';
    //                 X_PLAYER_TURN = false;
    //                 O_PLAYER_TURN = true;
    //             }
    //             else {
    //                 element.textContent = 'O';
    //                 O_PLAYER_TURN = false;
    //                 X_PLAYER_TURN = true;
                    
    //             }
    //         }
    //     });
    // });
// function start_game() {
//     if (X_PLAYER_TURN) {
//         first.innerHTML = "X"
//         X_PLAYER_TURN = false
//     }
// }
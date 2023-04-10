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

var X_PLAYER_TURN = true;
var O_PLAYER_TURN = false;
let Player_X = []
let Player_O = []

var elements = (document.querySelectorAll('.common'));
const Two_player = document.querySelector('[value="Two player"]').checked = true;
let PC_player = document.querySelector('input[value="PC player"]').checked;
console.log(PC_player);

const checkboxes = document.getElementsByName('player');
checkboxes.forEach((cb) => {
    cb.addEventListener('input', function () {
        console.log(`Checkbox value: ${cb.value}, checked: ${cb.checked}`);
        if (cb.checked && cb.value === 'Two player') {
            console.log('hello')
            elements.forEach(function (element) {
                element.addEventListener('click', clickHandler);
            });
            document.querySelector('input[value="PC player"]').checked = false;
        }
        else {
            PC_player = true;
            console.log('here')
            elements.forEach(function (element) {
                element.addEventListener('click', computerPlay);
            });
            document.querySelector('[value="Two player"]').checked = false;
        }
    });
});

async function clickHandler(event) {
    const position = Array.from(elements).indexOf(this);
    const clickedElement = event.target
    clickedElement.removeEventListener('click', clickHandler);
    if (X_PLAYER_TURN) {
        if (!this.classList.contains('o')){
            this.textContent = 'X';
            this.classList.add('x');
            X_PLAYER_TURN = false;
            Player_X.push(position)
            count += 1
            O_PLAYER_TURN = true;
        } else {
            O_PLAYER_TURN = false;
        }
        console.log("I have played, PC turn")
    } else if (O_PLAYER_TURN) {
        this.textContent = 'O';
        this.classList.add('o')
        O_PLAYER_TURN = false;
        X_PLAYER_TURN = true;
        Player_O.push(position);
        count += 1;
    }
    console.log("Player X", Player_X)
    console.log("Player_O", Player_O)
    let winner = await findWinner(WINNING_COMBINATIONS, Player_X, Player_O)
    console.log(winner)
    if (winner) {
        console.log(`${winner} wins!`);
        elements.forEach(function (element) {
            element.removeEventListener('click', clickHandler);
        });
        return;
    }

    console.log('HEre', PC_player)
    if ((PC_player && O_PLAYER_TURN) && (winner != 'x' || winner != 'o')) {
        console.log('Calling PC to play')
        setTimeout(computerPlay, 500)
    }

    // Remove the click event listener after the first click
    this.removeEventListener('click', computerPlay);
}

async function findWinner(WINNING_COMBINATIONS, X, O) {
    for (const combination of WINNING_COMBINATIONS) {
        if (combination.every(pos => X.includes(pos))) {
            PC_player = false
            await delay(50);
            alert('Player X wins');
            location.reload();
            return 'x';
        }
        if (combination.every(pos => O.includes(pos))) {
            await delay(50)
            alert('Player O wins');
            location.reload();
            return 'o';
        }
    }
    if (X.length + O.length == 9) {
        await delay(50);
        alert('Game is a draw');
        location.reload();
        return 'draw';
    }
}

async function computerPlay() {
    let emptySquares = document.querySelectorAll('.common:not(.o):not(.x');
    console.log(emptySquares)
    var randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    // computer plays as O by default
    
    console.log('Cheking PC turn', PC_player)
    if (PC_player) {
        randomSquare.textContent = 'O';
        randomSquare.classList.add('o');
    }

    O_PLAYER_TURN = false;
    X_PLAYER_TURN = true;
    Player_X = Array.from(document.querySelectorAll('.x')).map(
        el => Array.prototype.indexOf.call(elements, el)
    )
    Player_O = Array.from(document.querySelectorAll('.o')).map(
        el => Array.prototype.indexOf.call(elements, el)
    )
    console.log("Player X", Player_X)
    console.log("Player_O", Player_O)
    await findWinner(WINNING_COMBINATIONS, Player_X, Player_O)
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

elements.forEach(function (element) {
    element.addEventListener('click', clickHandler);
});
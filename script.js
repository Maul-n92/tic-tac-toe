const EMPTY = "";
const X = "X";
const O = "O";

let currentPlayer = X;
let board = [
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY]
];
function makeMove(row, col) {
    if (board[row][col] === EMPTY) {
        board[row][col] = currentPlayer;
        document.getElementById("game").children[row].children[col].innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            alert("Игрок " + currentPlayer + " победил!");
            resetGame();
        } else if (checkDraw()) {
            alert("Ничья!");
            resetGame();
        } else {
            currentPlayer = currentPlayer === X ? O : X;
        }
    }
}

function checkWin(player) {
    for (let i = 0; i < 3; i++) {
        if (
            board[i][0] === player &&
            board[i][1] === player &&
            board[i][2] === player
        ) {
            return true;
        }
        if (
            board[0][i] === player &&
            board[1][i] === player &&
            board[2][i] === player
        ) {
            return true;
        }
    }

    if (
        board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player
    ) {
        return true;
    }

    if (
        board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player
    ) {
        return true;
    }

    return false;
}


function checkDraw() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === EMPTY) {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    currentPlayer = X;
    board = [
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY]
    ];

    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = EMPTY;
    }
}
// Array of initial positioning
var initial = [
    ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'],
    ['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;'],
    ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;']
];
// Array of classes for initial positioning
var pieces = [
    ['filled black rook', 'filled black knight', 'filled black bishop', 'filled black queen', 'filled black king', 'filled black bishop', 'filled black knight', 'filled black rook'],
    ['filled black pawn', 'filled black pawn', 'filled black pawn', 'filled black pawn', 'filled black pawn', 'filled black pawn', 'filled black pawn', 'filled black pawn'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['filled white pawn', 'filled white pawn', 'filled white pawn', 'filled white pawn', 'filled white pawn', 'filled white pawn', 'filled white pawn', 'filled white pawn'],
    ['filled white rook', 'filled white knight', 'filled white bishop', 'filled white queen', 'filled white king', 'filled white bishop', 'filled white knight', 'filled white rook']
];
// Array of titles for initial positioning
var titles = [
    ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
    ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
    ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook']
];

var rookArray = [
   [0, 0, 0, 0, 0, 0, 0],
   [1, 2, 3, 4, 5, 6, 7],
   [0, 0, 0, 0, 0, 0, 0],
   [-1, -2, -3, -4, -5, -6, -7],
   [1, 2, 3, 4, 5, 6, 7],
   [0, 0, 0, 0, 0, 0, 0],
   [-1, -2, -3, -4, -5, -6, -7],
   [0, 0, 0, 0, 0, 0, 0]
];

var bishopArray = [
   [1, 2, 3, 4, 5, 6, 7],
   [1, 2, 3, 4, 5, 6, 7],
   [1, 2, 3, 4, 5, 6, 7],
   [-1, -2, -3, -4, -5, -6, -7],
   [-1, -2, -3, -4, -5, -6, -7],
   [-1, -2, -3, -4, -5, -6, -7],
   [-1, -2, -3, -4, -5, -6, -7],
   [1, 2, 3, 4, 5, 6, 7]
];

var queenArray = [
   [0, 0, 0, 0, 0, 0, 0],
   [1, 2, 3, 4, 5, 6, 7],
   [0, 0, 0, 0, 0, 0, 0],
   [-1, -2, -3, -4, -5, -6, -7],
   [1, 2, 3, 4, 5, 6, 7],
   [0, 0, 0, 0, 0, 0, 0],
   [-1, -2, -3, -4, -5, -6, -7],
   [0, 0, 0, 0, 0, 0, 0],
   [1, 2, 3, 4, 5, 6, 7],
   [1, 2, 3, 4, 5, 6, 7],
   [1, 2, 3, 4, 5, 6, 7],
   [-1, -2, -3, -4, -5, -6, -7],
   [-1, -2, -3, -4, -5, -6, -7],
   [-1, -2, -3, -4, -5, -6, -7],
   [-1, -2, -3, -4, -5, -6, -7],
   [1, 2, 3, 4, 5, 6, 7]
];

var kingArray = [
   [1],
   [1],
   [1],
   [-1],
   [-1],
   [-1],
   [-1],
   [1],   
   [0],
   [1],
   [0],
   [-1],
   [1],
   [0],
   [-1],
   [0]
];

var knightArray = [
    [-2, -2, -1, -1, 1, 1, 2, 2],
    [-1, 1, -2, 2, -2, 2, -1, 1]
];

var whitePawnArray = [
    // front-diagonal
    [1],   //0
    [1],   //1
    [-1],  //2
    [1],   //3
    // straight-front
    [0],   //4
    [1],   //5
    [0],   //6 only if on home ground
    [2]    //7 only if on home ground
];

var blackPawnArray = [
    // front-diagonal
    [1],
    [-1],
    [-1],
    [-1],
    // straight-front
    [0],
    [-1],
    [0],
    [-2]
];

var size = 8;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

var logMoves = document.getElementById("myList");
logMoves.innerHTML = ""; //reset dashboard

// Array of cells (all cells on board) ----------------------------------------------------------------------

var allCells = new Array();

for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
       allCells.push(letters[i] + numbers[j]);
    }
}

// Generate A-H indicators ----------------------------------------------------------------------

function columnGenerator(colIndicatorId) {
    var colIndicator = document.getElementById(colIndicatorId);
    colIndicator.innerHTML = ""; //reset colIndicator
    var myRow = "";

    for (var x = 0; x < size; x++) {
        myRow += "<div class='vCell'><span id=''>" + letters[x] + "</span></div>";
    }
    colIndicator.innerHTML += "<div class='indicatorRow'>" + myRow + "</div>";
}

columnGenerator("colIndicatorTop");
columnGenerator("colIndicatorBottom");

// Generate 1-8 indicators ----------------------------------------------------------------------

function rowGenerator(rowIndicatorId) {
    var rowIndicator = document.getElementById(rowIndicatorId);
    rowIndicator.innerHTML = ""; //reset rowIndicatorId

    var myRow = "";
    for (var x = size - 1; x >= 0; x--) {
        myRow += "<div class='hCell'><span id=''>" + numbers[x] + "</span></div>";
    }
    rowIndicator.innerHTML += "<div class='indicatorCol'>" + myRow + "</div>";
}

rowGenerator("rowIndicatorLeft");
rowGenerator("rowIndicatorRight");

// Generate the initial positioning of the chess table ----------------------------------------------------------------------

function resetBoard() {
    var board = document.getElementById("chessBoard");
    board.innerHTML = ""; //reset board

    for (var y = size - 1, z = 0; y >= 0; y--, z++) {
        var myRow = "";
        for (var x = 0; x < size; x++) {
            myRow += "<div class='cell " + pieces[z][x] + "' id='" + letters[x] + numbers[y] + "' title='" + titles[z][x] + "'>" + initial[z][x] + "</div>";
        }
        board.innerHTML += "<div class='row' id='row" + numbers[y] + "'>" + myRow + "</div>";
    }
}

resetBoard();
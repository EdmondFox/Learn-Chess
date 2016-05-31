// Array of initial positioning
var initial = [
    ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'],
    ['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;'],
    ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;']
];

/* original white pieces 
    ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;'],
    ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;']
*/
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

var size = 8;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
var digits = ["1", "2", "3", "4", "5", "6", "7", "8"];

// Generate letter indicators ----------------------------------------------------------------------

function columnGenerator(colIndicatorId) {
    var colIndicator = document.getElementById(colIndicatorId);
    colIndicator.innerHTML = ""; //reset colIndicator
    var myCol = "";

    for (var x = 0; x < letters.length; x++) {
        myCol += "<div class='vCell'><span id=''>" + letters[x] + "</span></div>";
    }
    colIndicator.innerHTML += "<div class='indicatorRow'>" + myCol + "</div>";
}

columnGenerator("boardTopIndicator");
columnGenerator("boardBottomIndicator");

// Generate digit indicators ----------------------------------------------------------------------

function rowGenerator(rowIndicatorId) {
    var rowIndicator = document.getElementById(rowIndicatorId);
    rowIndicator.innerHTML = ""; //reset rowIndicatorId

    var myRow = "";
    for (var x = digits.length - 1; x >= 0; x--) {
        myRow += "<div class='hCell'><span id=''>" + digits[x] + "</span></div>";
    }
    rowIndicator.innerHTML += "<div class='indicatorCol'>" + myRow + "</div>";
}

rowGenerator("boardLeftIndicator");
rowGenerator("boardRightIndicator");

// Generate the initial positioning of the chess table ----------------------------------------------------------------------

function resetBoard() {
    var board = document.getElementById("chessBoard");
    board.innerHTML = ""; //reset board

    for (var y = digits.length - 1, z = 0; y >= 0; y--, z++) {
        var myRow = "";
        for (var x = 0; x < initial[0].length; x++) {
            myRow += "<div class='cell " + pieces[z][x] + "' id='" + letters[x] + digits[y] + "' title='" + titles[z][x] + "'>" + initial[z][x] + "</div>";
        }
        board.innerHTML += "<div class='row' id='row" + digits[y] + "'>" + myRow + "</div>";
    }
}

resetBoard();
var koWhite = [];
var koBlack = [];

//var koWhite = ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;','&#9814;', '&#9814;', '&#9816;', '&#9816;', '&#9815;', '&#9815;', '&#9813;', '&#9812;']

//var koBlack = ['&#9820;', '&#9820;', '&#9822;', '&#9822;', '&#9821;', '&#9821;', '&#9819;', '&#9818;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;']


// add all pieces to the "Taken Out" dashboard ----------------------------------------------------------------------

//var board = document.getElementById("takenPiecesContainer");
//board.innerHTML = "";

function resetKoBoard(myArray, pieceClassColor, myContainer) {
        koWhite.sort();
        koBlack.sort();
        var container = document.getElementById(myContainer);
        container.innerHTML = "";
     //reset board
        var myRow = "";
        for (var x = 0; x < myArray.length; x++) {
            myRow += "<div class='koCell " + pieceClassColor + "'>" + myArray[x] + "</div>";
        }
        container.innerHTML = myRow;
}

resetKoBoard(koWhite, "white-piece", "whiteTakenPieces");
resetKoBoard(koBlack, "black-piece", "blackTakenPieces");
/**
 * @author Edmond Fox <fox.edmond.g@gmail.com>
 */


// Move pieces ----------------------------------------------------------------------


var logMoves = document.getElementById("myList");
logMoves.innerHTML = ""; //reset dashboard

var selected = false; //false if no piece has been selected 
var myAux; // 1 is selected, 2 is replaced

// Selected cell -------------------------------
var selectedCell;
var selectedId;
var selectedClass;
var selectedPiece;
var selectedTitle;

// To be replaced cell -------------------------------
var toBeReplacedCell;
var toBeReplacedId;
var toBeReplacedClass;
var toBeReplacedPiece;
var toBeReplacedTitle;

// Select/Replace Piece ----------------------------------------------------------------------------

var cells = document.getElementsByClassName("cell"); // Search through all cells
for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        movePiece(this);
    };
}

function movePiece(cell) {
    if (!selected) { // No piece is selected
        selected = true; // piece has been selected
        myAux = 1;

        selectedCell = cell; // get the current cell selection
        selectedId = cell.id; // get the current cell's id
        selectedClass = cell.className; //get the selected piece's class
        selectedPiece = cell.innerHTML; // get the current piece (the character itself)
        selectedTitle = cell.getAttribute("title");

        highlightMoves(cell, "var(--highlight-color)", "white", "black", knightArray, "knight");
        highlightMoves(cell, "var(--highlight-color)", "black", "white", knightArray, "knight");
        highlightMoves(cell, "var(--highlight-color)", "white", "black", rookArray, "rook");
        highlightMoves(cell, "var(--highlight-color)", "black", "white", rookArray, "rook");
        highlightMoves(cell, "var(--highlight-color)", "white", "black", bishopArray, "bishop");
        highlightMoves(cell, "var(--highlight-color)", "black", "white", bishopArray, "bishop");
        highlightMoves(cell, "var(--highlight-color)", "white", "black", queenArray, "queen");
        highlightMoves(cell, "var(--highlight-color)", "black", "white", queenArray, "queen");
        highlightMoves(cell, "var(--highlight-color)", "white", "black", kingArray, "king");
        highlightMoves(cell, "var(--highlight-color)", "black", "white", kingArray, "king");
        highlightMoves(cell, "var(--highlight-color)", "white", "black", whitePawnArray, "pawn");
        highlightMoves(cell, "var(--highlight-color)", "black", "white", blackPawnArray, "pawn");
    } else { // To be replaced cell
        myAux = 2;
        toBeReplacedCell = cell;
        toBeReplacedId = cell.id;
        toBeReplacedClass = cell.className;
        toBeReplacedPiece = cell.innerHTML;
        toBeReplacedTitle = cell.getAttribute("title");

        if (selectedId != toBeReplacedId) { // catch and release piece if in the same place
            //console.log("selectedId = " + selectedId + ", toBeReplacedId = " + toBeReplacedId + " " + document.getElementById(toBeReplacedId).innerHTML);
            var myBool = idHasClass(selectedId, "white");
            
            var myBool2;
            if (idHasClass(toBeReplacedId, "white") && !idHasClass(toBeReplacedId, "empty")) {
                myBool2 = "white-piece";
            } else if (idHasClass(toBeReplacedId, "black") && !idHasClass(toBeReplacedId, "empty")) {
                myBool2 = "black-piece";
            } else {
                myBool2 = "empty-cell";
            }
/*
            if (idHasClass(toBeReplacedId, "white")) { // add piece to taken pieces
                var myTakenPiece = document.getElementById(toBeReplacedId).innerHTML;
                koBlack.push(myTakenPiece);
                koBlack.sort();
                resetKoBoard(koBlack, "black-piece");
                myTakenPiece = "";
            }
*/            
            toBeReplacedCell.innerHTML = selectedPiece; //Set the selected space to the piece that was grabbed
            toBeReplacedCell.className = selectedClass; //set the new class for the empty cell
            toBeReplacedCell.setAttribute("title", selectedTitle); //Set the new title for the new cell

            selectedCell.className = "cell empty"; //add empty and cell classes to the cell that remained empty
            selectedCell.innerHTML = ""; //remove the piece from its old location
            selectedCell.setAttribute("title", "empty");

            if (myBool) {
                logMoves.innerHTML = "<li class='white-piece-container'><span class='white-piece'>" + selectedPiece + "</span><span class='moves-data'>" + selectedId + " - " + toBeReplacedId + "</span>" + "<span class='replaced "+ myBool2 +"'>" + toBeReplacedPiece + "</span></li>" + logMoves.innerHTML;
                
                if (myBool2 == "black-piece") {
                    var myTakenPiece = toBeReplacedPiece;
                    console.log(myTakenPiece);
                    koBlack.push(myTakenPiece);
                    myTakenPiece = "";
                }
                
                resetKoBoard(koWhite, "white-piece", "whiteTakenPieces");
                resetKoBoard(koBlack, "black-piece", "blackTakenPieces");
                
                
            } else {
                
                if (myBool2 == "white-piece") {
                    var myTakenPiece = toBeReplacedPiece;
                    console.log(myTakenPiece);
                    koWhite.push(myTakenPiece);
                    myTakenPiece = "";
                }
                
                resetKoBoard(koWhite, "white-piece", "whiteTakenPieces");
                resetKoBoard(koBlack, "black-piece", "blackTakenPieces");
                
                
                logMoves.innerHTML = "<li><span class='black-piece'>" + selectedPiece + "</span><span class='moves-data'>" + selectedId + " - " + toBeReplacedId + "</span>" + "<span class='replaced "+ myBool2 +"'>" + toBeReplacedPiece + "</span></li>" + logMoves.innerHTML;
            }

        }

        highlightMoves(cell, "", "white", "black", knightArray, "knight");
        highlightMoves(cell, "", "black", "white", knightArray, "knight");
        highlightMoves(cell, "", "white", "black", rookArray, "rook");
        highlightMoves(cell, "", "black", "white", rookArray, "rook");
        highlightMoves(cell, "", "white", "black", bishopArray, "bishop");
        highlightMoves(cell, "", "black", "white", bishopArray, "bishop");
        highlightMoves(cell, "", "white", "black", queenArray, "queen");
        highlightMoves(cell, "", "black", "white", queenArray, "queen");
        highlightMoves(cell, "", "white", "black", kingArray, "king");
        highlightMoves(cell, "", "black", "white", kingArray, "king");
        highlightMoves(cell, "", "white", "black", whitePawnArray, "pawn");
        highlightMoves(cell, "", "black", "white", blackPawnArray, "pawn");

        selected = false;
    }
}





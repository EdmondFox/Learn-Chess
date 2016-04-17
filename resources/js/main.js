/**
 * @author Edmond Fox <fox.edmond.g@gmail.com>
 */


// Move pieces ----------------------------------------------------------------------

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

        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "white", "black", knightArray, "knight");
        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "black", "white", knightArray, "knight");
        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "white", "black", rookArray, "rook");
        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "black", "white", rookArray, "rook");
        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "white", "black", bishopArray, "bishop");
        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "black", "white", bishopArray, "bishop");
        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "white", "black", queenArray, "queen");
        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "black", "white", queenArray, "queen");
        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "white", "black", kingArray, "king");
        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "black", "white", kingArray, "king");
        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "white", "black", whitePawnArray, "pawn");
        highlightMoves(cell, "rgba(151, 95, 58, 0.8)", "black", "white", blackPawnArray, "pawn");
    } else { // To be replaced cell
        myAux = 2;
        toBeReplacedCell = cell;
        toBeReplacedId = cell.id;
        toBeReplacedClass = cell.className;
        toBeReplacedPiece = cell.innerHTML;
        toBeReplacedTitle = cell.getAttribute("title");

        if (selectedId != toBeReplacedId) { // catch and release piece if in the same place
            var myBool = idHasClass(selectedId, "white");

            var myBool2;
            if (idHasClass(toBeReplacedId, "white") && !idHasClass(toBeReplacedId, "empty")) {
                myBool2 = "whitePiece";
            } else if (idHasClass(toBeReplacedId, "black") && !idHasClass(toBeReplacedId, "empty")) {
                myBool2 = "blackPiece";
            } else {
                myBool2 = "emptyCell";
            }

            toBeReplacedCell.innerHTML = selectedPiece; //Set the selected space to the piece that was grabbed
            toBeReplacedCell.className = selectedClass; //set the new class for the empty cell
            toBeReplacedCell.setAttribute("title", selectedTitle); //Set the new title for the new cell

            selectedCell.className = "cell empty"; //add empty and cell classes to the cell that remained empty
            selectedCell.innerHTML = ""; //remove the piece from its old location
            selectedCell.setAttribute("title", "empty");

            if (myBool) {
                logMoves.innerHTML = "<li><span class='whitePiece'>" + selectedPiece + "</span> " + selectedId + " - " + toBeReplacedId + " " + "<span class='replaced "+ myBool2 +"'>" + toBeReplacedPiece + "</span></li>" + logMoves.innerHTML;
            } else {
                logMoves.innerHTML = "<li><span class='blackPiece'>" + selectedPiece + "</span> " + selectedId + " - " + toBeReplacedId + " " + "<span class='replaced "+ myBool2 +"'>" + toBeReplacedPiece + "</span></li>" + logMoves.innerHTML;
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





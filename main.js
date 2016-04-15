/**
 * @author Edmond Fox <fox.edmond.g@gmail.com>
 */

function main() {

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
     
     function highlightMoves(cell, myColor, pieceColor, oppPieceColor, movesArray, pieceType) {
         var myId = selectedId;
         if (hasClass(cell, pieceType) && hasClass(cell, pieceColor)) {
             var col = myId.substring(0, 1); // first character (Letter)
             var row = myId.substring(1, 2); //second character (Number)
             col = convertLetterToNumber(col, col);
                          
             var myMoves = new Array();
             var myBackgrounds = new Array();
             
             var move;
             var myBackground;
             var colAux, rowAux;
             
             function movesDirections(movesArray) {
                 for (var j = 0; j < movesArray.length; j+=2) {
                    for (var i = 0; i < movesArray[j].length; i++) {
                         colAux = parseInt(col) + movesArray[j][i];
                         rowAux = parseInt(row) + movesArray[j + 1][i];
                         colAux = convertNumberToLetter(colAux, colAux);

                         move = colAux + rowAux;
                        
                         if (isInArray(move, allCells)) {
                             myMoves.push(move);
                             getBackground(move, myBackground, myBackgrounds); // Get background colors for gradient effect
                         } else {
                             if (pieceType != "knight") { // if the piece is a knight, do not break!
                                 break;
                             }
                         }
                         if (pieceType != "knight") { // if the piece is a knight, do not break!
                            if (idHasClass(move, pieceColor) && myAux == 1) { // the break point applies only if current cell has the class of the rook itself AND if the piece was selected (not placed)
                                 break;
                             }
                         }
                         
                         if (pieceType != "knight") { // if the piece is a knight, do not break!
                            if (idHasClass(move, oppPieceColor)) {
                                 break;
                             }
                         }
                         
                     }
                 }
             }
             
             function pawnMovesDirectionsFront(movesArray) {
                 for (var j = 4; j < movesArray.length; j+=2) {
                    if ((row > 2 && j > 4 && pieceColor == "white") || (row < 7 && j > 4 && pieceColor == "black")) {
                        break;
                    }
                    for (var i = 0; i < movesArray[j].length; i++) {
                         colAux = parseInt(col) + movesArray[j][i];
                         rowAux = parseInt(row) + movesArray[j + 1][i];
                         colAux = convertNumberToLetter(colAux, colAux);
                        
                         move = colAux + rowAux;
                      
                         if ((isInArray(move, allCells) && idHasClass(move, "empty")) || (isInArray(move, allCells) && myAux == 2)) {
                             myMoves.push(move);
                             getBackground(move, myBackground, myBackgrounds);
                         } else {
                             break;
                         }

                         if (idHasClass(move, pieceColor) && myAux == 1) {
                             break;
                         }
                    }
                }
             }
             
             function pawnMovesDirectionsDiagonal(movesArray) {
                 for (var j = 0; j < movesArray.length - 4; j+=2) {
                    for (var i = 0; i < movesArray[j].length; i++) {
                         colAux = parseInt(col) + movesArray[j][i];
                         rowAux = parseInt(row) + movesArray[j + 1][i];
                         colAux = convertNumberToLetter(colAux, colAux);

                         move = colAux + rowAux;

                         if ((isInArray(move, allCells) && idHasClass(move, oppPieceColor) && myAux == 1) || (isInArray(move, allCells) && myAux == 2)) {
                             myMoves.push(move);
                             getBackground(move, myBackground, myBackgrounds);
                         }
                    }
                }
             }
            
             if (pieceType != "pawn") { // if the piece is not a pawn
                 movesDirections(movesArray);
             } else { // if the piece is a pawn
                 pawnMovesDirectionsFront(movesArray);
                 pawnMovesDirectionsDiagonal(movesArray);
             }
                          
             changeSelectedBg(myId, myColor);
             
                          
            // ---------------------------------------------------------apply style only for cell ids that exist on board
             
            for (i = 0; i < myMoves.length; i++) {
                if (!idHasClass(myMoves[i], pieceColor) || myAux == 2) {
                    if (myAux == 1) { // if cell is selected
                        document.getElementById(myMoves[i]).style.background = "-webkit-radial-gradient(center, ellipse cover, " + myColor + " 0%, " + myColor + " 63%, " + myBackgrounds[i] + " 66%, " + myBackgrounds[i] + " 100%)";
                    } else {
                        document.getElementById(myMoves[i]).style.background = myColor;
                    }
                }
                 
            } 

        }
    }
    
    // Change background of selected cell
    
    function changeSelectedBg(myId, myColor) {
        if (myAux == 1) {
             var selectedIdVar = document.getElementById(myId);
             var mySelectedBackground = getComputedStyle(selectedIdVar, null).getPropertyValue("background-color");
             document.getElementById(myId).style.background = "-webkit-radial-gradient(center, ellipse cover, " + myColor + " 0%, " + myColor + " 55%, rgb(60, 27, 0) 63%, " + mySelectedBackground + " 66%, " + mySelectedBackground + " 100%)";
         } else {
             document.getElementById(myId).style.background = myColor;
         }
    }
    
    // Additional functions ------------------------------------
     
     function hasClass(element, cls) {
         return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
     }
     
     function idHasClass(id, cls) {
         element = document.getElementById(id);
         return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
     }
     
     function convertLetterToNumber(colLetter) {
         for (i = 0; i < size; i++) {
                 if (colLetter == letters[i]) {
                     colNumber = i + 1;
                     break;
                 }
         }
         return colNumber;
     }
     
     function convertNumberToLetter(colNumber, colLetter) {
         for (i = 0; i < size; i++) {
                 if (colNumber == i + 1) {
                     colLetter = letters[i];
                     break;
                 }
         }
         return colLetter;
     }
     
     function isInArray(value, array) { //returns true if is in the array
         return array.indexOf(value) > -1;
     }
     
     function getBackground(id, myVar, myArray) {
          myVar = document.getElementById(id);
          myVar = getComputedStyle(myVar, null).getPropertyValue("background-color");
          myArray.push(myVar);
     }
       
 }
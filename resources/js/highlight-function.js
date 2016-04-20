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
            var myCount = 0;
            var pieceInFront = false;
            for (var j = 4; j < movesArray.length; j+=2) {
               if ((row > 2 && j > 4 && pieceColor == "white") || (row < 7 && j > 4 && pieceColor == "black")) {
                   break;
               }
               for (var i = 0; i < movesArray[j].length; i++) {
                    colAux = parseInt(col) + movesArray[j][i];
                    rowAux = parseInt(row) + movesArray[j + 1][i];
                    colAux = convertNumberToLetter(colAux, colAux);

                    move = colAux + rowAux;
                    
                    if (myCount == 0 && !idHasClass(move, "empty")) { // if it as the first check of cells and there is a piece in front of it
                        pieceInFront = true;
                    }
                    
                    myCount++;
                   
                    if ((isInArray(move, allCells) && idHasClass(move, "empty") && pieceInFront == false) || (isInArray(move, allCells) && myAux == 2)) {
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
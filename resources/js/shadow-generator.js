function generateBoxShadow (myId, topColor, rightColor, bottomColor, leftColor, outlineColor, shadowSize, direction) {
    var myBox = document.getElementById(myId);
    var topColor = topColor;
    var rightColor = rightColor;
    var bottomColor = bottomColor;
    var leftColor = leftColor;
    var outlineShadow = ", 0px 0px 1px 2px " + outlineColor;

    var myValue = "";

    var shadowSize = shadowSize;

    for (var i = 1; i <= shadowSize; i++) {
        if (i != shadowSize) {
            myValue += direction + " " + "0px " + i + "px " + topColor + ", " + direction + " " + i + "px " + "0px " + leftColor + ", " + direction + " " + "0px -" + i + "px " + bottomColor + ", " + direction + " -" +  i + "px " + "0px " + rightColor + ", " ;
        } else {
            myValue += direction + " " + "0px " + i + "px " + topColor + ", " + direction + " " + i + "px " + "0px " + leftColor + ", " + direction + " " + "0px -" + i + "px " + bottomColor + ", " + direction + " -" +  i + "px " + "0px " + rightColor ;
        }

    }

    myBox.style.boxShadow = myValue + outlineShadow;
}

generateBoxShadow("boardContainer", "var(--tb-shadow)", "var(--lr-shadow)", "var(--tb-shadow)", "var(--lr-shadow)", "var(--text-dark-shadow)", 40, "inset");

generateBoxShadow("chessBoard", "var(--tb-shadow)", "var(--lr-shadow)", "var(--tb-shadow)", "var(--lr-shadow)", "var(--text-dark-shadow)", 1, "inset");

generateBoxShadow("takenPieces", "var(--tb-shadow)", "var(--lr-shadow)", "var(--tb-shadow)", "var(--lr-shadow)", "var(--text-dark-shadow)", 15, "inset");

generateBoxShadow("dashboard", "var(--tb-shadow)", "var(--lr-shadow)", "var(--tb-shadow)", "var(--lr-shadow)", "var(--text-dark-shadow)", 15, "inset");

//border:5px solid #6f543d;
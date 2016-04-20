function generateBoxShadow (myId, topColor, rightColor, bottomColor, leftColor, outlineColor, shadowSize) {
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
            myValue += "inset " + "0px " + i + "px " + topColor + ", " + "inset " + i + "px " + "0px " + leftColor + ", " + "inset " + "0px -" + i + "px " + bottomColor + ", " + "inset -" +  i + "px " + "0px " + rightColor + ", " ;
        } else {
            myValue += "inset " + "0px " + i + "px " + topColor + ", " + "inset " + i + "px " + "0px " + leftColor + ", " + "inset " + "0px -" + i + "px " + bottomColor + ", " + "inset -" +  i + "px " + "0px " + rightColor ;
        }

    }

    myBox.style.boxShadow = myValue + outlineShadow;
}

generateBoxShadow("boardContainer", "rgba(181, 136, 99, 0.7)", "rgba(174, 120, 76, 0.7)", "rgba(181, 136, 99, 0.7)", "rgba(174, 120, 76, 0.7)", "#6f543d", 33);
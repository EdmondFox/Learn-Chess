// Additional functions ------------------------------------
 
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

// domEntity < String >: class / id / tag
// domEntityValue < String > : value of attribute (for class or id) or tag name (for tag)
function underlineElement(domEntity, domEntityValue, simbolsToEscape) {
    var elementsToUnderline, 
        textFromAnElement = '';
    if (domEntity === 'class') {
        elementsToUnderline = document.getElementsByClassName(domEntityValue);
        applyToAllElements(elementsToUnderline, textFromAnElement, simbolsToEscape);
    } else if (domEntity === 'tag') {
        elementsToUnderline = document.getElementsByTagName(domEntityValue);
        applyToAllElements(elementsToUnderline, textFromAnElement, simbolsToEscape);
    } else if (domEntity === 'id') {
        elementsToUnderline = document.getElementById(domEntityValue);
        textFromAnElement = elementsToUnderline.innerText;
        textFromAnElement = textFromAnElement.replace(/\r?\n/g, '<br/>');    
        splitBySimbols(elementsToUnderline, textFromAnElement, simbolsToEscape);
    } else {
        console.log('This DOM entity is not supported!');
    }
}

function applyToAllElements(elementsToUnderline, textFromAnElement, simbolsToEscape) {
    for (var i = 0; i < elementsToUnderline.length; i += 1) {
        textFromAnElement = elementsToUnderline[i].innerText;        
        textFromAnElement = textFromAnElement.replace(/\r?\n/g, '<br/>');  
        splitBySimbols(elementsToUnderline[i], textFromAnElement, simbolsToEscape);
    }
}

function splitBySimbols(element, textFromAnElement, simbolsToEscape) {    
    var splittedStr = [];
    for (var i = 0; i < simbolsToEscape.length; i += 1) {
        splittedStr = textFromAnElement.split(simbolsToEscape[i]);
        textFromAnElement = splittedStr.join('!' + simbolsToEscape[i] + '!');
    }
    splittedStr = textFromAnElement.split('!');
    console.log(splittedStr);
    addClassToUnderline(element, splittedStr, simbolsToEscape);
}

// Creates a border-bottom to an element with the string until a simbol
function addClassToUnderline(element, splittedStr, simbolsToEscape) {        
    for (var i = 0; i < splittedStr.length; i += 1) {        
        // Create a loop for conditions
        if ((splittedStr[i] !== "g") && (splittedStr[i] !== "y") && (splittedStr[i] !== "p")) {        
            splittedStr[i] = `<span class="bordered">` + splittedStr[i] + `</span>`;
        }
    }    
    textFromAnElement = splittedStr.join('');    
    element.innerHTML = textFromAnElement;
}

// Try to pass object parameter to getElement function
// var elementToUnderline = {
//     domEntity: 'class', // <String> 'id', 'class', 'tag'
//     domEntityValue: 'bordered', // <String>
//     arrayPosition: 2, // < Int >
//     simbolsToEscape: [' ', 'g', 'y', 'p'] // < Array >
// }

window.onload = function () {
    var simbolsToEscape = [' ', 'g', 'y', 'p'];
    underlineElement('class', 'sentence', simbolsToEscape);
};
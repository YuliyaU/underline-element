function splitBySimbols(str, simbols) {    
    var splittedStr = [];
    for (var i = 0; i < simbols.length; i += 1) {
        splittedStr = str.split(simbols[i]);
        str = splittedStr.join('!' + simbols[i]);
    }
    splittedStr = str.split('!');
    borderString(splittedStr, simbols);
}

// Creates a border-bottom to an element with the string until a simbol
function borderString(splittedStr, simbols) {        
    for (var i = 0; i < splittedStr.length; i += 1) {        
        if ((splittedStr[i] !== "g") && (splittedStr[i] !== "y")) {        
        // var check = false;
        // checkOnBorderNeed(splittedStr[i], simbols)
        // if (check) {
            splittedStr[i] = `<span class="bordered">` + splittedStr[i] + `</span>`;
        }
    }    
    str = splittedStr.join('');    
    document.getElementsByTagName('h1')[0].innerHTML = str;
}

// function checkOnBorderNeed(item, simbols) {    
//     for (var i = 0; i < simbols.length; i += 1) {
//         check = false;
//         if (item !== simbols[i]) {
//             check = true;
//         } else {
//             check = false;
//             break;
//         }
//     }
//     console.log(item);
//     console.log(check);
//     return check;
// }

window.onload = function () {
    var h1 = document.getElementsByTagName('h1')[0];
    var textFromAnElement = h1.innerText;
    textFromAnElement = textFromAnElement.replace(/\r?\n/g, '<br/>');
    console.log(textFromAnElement);
    splitBySimbols(textFromAnElement, [/*' ', */'<br/>', 'g', 'y']);
};
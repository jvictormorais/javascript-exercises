const palindromes = function (str) {
    str = str.replace(/\s/g, ''); //remove space
    str = str.replace(/[^\w\s]/gi, ''); // remove characters that are not words and space
    str = str.toLowerCase(); //to lower case
    let palStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
         palStr += str[i];
    } 
    if(str == palStr) {
        return true
    } return false;
};

// Do not edit below this line
module.exports = palindromes;

const removeFromArray = function(array, ...remove) {
    for (let i = 0; i < array.length; i++) {
        while (array.indexOf(remove[i]) !== -1) {
            array.splice(array.indexOf(remove[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

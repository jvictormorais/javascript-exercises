const fibonacci = function(n) {
if(n<0){
    return "OOPS"
}else{
    const result = [1, 1];
    for (var i = 2; i < n; i++) {
        result.push(result[i-2] + result[i-1]);
    }
    return result[n-1]; 
}

};

// Do not edit below this line
module.exports = fibonacci;

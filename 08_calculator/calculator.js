const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(ourArray) {
  let sum = 0;
  for (let i = 0; i < ourArray.length; i += 1) {
    sum += ourArray[i];
  }
  return sum;
};

const multiply = function(array) {
  return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num1) {
    var f = [];
    if (num1 == 0 || num1 == 1)
      return 1;
    if (f[num1] > 0)
      return f[num1];
    return f[num1] = factorial(num1-1) * num1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

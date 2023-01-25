const convertToCelsius = function(tempF) {
  let tempC = tempF;
  tempC = (tempC - 32)*(5/9);
  tempC = Math.round(tempC*10)/10
	return tempC
};

const convertToFahrenheit = function(tempC) {
  let tempF = tempC;
  tempF = (tempF*(9/5)+32);
  tempF = Math.round(tempF*10)/10;
  return tempF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

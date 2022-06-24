const ftoc = function(degree) {
    celcius = (degree - 32) * (5/9);
    return parseFloat(celcius.toFixed(1));
};

const ctof = function(degree) {
    fahrenheit = degree * (9/5) + 32;
    return parseFloat(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

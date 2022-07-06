const add = function(n1, n2) {
    return n1 + n2;
};

const subtract = function(n1, n2) {
    return n1 - n2;
};

const sum = function(nums) {
    let total = nums.reduce( (partial,n) => partial + n, 0);
    return total;
};

const multiply = function(nums) {
  let total = nums.reduce( (partial,n) => partial * n, 1);
  return total;
};

const power = (n1, n2) => n1 ** n2;

const factorial = n1 => {
    let factorial = n1;
    if (n1 === 1 || n1 === 0) return 1;
    for (let i = n1-1; i > 1; i--){
        factorial *= i;
    }
    return factorial;
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

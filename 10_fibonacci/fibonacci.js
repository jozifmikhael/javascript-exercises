const fibonacci = function(num) {
    let n = +num;
    let f0 = 1;
    let f1 = 1;
    if (n < 1) return 'OOPS'
    if (n == 1 || n == 2) return 1;
    let sum = 0;
    for (let i = 2; i < num; i++){
        let temp = f1;
        f1 = f0 + f1;
        f0 = temp;

    }
    return f1;
};

// Do not edit below this line
module.exports = fibonacci;

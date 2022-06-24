const repeatString = function(string, n) {
// repeat the string n times
    result = "";
    if (n < 0) return 'ERROR';
    for (let i = 0; i < n; i++){
        result = result.concat(string);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

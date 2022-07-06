const palindromes = function (string) {
    let alphNumString = string.replace(/[^a-z0-9]/gi,'');
    alphNumString = alphNumString.toLowerCase();
    let left = 0;
    let right = alphNumString.length - 1;
    while (left <= right){
        if (alphNumString.charAt(left) != alphNumString.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

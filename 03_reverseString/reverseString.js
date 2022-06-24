const reverseString = function(string) {
    if (string === "") return "";
    let i = 0;
    let stringArray = string.split("");
    while (i < string.length / 2){
        let temp = stringArray[i];
        stringArray[i] = stringArray[string.length-i];
        stringArray[string.length-i] = temp;
        i++;
    }
    return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

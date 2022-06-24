const removeFromArray = function(array, ...rest) {
    for (let i = 0; i < rest.length; i++){
        let index = array.indexOf(rest[i]);
        if (index > -1)
            array.splice(index, 1);
        }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

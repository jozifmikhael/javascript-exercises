const findTheOldest = function(arr) {
    let oldest = arr.reduce((oldest, person) => {
        let birthDateOldest = oldest.yearOfBirth;

        let deathDateOldest =  (typeof oldest.yearOfDeath === 'undefined') ? new Date().getFullYear() : oldest.yearOfDeath;
        let birthDatePerson = person.yearOfBirth;
        let deathDatePerson = (typeof oldest.yearOfDeath === 'undefined') ? new Date().getFullYear() : person.yearOfDeath;
        return deathDateOldest - birthDateOldest > deathDatePerson - birthDatePerson ? oldest : person;
    }, {});
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

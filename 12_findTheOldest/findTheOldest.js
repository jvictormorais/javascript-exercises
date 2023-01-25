const findTheOldest = function(people) {
    let oldest = { age: 0 };
    people.forEach(people => {
        const age = people.yearOfDeath ? people.yearOfDeath - people.yearOfBirth : new Date().getFullYear() - people.yearOfBirth;
        if (age > oldest.age) {
            oldest = { ...people, age };
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

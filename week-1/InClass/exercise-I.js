let nameOfPerson = 'Luke';
let ageOfPerson = 47;
let currentYear = 2022;

function sub( a, b) {
    return a - b;
}

let birthYear = sub( currentYear, ageOfPerson)

console.log(`this is my friend ${nameOfPerson}, he's ${ageOfPerson}. That means he was born in ${birthYear}.`);
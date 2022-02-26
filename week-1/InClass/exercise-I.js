let ageOfPerson = 47;
let currentYear = 2022;

function sub( a, b) {
    return a - b;
}

console.log(sub( currentYear, ageOfPerson));

const nameOfPerson = 'Luke';

function greet(a){
    return "This is my friend " + a + ". He was born in " + sub( currentYear, ageOfPerson)
}

console.log(greet(nameOfPerson));
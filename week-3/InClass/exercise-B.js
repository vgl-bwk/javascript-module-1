const spaClass =["Cristiane", "Laeken", "Angel", "Valeria", "Diego", "Carlos"]

const engClass =["Usman","Gloria", "Damian", "Deniz", "Rachid", "Alissa"]

const everyone = spaClass.concat(engClass);
console.log(everyone.sort());

function toString (name, array){
if (array.includes(name)){
    return `${name} is at the class with ${array}`;
    }
return `${name} is not at the class with ${array}`;
}

console.log(toString ("Diego", engClass));
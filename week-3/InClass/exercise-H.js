const spaClass =["Cristiane", "Laeken", "Angel", "Valeria", "Daniel", "Carlos"]

const engClass =["Usman","Gloria", "Damian", "Deniz", "Rachid", "Alissa"]
 
function checkDaniel (name){
    return name === "Daniel";
}

function isDanielHere (array){ 
    if (array.find(checkDaniel) === "Daniel") {
        return `Found me!`
    }
return `Haven't found me :(`
}

console.log(isDanielHere(spaClass));
console.log(isDanielHere(engClass));

//.includes

//If aaaa ? aaaa : not aaaa
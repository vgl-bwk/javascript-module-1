function firsTen(text){
    return text.slice(0,9)
}

const firsTenResult = firsTen("hi, this is a test text")

//Hi, this //

console.log(firsTenResult);

function capFirst(text){
    const firstChar = text.charAT(0)
    const firstCharCaps = firstChar.toUppercase()
    return firstCharCaps
}

const capFirstResult = capFirst("hi, this is a test text")

console.log(capFirstResult);
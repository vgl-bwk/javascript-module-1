function isItLegal(year){
    if ((2022 - year) >= 17){
        return `Born in ${year} can drive`
    }
    return `Born in ${year} can drive in ${(17 - (2022 - year))} years`
}

const driversBirthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
let canHeDrive = driversBirthYear.map(isItLegal)

console.log(canHeDrive);
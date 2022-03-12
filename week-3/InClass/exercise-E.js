function whatsMyAgeAgain (year){
    return 2022 - year;

}
const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

const yourAgeIs = years.map(whatsMyAgeAgain);

console.log(yourAgeIs);
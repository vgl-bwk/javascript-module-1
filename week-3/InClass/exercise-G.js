//const testScores = [90, 50, 100, 66, 25, 80, 81];

//function isHighScore(score) {
 // return score > 80;
//}

//const highTestScores = testScores.filter(isHighScore);

//console.log(highTestScores);

const driversBirthYear = [1973, 2013, 1984, 2009, 1995, 1956, 1937]

function elegibleForDriving (year){
    return ((2022 - year) >= 17)
    }

const elegibleYears = driversBirthYear.filter(elegibleForDriving)

function chosenFew (array){
    console.log(`These are the birth years of people who can drive: ${array}`);
}

chosenFew(elegibleYears)
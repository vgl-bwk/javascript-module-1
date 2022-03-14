// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplyBy100 (number){
    return number*100
};

var functionMapExternal = numbers.map(multiplyBy100);
var functionMapInternalVeryVerbose = numbers.map(function times100(number){
     return number*100
    });
var functionMapInternalStillVerbose = numbers.map(function (number){
     return number*100
    });
var functionMapInternalVerbose = numbers.map(number => {
     return number*100
    });
var functionMapInternal = numbers.map(number => number*100);

console.log(functionMapExternal);
console.log(functionMapInternalVeryVerbose);
console.log(functionMapInternalStillVerbose);
console.log(functionMapInternalVerbose);
console.log(functionMapInternal);
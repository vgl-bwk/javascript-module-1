/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

function daysT (array) {
  const days =[]
  for (let i = 0; i< array.length ; i++) {
    const day= array[i]
    if(day.startsWith('T')){
    days.push(day)
  }
  }
  return days
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log(daysT(daysOfWeek));
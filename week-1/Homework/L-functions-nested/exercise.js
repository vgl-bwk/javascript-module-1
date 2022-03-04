var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
let mentors = 8;
let students = 15;

function percentage(a, b){
  return  Math.round ((a/(a +b))*100);
}

function message(a, b) {
  return "Students are " + percentage(a, b) + "% of the class, mentors are the remaining " + percentage(b, a) + "%"
}

console.log(message (students, mentors))

function greet(a){
  return `HELLO ${a.toUpperCase()} WELCOME TO OUR CLASS!!`
}

console.log(greet(mentor1))
console.log(greet(mentor2))
console.log(greet(mentor3))
console.log(greet(mentor4))
console.log(greet(mentor5))
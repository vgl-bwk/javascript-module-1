var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
let mentors = 8;
let students = 15;
const sum = mentors + students;


function percentage(a){
  let Percent = (a/sum)*100;
  let pRound = Math.round (Percent);
  return pRound;
}
  
function report(){
  return "Students are " + percentage(students) + "% of the class, mentors are the remaining " + percentage(mentors) + "%";
}

console.log(report())

function greet(a){
  let intro = "Hello "
  let cIntro = intro.toLocaleUpperCase()
  let outro = ", welcome to our class!"
  let cOutro = outro.toLocaleUpperCase()
  let name = a
  let cName = a.toLocaleUpperCase()
  return cIntro + cName + cOutro
}

console.log(greet(mentor1))
console.log(greet(mentor2))
console.log(greet(mentor3))
console.log(greet(mentor4))
console.log(greet(mentor5))
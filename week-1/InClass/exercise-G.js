let mentors= 8;
let students= 15;
const sum= mentors+students;
let b= Math.round(Math.random() * 1000)

function percentage(a)
{
  const x=(a/sum)*100;
  return Math.round (x)
}

console.log (`There are ${sum} people in the course: ${mentors} of them are mentors, ${students} of them are students.`)
console.log(`Students make ${percentage(students)}% of the class`);
console.log(`Mentors make ${percentage(mentors)}% of the class`);
console.log(`Your lucky number of the day is`, b)

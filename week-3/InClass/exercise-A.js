let classmates =["Cristiane", "Laeken", "Angel", "Valeria"]

console.log(`There are ${classmates.length} students in this table. Their names are: ${classmates}`);

let newStudent = "Daniel";
let newGroup = classmates.unshift(classmates.splice(newStudent, 1)[0]);

console.log(newGroup);
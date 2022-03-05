
function showStudents(alumni){
    for (let positionArrayStudents = 0; positionArrayStudents < alumni.length; positionArrayStudents++) {
        let student = alumni[positionArrayStudents];
        console.log(student);
    }
}
showStudents(["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"])
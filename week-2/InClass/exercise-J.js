const groupA = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];
const groupB = ["Travis", "Muhammad", "Ebenezer", "Frida", "Tajaldeen"]
const groupC = ["Sigfried", "Amy", "Mukanda", "Chad", "Rigoberta"]

function secondMatchesAmy(groupX) {
  if (groupX[1] === "Amy") {
    return "Second index matched!";
  }
return "Second index not matched";
}

console.log(secondMatchesAmy(groupB));
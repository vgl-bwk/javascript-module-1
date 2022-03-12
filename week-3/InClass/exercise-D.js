function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const magicOutput = yourFunc(namesArray);

  return magicOutput;
}
function allCaps(personName){
  return personName.toUpperCase();
}
function arrayToString(array) {
  const result = [] 
for (let i = 0;i < array.length; i++) {
  const element = array[i];
  result.push(allCaps(element))
}
return result.sort();
}

console.log(magician(arrayToString));
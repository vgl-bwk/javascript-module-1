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
function allCaps(array){
  return array.map(personName => personName.toUpperCase());
}
console.log(magician(allCaps));
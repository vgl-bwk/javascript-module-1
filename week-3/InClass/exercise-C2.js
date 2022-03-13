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
const allCaps = item => item.toUpperCase();
console.log(magician(array => array.map(allCaps)));

//map esta pensado para transformaciones de arrays
//for each esta pensado para pasar una funcion por cada elemento del array
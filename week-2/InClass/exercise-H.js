function exponential (i) {
  return i * i
}
function isEven(i){
  return i % 2 === 0
}

for (let i = 5; i < 20; i++) {
  if (isEven(i)) {
    console.log("The exponential of " + i + " is " + exponential(i));
}
}
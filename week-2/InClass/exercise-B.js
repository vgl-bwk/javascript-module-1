function boolChecker(bool) {
  if (typeof bool == "boolean") {
    return "You've given me a bool, thanks!";
  }
else{
  return "No bool, not cool.";
}
}

console.log(boolChecker(1000110110));
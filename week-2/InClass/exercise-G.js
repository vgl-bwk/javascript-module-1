var apolloCountdownMessage = "all engines running... LIFT-OFF!";
let timeLeft = 8;

while (timeLeft > 0){
    console.log(timeLeft);
    timeLeft = timeLeft - 1;
}
if (timeLeft === 0){
    console.log (0);
    console.log(apolloCountdownMessage);
}


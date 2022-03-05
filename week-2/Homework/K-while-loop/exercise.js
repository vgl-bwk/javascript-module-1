/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

let n = 10;
let initialValue = 1;

function sumTillNum(num){
	while (initialValue < num){
		console.log("Sum from 0 to " + initialValue + " is: " (initialValue + 1));
		initialValue = initialValue + 1;
}
	console.log("Sum from 0 to " + n + " is: " + n)
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));

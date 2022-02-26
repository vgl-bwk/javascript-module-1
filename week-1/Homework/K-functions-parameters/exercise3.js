function createGreeting(name){
    let greetingStart = "Hello ";
    let greetingClosure = ", and welcome to this javascript exercise!";
    return greetingStart + name + greetingClosure;
}
var greeting = createGreeting("Daniel");

console.log(greeting);
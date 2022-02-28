function createGreeting(name){
    let greetingStart = "Hello ";
    let greetingClosure = ", and welcome to this javascript exercise!";
    return greetingStart + name + greetingClosure;
}

console.log(createGreeting("Daniel"));
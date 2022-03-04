function userChecker (userName, userType){
    const superUser = userType === "admin" || userType === "manager"
    const firstChar = userName.charAt(0);
    const nameLength = userName.length;
    const validLength = nameLength >= 5 && nameLength <= 10

    if(superUser || (firstChar === firstChar.toUpperCase() && validLength)){
        return "Username Valid"
    }
    else{
        return "Username Invalid"
    }
}

console.log(userChecker("Anabella", "pleb"))
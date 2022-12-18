function test(stringOne, char, stringTwo) {
 
    let space = "";
 
    for (let i = 0; i < stringOne.length; i++) {
        let currentChar = stringOne[i];
        if (currentChar === "_") {
            space += char;
        } else {
            space += currentChar;
        }
    }
    if (space === stringTwo) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
 
 
}
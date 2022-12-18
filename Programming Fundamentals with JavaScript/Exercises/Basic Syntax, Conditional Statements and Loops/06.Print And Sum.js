function test(firstNumber, secondNumber) {
 
    let sum = 0;
    let space = ' ';
    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
 
        if (i === secondNumber) {
            space += `${i} `;
        } else {
            space += `${i} `;
        }
 
 
    }
    console.log(space);
    console.log(`Sum: ${sum}`)
}
function test1(number1, number2, str) {
    let sum;
 
    switch (str) {
        case 'multiply': sum = number1 * number2; break;
        case 'divide': sum = number1 / number2; break;
        case 'add': sum = number1 + number2; break;
        case 'subtract': sum = number1 - number2; break;
 
    }
 
   console.log(sum)
 
 
 
}
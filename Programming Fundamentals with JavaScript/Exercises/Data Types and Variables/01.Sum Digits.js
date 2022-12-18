function test(number) {
 
   let numberAsString = number.toString();
   let sumAllDigits = 0;
 
   for(let i = 0; i < numberAsString.length; i++){
      let currentDigit = Number(numberAsString[i]);
      sumAllDigits += currentDigit;
   }
console.log(sumAllDigits)
 
}
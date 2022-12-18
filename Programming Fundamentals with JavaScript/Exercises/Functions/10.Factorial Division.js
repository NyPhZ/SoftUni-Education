function password(integer, divider) {
    let array2 = [];
    let array1 = [];
    let sum1 = integer;
    let sum2= divider;
    for (let i = integer - 1; i > 0; i--) {
        array1.push(i);
    }
    for (let element of array1) {
        sum1 = element * sum1;
    }


    for (let g = divider - 1; g > 0; g--) {
        array2.push(g);
    }
    for (let element of array2) {
        sum2 = element * sum2;
    }

let result = sum1/sum2;

console.log(result.toFixed(2));


}
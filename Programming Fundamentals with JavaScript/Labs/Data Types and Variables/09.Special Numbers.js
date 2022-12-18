function test(num) {
    let sum = 0;
    let result = "";
 
    for (let i = 1; i <= num; i++) {
        i = i.toString();
        for (let o = 0; o < i.length; o++) {
            sum += Number(i[o]);
 
        }
        result = sum === 5 || sum === 7 || sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0;
 
    }
 
}
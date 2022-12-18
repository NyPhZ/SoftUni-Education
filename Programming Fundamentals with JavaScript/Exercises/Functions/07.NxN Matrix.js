function test1(n) {
 
    let matrix = [];
 
    for (let i = 0; i < n; i++) {
 
        let matrix2 = [];
 
        for (let o = 0; o < n; o++) {
            matrix2.push(n);
 
        }
      matrix.push(matrix2.join(' '))
 
    }
console.log(matrix.join('\n'))
 
}
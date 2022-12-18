function test(n) {
 
    for (let i = 1; i <= n; i++) {
        let space = " ";
 
        for (let l = 1; l <= i; l++) {
            space += `${i} `;
 
        }
        console.log(space)
    }
 
}
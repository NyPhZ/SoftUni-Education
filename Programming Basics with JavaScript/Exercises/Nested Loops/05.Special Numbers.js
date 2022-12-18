function test(input) {
    let n = Number(input[0]);
    let allSum = ``;
    for (let i = 1; i <= 9; i++) {
        for (let y = 1; y <= 9; y++) {
            for (let t = 1; t <= 9; t++) {
                for (let r = 1; r <= 9; r++) {
 
                    if (n % i === 0 && n % y === 0 && n % t === 0 && n % r === 0) {
                        allSum +=`${i}${y}${t}${r} `;
 
                    }
 
                }
            }
        }
    }
 
  console.log(allSum)
 
}
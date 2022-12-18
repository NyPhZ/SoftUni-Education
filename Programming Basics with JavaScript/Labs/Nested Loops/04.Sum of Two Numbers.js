function task(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let index = 0;
    let answer = false;
    let numOne = 0;
    let numTwo = 0;

    for (let i = startNum; i <= endNum; i++) {

        for (let g = startNum; g <= endNum; g++) {
            index++;
            if (i + g === magicNum) {
                numOne = i;
                numTwo = g;
                answer = true;
                break;

            }

            
        }
        if (answer) {
            break;

        }





    }
    if(answer){
        console.log(`Combination N:${index} (${numOne} + ${numTwo} = ${magicNum})`);

    }

    else{
console.log(`${index} combinations - neither equals ${magicNum}`);
    }
}
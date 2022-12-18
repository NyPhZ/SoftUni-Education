function test(input) {
    let index = 0;
    let i = Number(input[index]);
    index++;
     
    let sum = 0;
     
    while(sum < i){
    let num = Number(input[index]);
    index++;
     
    sum += num;
     
    }
    console.log(sum)
    }
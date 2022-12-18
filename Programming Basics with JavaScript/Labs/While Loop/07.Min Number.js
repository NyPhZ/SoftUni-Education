function test(input) {
    let index = 0;
    let i = input[index];
    index++;
     
    let maxNumber = Number.MAX_SAFE_INTEGER
     
    while(i !== "Stop"){
      let num = Number(i);
     
      if(maxNumber > num){
          maxNumber = num;
      }
     
      i = input[index];
      index++;
    }
    console.log(maxNumber)
     
    }
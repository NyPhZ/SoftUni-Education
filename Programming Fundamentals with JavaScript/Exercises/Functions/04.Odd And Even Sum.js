function oddAndEven(num){
    let index = 0;
    let StringNum = num.toString();
    let StringL = StringNum.length;
    let oddSum = 0;
    let evenSum =0;
    for(let i = index; i !== StringL;i++){
        let integer =Number (StringNum[i]);
       if(integer % 2 === 0){
    evenSum+=integer;
       }
       else{
           oddSum+=integer;
       }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
    }
function task(array) {
    let evenSum=0;
    let oddSum=0;
    
    for(let element of array){
        if(element % 2 ==0){
            evenSum+=element;
        }else{
            oddSum+=element;
        }
    
    }
    let finalSum=evenSum-oddSum;
    console.log(finalSum);
    }
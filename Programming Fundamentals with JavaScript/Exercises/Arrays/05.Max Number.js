function test1(array) {
 
    let arr = [];
    let arrL = array.length;
     
    for(let i = 0; i < arrL;i++){
     
        let numberOne = array[i];
        let isLagerest = true;
     
        for(let o = i + 1; o < arrL;o++){
     
            let numberTwo = array[o];
     
            if(numberOne <= numberTwo){
                isLagerest = false;
            }
        }
        if(isLagerest){
            arr.push(numberOne);
        }
    }
    console.log(arr.join(' '));
    }
function test1(array) {
 
    let sequence = [];
     
    for(let i = 0; i < array.length;i++){
        let currentSequence = []
        for(let o = i; o < array.length;o++){
            if(array[i] === array[o]){
                currentSequence.push(array[i])
            }else{
                break;
            }
        }
        if(currentSequence.length > sequence.length){
            sequence = currentSequence;
        }
    }
     
     
    console.log(sequence.join(' '));
     
     
    }
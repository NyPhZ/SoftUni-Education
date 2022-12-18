function testy(array1,array2) {
    for(let i = 0; i !== array1.length;i++){
    let element=array1[i];
    for(let g=0; g !== array2.length;g++){
        let object=array2[g];
    
        if(element === object){
            console.log(element);
        }
    }
    
    }
    
     
    }
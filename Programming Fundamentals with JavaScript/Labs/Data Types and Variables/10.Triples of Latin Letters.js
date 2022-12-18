function solve(num) {

    for(i=0;i!=num;i++){
    
    let letter1=String.fromCharCode(97+i);
    for(h=0;h!=num;h++){
    
        let letter2=String.fromCharCode(97+h)
    
        for(g=0;g!=num;g++){
    
            let letter3=String.fromCharCode(97+g)
            console.log(letter1+letter2+letter3);
            }
    
        }
    }
    
    }
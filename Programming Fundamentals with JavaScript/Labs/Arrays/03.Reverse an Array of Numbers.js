function football(n,inputArr) {
    let arr=[];
    let number=0
    for(let i=n - 1; i>=0; i--){
        number=inputArr[i]
        arr.push(number)
    }
    
    console.log(arr.join(" "));
    }
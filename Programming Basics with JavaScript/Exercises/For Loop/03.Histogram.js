function demo(input) {
    let numCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
     
    for(let i=1;i<=numCount;i++){
    let rightNumbers = Number(input[i]);
     
    if(rightNumbers < 200){
        p1++;
    }else if(rightNumbers <= 399){
        p2++; 
    }else if (rightNumbers <= 599){
        p3++;
    }else if (rightNumbers <=799){
        p4++;
    }else if (rightNumbers >= 800){
        p5++;
    }
    }
    // p1 = 12 / 20 * 100 = 60.00%
     
    console.log(`${(p1/numCount*100).toFixed(2)}%`)
    console.log(`${(p2/numCount*100).toFixed(2)}%`)
    console.log(`${(p3/numCount*100).toFixed(2)}%`)
    console.log(`${(p4/numCount*100).toFixed(2)}%`)
    console.log(`${(p5/numCount*100).toFixed(2)}%`)
     
    }
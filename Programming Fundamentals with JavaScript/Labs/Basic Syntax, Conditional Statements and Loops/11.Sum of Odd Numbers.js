function solve(n) {
    let index=1;
    let i = 1;
    let sum = 0;
    while(index <= n){
    console.log(i);
    sum=i+sum;
    ++index;
    i+=2;
    
    }
    console.log( `Sum: ${sum}`);
    }
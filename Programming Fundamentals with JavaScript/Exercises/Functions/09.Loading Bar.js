function test1(number) {
 
    let firstNumbers = '%'.repeat(number / 10);
    let secondNumbers = '.'.repeat(10 - firstNumbers.length);
 
    if(secondNumbers.length === 0){
 
    }else{
        console.log(`${number}% [${firstNumbers}${secondNumbers}]`);
        console.log('Still loading...');
    }
 
 
}
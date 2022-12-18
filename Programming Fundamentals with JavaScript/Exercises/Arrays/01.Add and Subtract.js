function testy(array) {
let arrayL=array.length;
let originalSum=0;
let sum2=0
for(let i = 0;i < array.length;i++){
    let currentNum = array[i];
    originalSum += array[i];

    if(currentNum % 2 ===0){
        array[i]+=i;

    }
    else{
        array[i]-=i;
        
    }
    sum2+= array[i];
}
console.log(array);
console.log(originalSum);
console.log(sum2);

}
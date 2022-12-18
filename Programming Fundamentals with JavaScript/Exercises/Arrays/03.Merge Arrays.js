function testy(array,array2) {
    let array3=[];
for(let i=0; i<array.length;i++){
    if(i % 2 === 0){
array3.push(Number(array[i])+Number(array2[i]))
    }
    else{
        array3.push(array[i]+array2[i])
    }
}
console.log(array3.join(" - "));
}
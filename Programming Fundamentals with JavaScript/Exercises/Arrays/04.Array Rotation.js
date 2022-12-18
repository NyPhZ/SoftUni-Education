function testy(array1,rotations) {
    let arrayL=array1.length;
    let array2=[];
    let counter=0;
while(counter!==rotations){
    let i=0;
    let element=array1[i];
    array1.push(element);
    array1.shift();
    counter++;
}



console.log(array1.join(" "));
}
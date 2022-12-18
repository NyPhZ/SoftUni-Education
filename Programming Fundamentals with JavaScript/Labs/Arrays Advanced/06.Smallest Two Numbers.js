function result(arr){

    function myArrayMin(array) {
        return Math.min.apply(null, array);
      }myArrayMin([30, 15, 50, 5]);


let minNumber = myArrayMin(arr);
let counter = 0;
let index = arr.indexOf(minNumber);
let finalArray = []
while(counter < 2){
    minNumber = myArrayMin(arr)
    index = arr.indexOf(minNumber)
    // console.log(minNumber);
    arr.splice(index,1);
    counter++;
    finalArray.push(minNumber);
    
}
console.log(finalArray.join(" "));
}
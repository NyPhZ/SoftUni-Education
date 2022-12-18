function solve(arr) {
 
    let index = 1;
    let end = arr.length;
    let text = arr[0];
 
    while(index < end) {
        if(arr[index] !== arr[index - 1]){
            text += arr[index];
        }
        index++;
    }
   console.log(text)
}
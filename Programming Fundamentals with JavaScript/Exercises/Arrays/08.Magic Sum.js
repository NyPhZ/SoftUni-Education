function maiko(arr, n){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            newArr = [];
            if (arr[i] + arr[j] === n){
                newArr.push(arr[i]);
                newArr.push(arr[j]);
                console.log(newArr.join(' '));
            }
        }
    }
}
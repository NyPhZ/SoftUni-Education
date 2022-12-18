function result(array) {
    let finalArray = [];
    var arr = array;
    while (arr.length !== 0) {
        if (arr.length !== 0) {
           let maximal = Math.max(...arr);
            let indexOfMaxi = arr.indexOf(maximal);
            finalArray.push(maximal);
            arr.splice(indexOfMaxi, 1);

        }

        if (arr.length !== 0) {
            let array = arr.join(" ");
           let minimal = Math.min(...arr);
            let indexOfMin = arr.indexOf(minimal);
            finalArray.push(minimal);
            arr.splice(indexOfMin, 1);

        }
    }
console.log(finalArray.join(" "));
}
function result(arr) {
    let uniqueArr = new Set(arr);

    let newArr = [uniqueArr];

    console.log(Array.from(uniqueArr).join(" "));
}
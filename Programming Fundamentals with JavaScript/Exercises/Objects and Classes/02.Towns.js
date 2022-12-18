function objects(input) {
    let i=0;
let newArray = input[i].split(" | ");
while(i < input.length){
    newArray = input[i].split(" | ");
    let obj1 = {}
    obj1.town = newArray[0];
    obj1.latitude = Number (newArray[1]).toFixed(2);
    obj1.longitude = Number (newArray[2]).toFixed(2);
    console.log(obj1);
    i++;
}
}
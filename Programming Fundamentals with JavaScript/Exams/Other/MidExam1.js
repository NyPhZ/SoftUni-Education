function solve(input) {
    let i = 0
    let days = Number(input[0]);
    let people = Number(input[1]);
    let energy = Number(input[2]);
    let personWater = Number(input[3]);
    let personFood = Number(input[4]);
    let nextLines = input.slice(5, 15);
    let totalWater = ((nextLines.length) * people) * personWater;
    let totalFood = ((nextLines.length) * people) * personFood;
    let newArray = []
    for(let el of nextLines){
        newArray.push(Number(el))
    }
    let everyDay = newArray[i];
for(i = 1;i <= days;i++){
    everyDay = newArray[i-1]
    energy = energy - everyDay;

if(i % 2 === 0){
    energy *= 1.05;
    totalWater *= 0.70;
    
}

else if(i % 3 === 0) {
    energy *= 1.10;
    totalFood =totalFood - (totalFood / people);
}

}

    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`)
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
    }
}
solve(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])

;

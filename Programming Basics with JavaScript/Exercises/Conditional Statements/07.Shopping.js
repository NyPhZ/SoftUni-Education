function shoping(input) {
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);
    let videoCardPrice = videoCardCount * 250;
    let processorPrice = processorCount * (videoCardPrice * 0.35);
    let ramPrice = (videoCardPrice * 0.10) * input[3];
let priceSum = videoCardPrice + processorPrice + ramPrice;


    if (videoCardCount > processorCount)
    priceSum = priceSum - (priceSum * 0.15)

    if ( priceSum <= budget)
    {
console.log(`You have ${(budget - priceSum).toFixed(2)} leva left!`)
    }

    else{
        console.log( `Not enough money! You need ${(priceSum - budget).toFixed(2)} leva more!`)
       
    }

}
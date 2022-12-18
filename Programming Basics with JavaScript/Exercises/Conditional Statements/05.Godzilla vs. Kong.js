function demo(input) {
    let budgedMovie = Number(input[0]);
    let statists = Number(input[1]);
    let priceClothes = Number(input[2]);
    let priceDecor = budgedMovie * 0.1;
    let clothesSum = statists * priceClothes;
    if (statists > 150) {
        clothesSum = clothesSum * 0.9;
    }
    let totalsum = priceDecor + clothesSum;
    
    if (budgedMovie >= totalsum) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budgedMovie - totalsum).toFixed(2)} leva left.`)
 
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalsum - budgedMovie).toFixed(2)} leva more.`)
 
    }
 
 
}

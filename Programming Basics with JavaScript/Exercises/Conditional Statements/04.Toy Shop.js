function demo(input) {
    let priceTrip = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let tedyBear = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let priceToys = puzzles * 2.60 + dolls * 3 + tedyBear * 4.10 + minions * 8.20 + trucks * 2;
    let allToysCount = puzzles + dolls + tedyBear + minions + trucks;
let discount = 0.0;
let finalPrice = priceToys - discount;

    if(allToysCount >= 50)
    discount = priceToys * 0.25;
    finalPrice = priceToys - discount;
    rent = finalPrice * 0.10;
    winings = finalPrice - rent;
if (winings >= priceTrip)

console.log(`Yes! ${(winings - priceTrip).toFixed(2)} lv left.`);

else {

    console.log(`Not enough money! ${(priceTrip - winings).toFixed(2)} lv needed.`)
}


}
function tasks(input) {
    let groupBudget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);
    let shipRent = 0;

    switch (season) {
        case "Spring":
            shipRent = 3000;
            break;
        case "Summer":
            shipRent = 4200;
            break;
        case "Autumn":
            shipRent = 4200;
            break;
        case "Winter":
            shipRent = 2600;
            break;

    }
    if (fishermans <= 6) {
        shipRent = shipRent * 0.90;
    }
    else if (fishermans >= 7 && fishermans <=11) {
        shipRent = shipRent * 0.85;
    }
    else if (fishermans >= 12) {
        shipRent = shipRent * 0.75;
    }

    if(fishermans % 2 == 0){
        if(season !="Autumn"){
        shipRent = shipRent * 0.95;
        }
    }

    if (shipRent <= groupBudget) {
        console.log(`Yes! You have ${(groupBudget - shipRent).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(shipRent - groupBudget).toFixed(2)} leva.`);
    }
}
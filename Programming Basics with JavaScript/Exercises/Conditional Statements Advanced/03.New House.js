function test(input) {
    let flower = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2])
    let priceEach = 0;
    let sum = 0;

    switch (flower) {

        case "Roses":
            priceEach = 5;
            sum = priceEach * flowerCount;
            if (flowerCount > 80) {
                sum = sum * 0.90;
            }
            break;
        case "Dahlias":
            priceEach = 3.80;
            sum = priceEach * flowerCount;
            if (flowerCount > 90) {
                sum = sum * 0.85;
            }
            break;
        case "Tulips":
            priceEach = 2.80;
            sum = priceEach * flowerCount;
            if (flowerCount > 80) {
                sum = sum * 0.85;
            }
            break;
        case "Narcissus":
            priceEach = 3;
            sum = priceEach * flowerCount;
            if (flowerCount < 120) {
                sum = sum * 1.15;
            }
            break;
        case "Gladiolus":
            priceEach = 2.50;
            sum = priceEach * flowerCount;
            if (flowerCount < 80) {
                sum = sum * 1.20;
            }
            break;
        default: console.log('error');



    }

    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flower} and ${(budget - sum).toFixed(2)} leva left.`);
    }

    else {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);

    }

}
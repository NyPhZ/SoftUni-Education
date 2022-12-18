function test(input) {
    let months = input[0];
    let night = Number(input[1]);
    let pricestudio = 0;
    let apartmentPrice = 0;
 
    if (months === "May" || months === "October") {
        pricestudio = 50;
        apartmentPrice = 65;
        if (night > 14) {
            pricestudio = pricestudio * 0.70;
            apartmentPrice = apartmentPrice * 0.90;
        }
        else if (night > 7) {
            pricestudio = pricestudio * 0.95;
        }
 
    }
    else if (months === "June" || months === "September") {
        pricestudio = 75.20;
        apartmentPrice = 68.70;
        if (night > 14) {
            pricestudio = pricestudio * 0.80;
            apartmentPrice = apartmentPrice * 0.90;
        }
    }
    else if (months === "July" || months === "August") {
        pricestudio = 76;
        apartmentPrice = 77;
        if (night > 14) {
            apartmentPrice = apartmentPrice * 0.90;
        }
    }
    console.log(`Apartment: ${(apartmentPrice * night).toFixed(2)} lv.`);
    console.log(`Studio: ${(pricestudio * night).toFixed(2)} lv.`);
 
 
 
}
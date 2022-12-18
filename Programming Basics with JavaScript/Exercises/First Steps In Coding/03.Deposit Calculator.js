function demo(input) {
    let depositsum = Number(input[0]);
    let months = Number(input[1]);
    let yearly = Number(input[2]);
    let yearlySum = Number((depositsum * yearly)/100);
    let percentMonth = Number(yearlySum / 12);
    let sum = depositsum + months * percentMonth;
    console.log(sum)
}
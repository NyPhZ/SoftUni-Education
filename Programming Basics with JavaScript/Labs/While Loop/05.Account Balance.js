function test(input) {
    let index = 0;
    let depositSum = input[index];
    let bank = 0;
    index++;
    while (depositSum !== "NoMoreMoney") {
        let money = Number(depositSum);

        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        bank += money;
        depositSum=input[index];
        index++;
        console.log(`Increase: ${money.toFixed(2)}`);
    }
console.log(`Total: ` + bank.toFixed(2));
}
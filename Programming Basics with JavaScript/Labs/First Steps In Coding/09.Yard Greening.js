function greenin(input) {
    let pricePerKwm = (input[0]);
    sum = pricePerKwm * 7.61
    discount = sum * 0.18
    priceDiscount = sum - discount
    console.log(`The final price is: ${priceDiscount} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
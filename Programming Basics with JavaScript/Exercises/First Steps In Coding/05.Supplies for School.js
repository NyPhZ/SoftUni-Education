function demo(input){
    let Pricepens = (input[0]) * 5.80 ;
    let Pricemarkers = (input[1])*7.20;
    let cleanerPrice = (input[2])*1.20;
    let allPrice = Pricepens + Pricemarkers + cleanerPrice;
    let discount = allPrice -(allPrice*0.25)
    console.log(discount)
    }
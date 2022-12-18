function test(number, precision) {
    if(precision > 15){
        precision = 15;
    }

    let finalNumber = Number(number.toFixed(precision))



    console.log(parseFloat(finalNumber))



   }
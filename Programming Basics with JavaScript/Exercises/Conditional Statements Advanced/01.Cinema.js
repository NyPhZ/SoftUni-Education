function test(input) {
    let condition = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if (condition == "Premiere") {
        income = (rows * columns * 12.00).toFixed(2);
    }

    if (condition == "Normal") {
        income = (rows * columns * 7.50).toFixed(2);
    }


    if (condition == "Discount") {
        income = (rows * columns * 5).toFixed(2);
    }


    console.log(income);







}
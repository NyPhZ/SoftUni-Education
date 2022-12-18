function demo(input){
    let chickenMenus = (input[0])*10.35;
    let fishMenus = (input[1])*12.40;
    let vegeMenus = (input[2])*8.15;
    let allSum = chickenMenus + fishMenus + vegeMenus;
    let desertPrice = 0.2 * allSum; 
    let allPrice = allSum + desertPrice + 2.50;
    console.log(allPrice)
    }
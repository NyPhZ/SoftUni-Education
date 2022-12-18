function demo(input) {
    let lilyAge = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
     
    let toyCount = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let earnedMoney = 10;
     
    for(let i = 1; i <= lilyAge;i++){
       
        if(i % 2 === 0){
         savedMoney += earnedMoney;
         stolenMoney++;
         earnedMoney+=10;
        }else{
            toyCount++;
        }
    }
    let allToysMoney = toyCount * toyPrice;
    let allSavedMoney = (allToysMoney + savedMoney) - stolenMoney;
     
     
     if(allSavedMoney >= washerPrice){
        console.log(`Yes! ${(allSavedMoney - washerPrice).toFixed(2)}`)
     }
     else{
         console.log(`No! ${(washerPrice - allSavedMoney).toFixed(2)}`)
     }
     
     
     
    }
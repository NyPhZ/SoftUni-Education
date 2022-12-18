function demo(input){
    let numberPages = (input[0]);
    let pagesPerHour = (input[1]);
    let numberDays = (input[2]);
    let book = numberPages / pagesPerHour;
    let neededHours = book / numberDays ;
    console.log(neededHours)
    
    }
function shoping (input) {
    let serial = (input[0]);
    let episodeLenght = Number(input[1]);
    let breakLenght = Number(input[2]);
    
    let launchTime = breakLenght * 1 / 8;
    let breakTime = breakLenght * 1 / 4;
    let remainingTime = breakLenght - launchTime - breakTime;
    
    if (remainingTime >= episodeLenght){
     let freeTime = remainingTime - episodeLenght;
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(freeTime)} minutes free time.`);
    }
    
    else  {
        let freeTime = episodeLenght - remainingTime;
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(freeTime)} more minutes.`);
    }
    
    
    }
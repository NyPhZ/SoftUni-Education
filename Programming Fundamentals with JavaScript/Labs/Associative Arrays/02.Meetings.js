function associativeArrays(list) {
    let freeDays = [];
    let finalObj = {};
    for(let meetings of list){
            let DandP = meetings.split(" ")
            var weekDay = DandP[0];
            var person = DandP[1];
    if(freeDays.includes(weekDay)){
        console.log(`Conflict on ${weekDay}!`);
    }
    else{
    console.log(`Scheduled for ${weekDay}`);
    finalObj[weekDay] = person;
    }  
    freeDays.push(weekDay);
    }
    for(let [key,value] of Object.entries(finalObj)){
        console.log(`${key} -> ${value}`);
    }
    
    }
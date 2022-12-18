function solve(input) {

    let vipGuests = [];
    let normalGuests = [];
    let reservation = input.shift();
    
    while(reservation !== 'PARTY') {
        if(/^\d+/.test(reservation)){
            vipGuests.push(reservation)
        }else{
            normalGuests.push(reservation);
        }
         reservation = input.shift();
    }
    
    for(let guest of input){
        if(vipGuests.indexOf(guest) >= 0){
            vipGuests.splice(vipGuests.indexOf(guest), 1);
        }
       if(normalGuests.indexOf(guest) >= 0){
        normalGuests.splice(normalGuests.indexOf(guest), 1);
    }  
    
    }
    console.log(vipGuests.length + normalGuests.length);
    vipGuests.forEach(el => console.log(el));
    normalGuests.forEach(el => console.log(el));
    
    
    }
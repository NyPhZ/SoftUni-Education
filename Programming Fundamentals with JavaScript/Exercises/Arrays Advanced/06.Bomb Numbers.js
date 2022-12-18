function solve(sequance,Sbomb) {
 
    let specialNumber = Sbomb[0];
    let bombPower = Sbomb[1];
     
     
    while(sequance.includes(specialNumber)){
        let i = sequance.indexOf(specialNumber);
        let elesRemove = bombPower * 2 + 1;
        let index = i - bombPower;
     
     
      if(index < 0) {
        elesRemove += index;
        index = 0;
      }
     
         sequance.splice(index,elesRemove);
     
    }
     
    console.log(sequance.reduce((a, b) => a + b,0));
     
    }
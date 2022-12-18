function test(input) {
 
    let i = 0;
     let command = input[i];
     i++;
     
     while(command !== "End"){
      let destination = command;
      let budget = Number(input[i]);
      i++;
      let averageSum = 0;
     
      while(averageSum < budget){
       let money = Number(input[i]);
       i++;
     
       averageSum += money;
     
     
      }
     
       console.log(`Going to ${destination}!`);
       command = input[i];
       i++;
     }
     
    }
function test1(arr) {
 
    let sum = [];
     
    for(let el of arr) {
       let command = el.split(' ');
       let name = command[0];
     
       if(command.length === 3) {
          if (sum.includes(name)) {
             console.log(`${name} is already in the list!`);
          }else{
             sum.push(name);
          }
       }else {
          if(!sum.includes(name)) {
             console.log(`${name} is not in the list!`);
          }else{
             let i = sum.indexOf(name);
             sum.splice(i, 1);
          }
       }
    }
    console.log(sum.join('\n'));
     
    }
function test1(arr) {
 
   let passengers = arr.shift().split(' ').map(Number);
   let capacity = Number(arr.shift());
 
   for (let i = 0; i < arr.length; i++) {
 
      let restPass = arr[i].split(' ');
 
      if (restPass[0] === 'Add') {
         passengers.push(Number(restPass[1]));
      } else {
         for (let o = 0; o < passengers.length; o++) {
            if (Number(restPass[0]) + passengers[o] <= capacity) {
               passengers[o] += Number(restPass[0]);
               break;
            }
         }
      }
   }
 
 
console.log(passengers.join(' '))
 
 
 
}
function test(numberArr) {
 
    let space = [];
  
    for(let i = numberArr.length - 1;i >= 0;i--){
       space.push(numberArr[i]);
    }
   console.log(space.join(" "))
  
 }
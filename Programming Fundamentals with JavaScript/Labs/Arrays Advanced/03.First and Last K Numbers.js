function test1(array) {
 
    let k = array.shift();
  
    let firstEle = array.slice(0,k);
    let secondEle = array.slice(-k);
  
    console.log(firstEle.join(' '));
    console.log(secondEle.join(' '));
  
  
  
 }
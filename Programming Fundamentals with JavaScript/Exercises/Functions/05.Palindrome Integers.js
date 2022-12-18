function test1(array) {
 
    for(let i of array) {
        let forward = String(i);
        let backward = String(i).split('').reverse().join('');
 
       if(forward === backward) {
 
        console.log("true")
       }else{
           console.log("false")
       }
 
 
 
    }
 
 
}
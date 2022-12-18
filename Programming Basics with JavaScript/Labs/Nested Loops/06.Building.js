function test(input) {
 
    let floor = Number(input[0]);
    let room = Number(input[1]);
 
    for(let a = floor; a > 0;a--){
        let i = "";
     for(let b = 0; b < room;b++){
         if(a === floor){
        i += "L" + a + b + " ";
 
         }else if (a % 2 === 0){
           i += "O" + a + b + " ";
 
         }else {
 
            i += "A" + a + b + " ";
         }
     }
 
   console.log(i)
 
    }
 
 
 
 
}
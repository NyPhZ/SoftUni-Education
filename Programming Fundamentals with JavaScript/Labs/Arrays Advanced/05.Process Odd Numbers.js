function test1(array) {
 
    let element1 = array.filter((ele,i) => i % 2 == 1);
     
    let element2 = element1.map(x => x * 2);
     
    let reverse = element2.reverse();
    console.log(reverse.join(' '))
     
     
     
    }
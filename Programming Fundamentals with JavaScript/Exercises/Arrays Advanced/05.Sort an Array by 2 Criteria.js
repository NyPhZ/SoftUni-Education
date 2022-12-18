function test1(arr) {
 
    let array = arr.sort((a,b) => {
       return a.length - b.length || a.localeCompare(b);
    })
 console.log(array.join('\n'))
  
 }
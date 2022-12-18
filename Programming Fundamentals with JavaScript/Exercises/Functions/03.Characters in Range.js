function test1(char1 , char2) {
 
    let firstChar = Math.min(char1.charCodeAt(0),char2.charCodeAt(0));
    let secondChar = Math.max(char1.charCodeAt(0),char2.charCodeAt(0));
     
    let rangedChars = [];
     
    for(let i = firstChar + 1;i < secondChar;i++){
        let o = String.fromCharCode(i);
        rangedChars.push(o);
    }
    console.log(rangedChars.join(' '))
    }
function test(input) {
    let index = 0;
    let name = input[index];
    index++;
     
    let password = input[index];
    index++;
     
    let pass = input[index];
    index++;
     
    while(pass !== password){
    pass = input[index];
    index++;
     
    }
    console.log(`Welcome ${name}!`)
     
    }
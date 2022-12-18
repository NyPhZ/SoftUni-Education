function test(input) {
    let name = input[0];
    let Lpoints = Number(input[1]);
 
    for (let i = 3; i < input.length; i++) {
        if (i % 2 !== 0) {
            let All = input[i].length * Number(input[i + 1]) / 2;
            Lpoints += All;
        }
        if (Lpoints > 1250.5) {
            break;
        }
    }
    if (Lpoints < 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - Lpoints).toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${Lpoints.toFixed(1)}!`);
    }
 
 
}
function task(input) {
    let totalGroups = input[0];
    let musalaTotal = 0;
    let monblanTotal = 0;
    let kilimanjaroTotal = 0;
    let k2Total = 0;
    let everestTotal = 0
    let totalP = 0;
    for (let i = 1; i < input.length; i++) {
        let group = input[i];
        if (group <= 5) {
            musalaTotal += Number(group);
        }

        if (group > 5 && group <= 12) {
            monblanTotal += Number(group);
        }

        if (group > 12 && group <= 25) {
            kilimanjaroTotal += Number(group);
        }

        if (group > 25 && group <= 40) {
            k2Total += Number(group);
        }

        if (group > 40) {
            everestTotal += Number(group);
        }
        totalP += Number(group);
    }
    console.log(`${Number(musalaTotal/totalP*100).toFixed(2)}%`);
    console.log(`${Number(monblanTotal/totalP*100).toFixed(2)}%`);
    console.log(`${Number(kilimanjaroTotal/totalP*100).toFixed(2)}%`);
    console.log(`${Number(k2Total/totalP*100).toFixed(2)}%`);
    console.log(`${Number(everestTotal/totalP*100).toFixed(2)}%`);


}
task(["5",

"25",

"41",

"31",

"250",

"6"])
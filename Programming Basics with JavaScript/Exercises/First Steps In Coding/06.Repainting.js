function main(input){
    let nylonM2 = Number(input[0])
    let paintLt = Number(input[1])
    let razreditel = Number(input[2])
    let hours = Number(input[3])
    
    let nylon = (nylonM2 + 2) * 1.50;
    let paintSum = paintLt + (paintLt/10);
    let pntSum = paintSum * 14.50;
    let razreditelSum = razreditel * 5.00;
    let torbichki = 0.40;
    let materialSum = nylon + pntSum + razreditelSum + torbichki;
    let workSum = (materialSum * 0.3) * hours;
    let sum = materialSum + workSum;
    console.log(sum)
    
    
    
    }
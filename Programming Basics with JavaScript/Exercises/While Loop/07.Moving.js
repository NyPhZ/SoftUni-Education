function test(input) {
 
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
 
    let freeSpace = width * length * height;
    let index = 3;
    let i = input[index];
 
    while (i !== `Done`) {
        let numberBoxes = Number(i);
        freeSpace -= numberBoxes;
 
        if (freeSpace < 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        index++;
        i = input[index];
    }
    if (freeSpace >= 0) {
 
        console.log(`${freeSpace} Cubic meters left.`);
 
    }
 
 
}
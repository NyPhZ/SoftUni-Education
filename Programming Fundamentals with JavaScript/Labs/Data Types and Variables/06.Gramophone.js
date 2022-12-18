function test(bName,aName,sName) {
    let time=(bName.length*aName.length)* sName.length/2;
    
    let rotations=Math.ceil(time/2.5);
    console.log(`The plate was rotated ${rotations} times.`
    );
    }
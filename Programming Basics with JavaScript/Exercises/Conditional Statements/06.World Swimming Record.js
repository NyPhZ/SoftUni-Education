function demo(input) {
    let recordSecs = (input[0]);
    let distanceMeters = (input[1]);
    let timeOneMeter = (input[2]);
    let Swimed = distanceMeters * timeOneMeter;
    let slowDown = (Math.floor(distanceMeters / 15)) * 12.5;
    let totalTime = Swimed + slowDown;

    if (totalTime < recordSecs) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
        
    }


    else {
        console.log(`No, he failed! He was ${(totalTime - recordSecs).toFixed(2)} seconds slower.`);
    }

  






}
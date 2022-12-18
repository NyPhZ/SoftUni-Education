function aquarium (input){
    let lenght = Number (input[0]);
    let width = Number (input[1]);
    let height = Number (input[2]);
    let percentage = Number (input[3]);
    let aquariumSize = lenght * width * height;
    let sizeLitters = aquariumSize * 0.001;
    let littersNeeded = sizeLitters * (1-0.17);
    
    console.log(littersNeeded)
    
    
    }
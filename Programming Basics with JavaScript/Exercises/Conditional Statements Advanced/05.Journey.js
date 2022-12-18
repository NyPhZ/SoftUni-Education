function trip(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let place = 0;
    let spendSum = 0;
if( budget <= 100){
    console.log(`Somewhere in ${"Bulgaria"}`);
    
     if(season == "summer"){
         place = "Camp";
         spendSum = budget * 0.30;

         console.log(`${place} - ${(spendSum).toFixed(2)}`);
     }

     if(season == "winter"){
        place = "Hotel";
        spendSum = budget * 0.70;

        console.log(`${place} - ${(spendSum).toFixed(2)}`);
    }
}

// -------------------------------------------------------------

if(budget >100 && budget <= 1000){
    console.log(`Somewhere in ${"Balkans"}`);
    
     if(season == "summer"){
         place = "Camp";
         spendSum = budget * 0.40;

         console.log(`${place} - ${(spendSum).toFixed(2)}`);
     }

     if(season == "winter"){
        place = "Hotel";
        spendSum = budget * 0.80;

        console.log(`${place} - ${(spendSum).toFixed(2)}`);
    }
}

// -----------------------------------------------------------

if( budget > 1000){
    console.log(`Somewhere in ${"Europe"}`);

        place = "Hotel";
        spendSum = budget * 0.90;

        console.log(`${place} - ${(spendSum).toFixed(2)}`);
    
}

}
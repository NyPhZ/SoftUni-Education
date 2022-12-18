function test(input) {
    let tournamentNumber = Number(input.shift());
    let allPoints = Number(input.shift());
 
    let currentPoints = 0;
    let points = 0;
    let winnerCount = 0;
    let stageInTournament = input.shift();
 
    for (let i = 1; i <= tournamentNumber; i++) {
 
        if (stageInTournament == `W`) {
            points = 2000;
            winnerCount++;
        } else if (stageInTournament == `F`) {
            points = 1200;
        } else if (stageInTournament == `SF`) {
            points = 720;
        }
        allPoints += points;
        currentPoints += points;
        stageInTournament = input.shift();
    }
    let averagePoints = currentPoints / tournamentNumber;
    let winnerPercent = winnerCount / tournamentNumber * 100;
 
    console.log(`Final points: ${allPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
 
    console.log(`${winnerPercent.toFixed(2)}%`);
 
}
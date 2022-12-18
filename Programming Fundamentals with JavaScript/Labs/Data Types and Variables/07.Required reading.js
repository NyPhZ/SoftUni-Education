function solve(pagesNumber,pagesPerHour,reqDays) {
    let neededTime = pagesNumber / pagesPerHour;
    let hoursPerDay = neededTime / reqDays;
    console.log(hoursPerDay);
    }
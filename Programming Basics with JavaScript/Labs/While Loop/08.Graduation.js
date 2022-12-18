function test(input) {
    let index = 0;
    let name = input[index];
    index++;
 
    let i = 1;
    let passGrade = 0;
    let deGrade = 0;
    let isExcluded = false;
    while (i <= 12) {
        let grade = Number(input[index]);
        index++;
 
        if (grade < 4.00) {
            deGrade++;
         if (deGrade > 1) {
            isExcluded = true;
            console.log(`${name} has been excluded at ${i} grade`)
            break;
         }
         continue;
        }
 
        passGrade += grade;
        i++;
    }
 
    if (!isExcluded) {
        let averageGrade = passGrade / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
 
    }
 
 
 
}
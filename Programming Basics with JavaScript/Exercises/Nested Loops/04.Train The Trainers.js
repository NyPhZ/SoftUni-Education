function task(input) {
    let pCounter = 1;
    let gCounter = 0;
    let trainers = Number(input[0]);
    let presentation = (input[pCounter]);
    let grade = input[gCounter];
    let grades = 0;
    let condition = true;
    let gradeCounter = 0;
    let tempCounter = 0;
    let gradesTwo = 0;

    while (presentation !== "Finish") {
        gCounter++;
        presentation = input[pCounter];
        if (presentation !== "Finish") {
            condition = true;
        }
        while (condition) {
            gCounter++;
            grade = Number(input[gCounter]);
            grades += grade;
            gradesTwo += grade;
            gradeCounter++;
            tempCounter++;
            if (tempCounter == trainers) {
                condition = false;
                tempCounter = 0;
                console.log(`${presentation} - ${(((grades.toFixed(2))) / trainers).toFixed(2)}.`);
                pCounter += trainers;
                pCounter++;
                grades = 0;
                break;
            }

            }
        
        if (presentation == "Finish") {
            console.log(`Student's final assessment is ${(gradesTwo / gradeCounter).toFixed(2)}.`);
            break;}
    }

}
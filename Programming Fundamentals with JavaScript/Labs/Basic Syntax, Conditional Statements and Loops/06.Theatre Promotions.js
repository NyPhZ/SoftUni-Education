function solve(type, age) {
    ticket = 0;
    if (age >= 0 && age <= 18) {
        if (type === "Weekday") {
            ticket = 12;
            console.log(ticket + "$");
        }
        if (type === "Weekend") {
            ticket = 15;
            console.log(ticket + "$");
        }
        if (type === "Holiday") {
            ticket = 5;
            console.log(ticket + "$");
        }
    }


    if (age > 18 && age <= 64) {
        if (type === "Weekday") {
            ticket = 18;
            console.log(ticket + "$");
        }
        if (type === "Weekend") {
            ticket = 20;
            console.log(ticket + "$");
        }
        if (type === "Holiday") {
            ticket = 12;
            console.log(ticket + "$");
        }
    }

    if (age > 64 && age <= 122) {
        if (type === "Weekday") {
            ticket = 12;
            console.log(ticket + "$");
        }
        if (type === "Weekend") {
            ticket = 15;
            console.log(ticket + "$");
        }
        if (type === "Holiday") {
            ticket = 10;
            console.log(ticket + "$");
        }
    }

else if(age < 0 || age > 122){
    console.log("Error!");
}


}
function test(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    let numberTabs = input.length;

    for (let i = 2; i < numberTabs; i++) {
        let webTab = input[i];
        switch (webTab) {
            case 'Facebook': salary -= 150;
                break;

            case 'Instagram': salary -= 100;

                break;

            case 'Reddit': salary -= 50;

                break;
        }

    }
    if (salary > 0) {
        console.log(salary);
    }

    else {
        console.log("You have lost your salary.");
    }
}
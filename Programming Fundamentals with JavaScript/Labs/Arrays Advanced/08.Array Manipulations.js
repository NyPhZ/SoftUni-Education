function result(tasky) {
    let arrayMain = tasky[0].split(" ").map(Number);
    let index = 1;
    // let command = tasky[index].split(" ");
   while(index < tasky.length){
     let command = tasky[index].split(" ");
        if (command[0] === 'Add') {
            arrayMain.push(Number(command[1]))
        }

        if (command[0] === 'Remove') {
            let cmdNum = (Number(command[1]));
            if (arrayMain.includes(cmdNum)) {
                let indexNum = arrayMain.indexOf((Number(command[1])));
                arrayMain.splice(indexNum, 1)
            }

        }
        if (command[0] === 'RemoveAt') {
            let indexNum = (Number(command[1]));
            arrayMain.splice(indexNum, 1)
        }


        if (command[0] === 'Insert') {
            let num = (Number(command[1]))
            let indexNum = (Number(command[2]));
            arrayMain.splice(indexNum, 0, num)
        }

        index++;

    
    }
    console.log(arrayMain.join(" "));
}
function associativeArrays(list) {
    let toLowerCase = list.toLowerCase();
    let array = toLowerCase.split(" ");
    let mainObj = {};
    let finalArr = [];
    for (let el of array) {
        if (mainObj.hasOwnProperty(el) === false) {
            mainObj[el] = 0;
        }
        if (mainObj.hasOwnProperty(el)) {
            for (let key of Object.keys(mainObj)) {
                if (key === el) {
                    mainObj[el] += 1;
                    break;
                }
            }
        }
    }
    
    for(let key of Object.keys(mainObj)){
        if(mainObj[key] % 2 !== 0){
            finalArr.push(key);
        }
    }

    console.log(finalArr.join(" "));
}
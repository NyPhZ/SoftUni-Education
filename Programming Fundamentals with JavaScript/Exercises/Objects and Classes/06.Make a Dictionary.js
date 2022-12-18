function solve(array) {
 
    let bigObject = {};
     
    for(let ele of array) {
        let obj = JSON.parse(ele);
        bigObject = Object.assign(bigObject,obj);
    }
     
    let sortedObj = Object.keys(bigObject);
    sortedObj.sort((a,b) => a.localeCompare(b));
     
     
    for(let terms of sortedObj){
        let newDefi = bigObject[terms];
        console.log(`Term: ${terms} => Definition: ${newDefi}`);
    }
     
    }
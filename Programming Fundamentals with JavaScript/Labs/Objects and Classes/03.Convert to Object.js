function objects(jsonString) {
    let person = JSON.parse(jsonString);
    for(let key in person){
      console.log(`${key}: ${person[key]}`)
    }
    }
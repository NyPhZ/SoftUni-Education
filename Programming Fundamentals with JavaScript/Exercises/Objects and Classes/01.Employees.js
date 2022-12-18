function objects(employees) {
  let objectList = {};
for(person of employees){
objectList[person] = person.length;
}
let entries = Object.entries(objectList);
for(let [key,value] of entries){
  console.log(`Name: ${key} -- Personal Number: ${value}`);
}

}
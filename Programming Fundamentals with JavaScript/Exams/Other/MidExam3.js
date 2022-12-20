function solve(input) {
    let i = 0; 
    let array = input[0].split("&");
    let commands = input[i].split(" | ");
while(commands != "Done"){
    i++;
    commands = input[i].split(" | ");
    let CMD = commands[0];
    let CMDBook = commands[1];
    let CMDBook2 = commands[2];

if(CMD === "Add Book"){
    let checkThere = array.includes(CMDBook);
    if(checkThere === false){
        array.unshift(CMDBook);
    }
}

if(CMD === "Take Book"){
    let bookId = array.indexOf(CMDBook);
    if(bookId >= 0){
    array.splice(bookId,1)}
}

if(CMD === "Swap Books"){
let book1Id = array.indexOf(CMDBook);
let book2Id = array.indexOf(CMDBook2);
if(book1Id >= 0 && book2Id >= 0){
    array.splice(book1Id,1,CMDBook2);
    array.splice(book2Id,1,CMDBook);
}
}

if(CMD === "Insert Book"){
    let checkThere = array.includes(CMDBook);
    if(checkThere === false){
        array.push(CMDBook);
    }
}

if(CMD === "Check Book"){
    let givenId = Number(CMDBook);
    if(givenId <= array.length){
        console.log(array[givenId]);
}
}


}
array=array.join(", ")
console.log(array)
}



solve(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])

;


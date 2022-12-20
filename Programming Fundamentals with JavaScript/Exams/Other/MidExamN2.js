function solve(input) {
let array = input[0].split(" ");
let newArr = [];
for(let el of array){
    newArr.push(Number(el));
}
let i = 1;
let command = input[i].split(" ");
let cmd1 = command[0];
let cmd2 = command[1];
let cmd3 = command[2];
while (cmd1 !== "Finish"){
    command = input[i].split(" ");
    cmd1 = command[0];
    cmd2 = command[1];
    cmd3 = command[2];
if(cmd1 === "Add"){
    newArr.push(Number(cmd2))
}
if (cmd1 === "Remove"){
    let removerId = newArr.indexOf(Number(cmd2));
    newArr.splice(removerId,1)
}

if(cmd1 === "Replace"){
    let removerId2 = newArr.indexOf(Number(cmd2));
    newArr.splice(removerId2,1,Number(cmd3));
}

if(cmd1 === "Collapse"){
for(let el of newArr){
    if(el < cmd2){
        let elID = newArr.indexOf(el);
        newArr.splice(elID,1,)
    }
}
}
i++;
}

console.log(newArr.join(" "));


}
solve(["1 20 -1 10",
"Collapse 8",
"Finish"]);
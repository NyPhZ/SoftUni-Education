function solve(arr) {
 
    let extractedFiles = arr.split('\\');
    let names = extractedFiles[extractedFiles.length - 1].split('.');
    let ex = names.pop();
 
    names = names.join('.');
 
    console.log(`File name: ${names}`);
    console.log(`File extension: ${ex}`);
}
function solve(word, sentence) {
 
    let wordsToReveal = word.split(', ');
    let sentenceX = sentence.split(' ');
    let sum = '';
 
    for (let ele of wordsToReveal) {
 
        for (let words of sentenceX) {
            if (words.includes('*') && words.length === ele.length) {
                sentence = sentence.replace(words,ele);
            }
        }
 
    }
console.log(sentence)
}
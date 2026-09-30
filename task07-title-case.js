
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function titleCase(str) {
    let lowerStr = str.toLowerCase();
    let words = lowerStr.split(' ');
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];

        if (currentWord.length > 0) {
            let capitalizedWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
            newWords.push(capitalizedWord);
        } else {
            newWords.push(currentWord);
        }
    }

    return newWords.join(' ');
}

rl.question('Enter a sentence: ', s => {
    console.log(titleCase(s));
    rl.close();
});
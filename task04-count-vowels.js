const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU"; 
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; 
        if (vowels.includes(char)) {
            count++; 
        }
    }
    return count;s
}

rl.question('Enter a string: ', s => {
    console.log(countVowels(s));
    rl.close();
});

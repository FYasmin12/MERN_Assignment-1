const rl=require('readline').createInterface({input:process.stdin,output:process.stdout});
function countVowels(str){const m=str.match(/[aeiou]/gi);return m?m.length:0}
rl.question('Enter a string: ',s=>{console.log(countVowels(s));rl.close()});

const rl=require('readline').createInterface({input:process.stdin,output:process.stdout});
function reverseString(str){return str.split('').reverse().join('')}
rl.question('Enter a string: ',s=>{console.log(reverseString(s));rl.close()});

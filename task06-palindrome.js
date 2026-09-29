const rl=require('readline').createInterface({input:process.stdin,output:process.stdout});
function isPalindrome(str){
const s=str.toLowerCase().replace(/[^a-z0-9]/g,'');
let i=0,j=s.length-1;
while(i<j){if(s[i++]!==s[j--])return false}
return true;
}
rl.question('Enter a phrase: ',s=>{console.log(isPalindrome(s));rl.close()});

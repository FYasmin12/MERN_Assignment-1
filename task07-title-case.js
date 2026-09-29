const rl=require('readline').createInterface({input:process.stdin,output:process.stdout});
function titleCase(str){
return str.toLowerCase().split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
}
rl.question('Enter a sentence: ',s=>{console.log(titleCase(s));rl.close()});

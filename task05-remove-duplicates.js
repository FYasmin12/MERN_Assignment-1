const rl=require('readline').createInterface({input:process.stdin,output:process.stdout});
function removeDuplicates(arr){return [...new Set(arr)]}
rl.question('Enter values separated by commas: ',s=>{
const arr=s.split(',').map(x=>x.trim());
console.log(removeDuplicates(arr));
rl.close();
});

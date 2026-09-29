const rl=require('readline').createInterface({input:process.stdin,output:process.stdout});
function findMax(arr){return Math.max(...arr)}
rl.question('Enter numbers separated by commas: ',s=>{
const arr=s.split(',').map(Number);
console.log(findMax(arr));
rl.close();
});

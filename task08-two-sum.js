const rl=require('readline').createInterface({input:process.stdin,output:process.stdout});
function twoSum(nums,target){
const map=new Map();
for(let i=0;i<nums.length;i++){
const need=target-nums[i];
if(map.has(need))return [map.get(need),i];
map.set(nums[i],i);
}
return null;
}
rl.question('Enter numbers separated by commas: ',a=>{
rl.question('Enter target: ',t=>{
console.log(twoSum(a.split(',').map(Number),Number(t)));
rl.close();
});
});

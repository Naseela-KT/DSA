function MinMax(arr){
    let sum=0;
   for(let i=0;i<arr.length;i++){
       sum+=arr[i]
   }
   return sum;
}

console.log(MinMax([2,4,1,2,5,10,3,6,2,3,9]))
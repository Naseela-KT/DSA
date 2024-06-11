function findMissingNumber(arr){
    const n=arr.length+1;
    const expectedSum=((n*(n+1))/2);
    const sum=arr.reduce((acc,curr)=>acc+curr,0)
    return expectedSum-sum
}

console.log(findMissingNumber([1,2,3,5,6,7,8]))
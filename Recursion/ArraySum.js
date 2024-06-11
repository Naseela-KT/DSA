function arraySum(arr){
    if(arr.length<1){
        return 0;
    }
    let first=arr[0];
    let remaining=arr.slice(1);
    return first+arraySum(remaining)
}


console.log(arraySum([1,2,3,4,5]))
function lastOccurrence(arr,target){
    let left=0;
    let right=arr.length-1;
    let result=-1
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]==target){
            result=mid;
            left=mid+1
        }else if(target<arr[mid]){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return result;
}

console.log(lastOccurrence([1,2,3,4,5,6,7,9,9],9))
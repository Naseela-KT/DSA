function binarySearch(arr,target,left=0,right=arr.length-1){
    if(arr.length<1){
        return -1
    }
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]==target){
            return mid
        }else if(target<arr[mid]){
            return binarySearch(arr,target,left,mid-1)
        }else{
             return binarySearch(arr,target,mid+1,right)
        }
    }
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9],8))
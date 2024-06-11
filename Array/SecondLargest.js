function secondLargest(arr){
    let max1=arr[0];
    let max2=arr[0];
    for(let item of arr){
        if(item>max1){
            max2=max1;
            max1=item
        }else if(item>max2){
            max2=item;
        }
    }
    return {max1:max1,max2:max2}
}

console.log(secondLargest([1,2,3,4,20,5,6,7,11]))
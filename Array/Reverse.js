function reverse(arr){
    let pos=0,temp=0;
    
    for(let i=arr.length-1;i>=(arr.length/2);i--){
        temp=arr[pos];
        arr[pos]=arr[i];
        arr[i]=temp;
        pos++
    }
    return arr;
 }
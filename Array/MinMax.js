function MinMax(arr){
    if(arr.length==0) return {min:0 ,max:0}
    
    let min=arr[0];
    let max=arr[0];
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return {min:min,max:max}
 }
 
 console.log(MinMax([2,4,1,2,5,10,3,6,2,3,9]))
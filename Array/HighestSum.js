//  highest sum produced by adding two numbers in an array
 
function highestSum(arr){
    arr.sort((a,b)=>b-a);
    return arr[0]+arr[1]
}

console.log(highestSum([1,5,3,2,6,4,8,3]))


//  highest sum produced by adding two numbers in an array
 
function highestSum(arr){
    let max1=arr[0];
    let max2=arr[0];
    for(let item of arr){
       if(item>max1){
           max2=max1;
           max1=item
       }else if(item>max2){
           max2=item
       }
    }
    return max1+max2
}

console.log(highestSum([1,5,3,2,6,4,8,23,3]))

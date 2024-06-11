
function flattenArray(arr){
    let result=[];
    
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result=result.concat(flattenArray(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result;
}

console.log(flattenArray([7, 4, 6, [5, 6, [7], [6, 6]], 8]))
 
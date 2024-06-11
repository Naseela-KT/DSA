function twoSum(arr,target){
    let map=new Map()
    
    for(let i=0;i<arr.length;i++){
        const diff=target-arr[i];
        if(map.has(diff)){
            return [map.get(diff),i]
        }
        map.set(arr[i],i)
    }
    return map;
}

console.log(twoSum([2,1,3,2,4,5,7,9],10))
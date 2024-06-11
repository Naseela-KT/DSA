function findDuplicates(arr){
    let duplicates=[];
    let visited=new Set();
    
    for(let i=0;i<arr.length;i++){
        if(visited.has(arr[i])){
            duplicates.push(arr[i])
            continue;
        }
        visited.add(arr[i])
    }
    return duplicates
}

console.log(findDuplicates([1,4,2,3,2,4,5,6,7,1]))
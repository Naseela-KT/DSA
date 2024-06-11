function nonRepeating(arr){
    let counts={}
    
    arr.forEach((element)=>{
        return counts[element]=(counts[element]||0)+1
    })
    
    const nonRepeated=arr.filter((element)=>{
        return counts[element]===1
    })
    return nonRepeated;
}
console.log(nonRepeating([2,1,3,4,8,1,0,4,2]))
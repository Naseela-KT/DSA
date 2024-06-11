//1

function removeDuplicates(arr){
    return [...new Set(arr)]
}


console.log(removeDuplicates([2,4,1,2,5,3,6,2,3]))


//2
function removeDuplicates(arr){
    let setNum=new Set();
    
    for(let i=0;i<arr.length;i++){
        if(!setNum.has(arr[i])){
            setNum.add(arr[i])
        }
    }
    return Array.from(setNum)
}

//3
function removeDuplicates(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        let isDuplicate=false;
        for(let j=0;j<result.length;j++){
            if(arr[i]===result[j]){
                isDuplicate=true;
                break;
            }
        }
        if(!isDuplicate){
            result.push(arr[i])
        }
    }
    return result;
}


//4
function removeDuplicates(arr){
    for (let i = 0; i < arr.length - 1; i++) {
         for (let j = i + 1; j < arr.length; j++) {
             if (arr[i] === arr[j]) {
                 for (let k = j; k < arr.length - 1; k++) {
                     arr[k] = arr[k + 1];
                 }
                 arr.pop();
                 j--;
             }
         }
     }
     return arr;
 }
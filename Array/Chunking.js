// Array Chunking: Write a function to split an array into smaller arrays of a specified size.
function chunk(arr,chunkSize){
    const chunkedArray=[];
    let index=0;
    while(index<arr.length){
        chunkedArray.push(arr.slice(index,index+chunkSize));
        index+=chunkSize
    }
    return chunkedArray
}

console.log(chunk([12,32,1,2,12,45],4));
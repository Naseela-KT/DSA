// Array Rotation: Write a function to rotate an array by a given number of positions.
//1
function rotate(arr,position){
    let part2=arr.slice(0,position+1);
    let part1=arr.slice(position+1);
    let result=part1.concat(part2)
    console.log(result);
}
console.log([1,2,3,4,5])
rotate([1,2,3,4,5],0);


//2

function rotate(arr,pos){
    return arr.slice(pos).concat(arr.slice(0,pos))
 }
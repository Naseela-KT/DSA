
function union(arr1,arr2){
    const mergedSet = new Set([...arr1, ...arr2]);
    const mergedArray = Array.from(mergedSet);
    return mergedArray;
}

const nums1=[ 12, 32, 1, 2, 12, 45 ];
const nums2=[12,23,2,1,34,23];
console.log(union(nums1,nums2));
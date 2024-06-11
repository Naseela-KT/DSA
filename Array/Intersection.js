function intersection(arr1,arr2){
    let result=[];
    for(let item of arr1){
        if(arr2.includes(item) && !result.includes(item)){
            result.push(item)
        }
    }
    return result;
}


console.log(intersection([1,2,3,4,5,6,7],[2,8,9,1,0,7]))


var intersect = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);

    let result=[];
    let i=0;j=0;

    while(i<nums1.length && j<nums2.length){
        if(nums1[i]===nums2[j]){
            result.push(nums1[i]);
            i++;
            j++;
        }else if(nums1[i]<nums2[j]){
            i++;
        }else{
            j++;
        }
    }
    return result;
};
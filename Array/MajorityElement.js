// Majority Element: Write a function to find the majority element in an array (an element that appears more than n/2 times).

function majorityElement(arr){
    let maj=arr.length/2;
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count>maj){
            console.log(arr[i]+" "+count);
        }
    }
}

majorityElement([1,1,1,1,1,1,2,3]);
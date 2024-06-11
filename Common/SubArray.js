let arr=[1,2,4,6,7,8,9,11,0,1,2]
let result=[];
let series=[arr[0]];

for(let i=1;i<arr.length;i++){
    if((arr[i]-series[series.length-1])==1){
        series.push(arr[i]);
    }else{
        if(series.length>1){
             result.push(series);
        }
        series=[arr[i]];
    }
}
if(series.length>1){
    result.push(series)
}

console.log(result)
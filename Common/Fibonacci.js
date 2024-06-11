//Using array
function fibonacci(n){
    if(n<=0) return []
    if(n==1) return [0]
    if(n==2) return [0,1];
    let series=[0,1]
    for(let i=2;i<n;i++){
        series[i]=series[i-1]+series[i-2];
    }
    return series;
}

console.log(fibonacci(5))


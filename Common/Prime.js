const num=11;
let flag=0;

if(num<=1){
    console.log("Not a Prime")
}else{
    for(let i=2;i*i<=num;i++){
        console.log(i)
        if(num%i==0){
            flag=1
            break;
        }
    }
    if(flag){
        console.log("Not a Prime")
    }else{
          console.log("Prime")
    }
}
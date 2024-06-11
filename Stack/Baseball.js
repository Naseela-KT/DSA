//682
var calPoints=function(operations){
    let stack=[];
    for(let i=0;i<operations.length;i++){
        let val=operations[i];
        if(!isNaN(val)){
            stack.push(parseInt(val));
        }else if(val=="+"){
            const num1=stack[stack.length-1];
            const num2=stack[stack.length-2];
            stack.push(num1+num2);
        }else if(val=="D"){
            const num=stack[stack.length-1];
            stack.push(num*2);
        }else if(val=="C"){
            stack.pop();
        }
    }
    const result=stack.reduce((total,curr)=>{
        total+=curr;
        return total;
    },0);
    return result;
}

ops = ["5","2","C","D","+"]
console.log(calPoints(ops));
function fibonacci(num){
    if(num<2){
        return num;
    }
    return fibonacci(num-1)+fibonacci(num-2)
}

output=""

 for(i=0;i<5;i++){
        output+=fibonacci(i)+" ";
    }
console.log(output)
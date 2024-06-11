function reverseString(str){
    let strNew="";
    for(let i=str.length-1;i>=0;i--){
        strNew+=str[i]
    }
    return strNew;
}

console.log(reverseString("Naseela"))


//Using stack
function reverseString(str){
    let strNew=""
    let stack=[]
    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }
  
    while(stack.length){
        strNew+=stack.pop()
    }
    return strNew;
}

console.log(reverseString("Naseela"))
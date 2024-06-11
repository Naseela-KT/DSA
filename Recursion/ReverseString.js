function reverseString(str){
    if(str.length<1){
        return str
    }
    let lastChar=str.charAt(str.length-1);
    let remaining=str.slice(0,str.length-1);
    return lastChar+reverseString(remaining)
}


console.log(reverseString("Naseela"))
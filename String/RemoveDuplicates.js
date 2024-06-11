function removeDuplicates(str){
    let newStr="";
    for(let i=0;i<str.length;i++){
        if(newStr.indexOf(str[i])===-1){
            newStr+=str[i]
        }
    }
    return newStr;
}

console.log(removeDuplicates("programming"))
function anagram(str1,str2){
    if(str1.length!=str2.length) return false;
    
    charCount={};
    
    for(let char of str1){
        charCount[char]=(charCount[char]||0)+1
    }
    
    for(let char of str2){
        if(!charCount[char]){
            return false;
        }
        charCount[char]--;
    }
    return true;
}

console.log(anagram("silent","listen"))
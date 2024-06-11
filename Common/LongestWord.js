


function longestWord(sentence){
    let max="";
    let word="";
    for(let i=0;i<sentence.length;i++){
        if(sentence[i]!=" "){
            word+=sentence[i];
        }else{
            if(max.length<word.length){
                max=word;
            }
              word=""
        }
    }
     if(max.length<word.length){
                max=word;
    }
    return max;
}


console.log(longestWord("The quick brown fox jumps over the lazy dog gigantic"))
 
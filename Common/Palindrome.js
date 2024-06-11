//By converting into string
function isPalindrome(num){
    const strNum=num.toString();
    let start=0;
    let end=strNum.length-1;
    while(start<end){
    if(strNum[start]!==strNum[end]){
        return false;
    }
    start++;
    end--
    }
    return true
}

console.log(isPalindrome(12321))


//By reversing
function checkPalindrome(num){
    if(num<0) return false;
    
    const originalNum=num;
    let reversedNum=0;
    
    while(num>0){
        const digit=num%10;
        reversedNum=reversedNum*10+digit;
        num=Math.floor(num/10);
    }
    
    return reversedNum===originalNum
}

console.log(checkPalindrome(123213))
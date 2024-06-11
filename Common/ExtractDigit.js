
//  extract digits from string ("- +91 (990)-000-9999")

let str="- +91 (990)-000-9999"
let arr=[]
for(let i=0;i<str.length;i++){
    if(!isNaN(str[i])){
        arr.push(str[i])
    }
}
console.log(arr)


//  extract digits from string ("- +91 (990)-000-9999")


const digits=str.replace(/\D/g,"");
console.log(digits)
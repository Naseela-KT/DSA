let arr=[1, 'two', 3, 'four', 5, true, 'six', 7]

const strings=arr.filter((item)=>{
    return typeof item=='string';
})

console.log(strings)
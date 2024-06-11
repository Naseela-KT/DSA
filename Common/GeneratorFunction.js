function* evenNumbers(){
    let curr=0
    while(true){
        yield curr;
        curr+=3;
    }
}

const gen=evenNumbers();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
 
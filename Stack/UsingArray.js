class Stack{
    constructor(){
        this.items=[];
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    reverse(){
        let tempStack=new Stack();
        while(this.items.length){
            const val=this.pop();
            console.log(val);
            tempStack.push(val)
        }
        while(tempStack.items.length){
            this.push(tempStack.pop())
        }
    }
    findMid(){
        let tempStack=new Stack()
        let mid=Math.floor(this.items.length/2);
        let len=this.items.length;
        while(len>mid){
            tempStack.push(this.pop())
            len--;
        }
        console.log(tempStack.peek())
        while(tempStack.items.length>0){
            this.push(tempStack.pop());
        }
    }
    deleteMid(){
        let tempStack=new Stack();
        let mid=Math.floor(this.items.length/2);
        let len=this.items.length;
        while(len>mid+1){
            tempStack.push(this.pop());
            len--;
        }
        this.pop();
        while(tempStack.items.length){
            this.push(tempStack.pop())
        }
    }
    display(){
        console.log(this.items.toString())
    }
}

const stack=new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.display()
stack.deleteMid()
stack.display()

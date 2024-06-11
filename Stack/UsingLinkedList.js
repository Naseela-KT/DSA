class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.head=null;
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    push(element){
        const node=new Node(element)
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        let value=this.head.value
        this.head=this.head.next
        this.size--
        return value;
    }
    peek(){
        return this.head?this.head.value:null;
    }
    findMid(){
        let tempStack=new Stack()
        let mid=Math.floor(this.size/2);
        let len=this.size;
        while(len>mid){
            tempStack.push(this.pop());
            len--
        }
        console.log(tempStack.peek());
        while(tempStack.size){
            this.push(tempStack.pop())
        }
    }
    deleteMid(){
         let tempStack=new Stack()
        let mid=Math.floor(this.size/2);
        let len=this.size;
        while(len>mid+1){
            tempStack.push(this.pop());
            len--
        }
        this.pop()
         while(tempStack.size){
            this.push(tempStack.pop())
        }
    }
    display() {
        if (!this.head) {
            console.log("Stack is empty");
            return;
        }
        let curr = this.head;
        let output = "";
        while (curr) {
            output += curr.value + " ";
            curr = curr.next;
        }
        console.log("Stack:", output.trim());
    }
}


const stack=new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.display();
stack.deleteMid()
stack.display();

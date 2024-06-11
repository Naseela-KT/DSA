class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
    getSize(){
        return this.size;
    }
    isEmpty(){
        return this.size===0;
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head.prev=node;
            this.head=node;
        }
        this.size++;
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=node;
        }
        this.size++;
    }
    display(){
        let curr=this.head;
        let output=""
        while(curr){
            output+=curr.value+" ";
            curr=curr.next
        }
        console.log(output)
    }
}

const dlinkedlist=new DoublyLinkedList()
dlinkedlist.prepend(10);
dlinkedlist.prepend(20);
dlinkedlist.prepend(30);
dlinkedlist.prepend(40);
dlinkedlist.prepend(50);
dlinkedlist.append(60)
dlinkedlist.display()
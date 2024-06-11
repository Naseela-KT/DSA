class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class CircularLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    getSize(){
        return this.size;
    }
    isEmpty(){
        return this.size===0;
    }
    prepend(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
            node.next=this.head;
        }else{
            node.next=this.head;
            this.head=node;
            this.tail.next=this.head;
        }
        this.size++;
    }
    append(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
            node.next=this.head;
        }else{
            this.tail.next=node;
            node.next=this.head;
            this.tail=node;
        }
        this.size++;
    }
       display() {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }
        let curr = this.head;
        let output = "";
        do {
            output += curr.value + " ";
            curr = curr.next;
        } while (curr !== this.head);
        console.log(output);
    }
}


const clinkedlist=new CircularLinkedList();
clinkedlist.append(10);
clinkedlist.append(20);
clinkedlist.append(30);
clinkedlist.display()
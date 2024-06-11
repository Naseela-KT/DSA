class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
    getSize(){
        return this.size
    }
    
    isEmpty(){
        return this.size===0
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
            
        }
        this.size++;
    }
    append(value){
        const node=new Node(value);
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
    findMid(){
        let curr=this.head;
        let mid=Math.floor(this.size/2);
        for(let i=0;i<mid;i++){
            curr=curr.next;
        }
        console.log(curr.value)
    }
    deleteMid(){
        let curr=this.head;
        let mid=Math.floor(this.size/2);
        let prev;
        for(let i=0;i<mid;i++){
            prev=curr;
            curr=curr.next;
        }
        prev.next=curr.next;
        curr.next=null;
    }
    sumMidThree(){
        let curr=this.head;
        let mid=Math.floor(this.size/2);
        let prev;
        for(let i=0;i<mid;i++){
            prev=curr;
            curr=curr.next;
        }
        console.log("Sum of mid 3:",prev.value+curr.value+curr.next.value)
    }
    avgMidThree(){
         let curr=this.head;
        let mid=Math.floor(this.size/2);
        let prev;
        for(let i=0;i<mid;i++){
            prev=curr;
            curr=curr.next;
        }
        let sum=prev.value+curr.value+curr.next.value;
        console.log("Average of mid three:",sum/3)
    }
    reverse(){
        let prev=null;
        let curr=this.head;
        while(curr){
            let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        this.head=prev;
    }
    printEven(){
        let curr=this.head;
        while(curr){
            if(curr.value%2==0){
                console.log(curr.value)
            }
            curr=curr.next
        }
    }
    sort() {
        this.head = this.mergeSort(this.head);
    }

    mergeSort(head) {
        if (!head || !head.next) return head;
        const [left, right] = this.splitList(head);
        const sortedLeft = this.mergeSort(left);
        const sortedRight = this.mergeSort(right);
        return this.mergeLists(sortedLeft, sortedRight);
    }

    splitList(head) {
        if (!head || !head.next) return [head, null];
        let slow = head, fast = head, prev = null;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = null; 
        return [head, slow];
    }

    mergeLists(l1, l2) {
        const dummy = new Node(null);
        let current = dummy;
        while (l1 && l2) {
            if (l1.value <= l2.value) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = l1 || l2;
        return dummy.next;
    }
    hasCycle(){
        if(!this.head || !this.head.next) return false;
        let slow=this.head,fast=this.head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
            if(slow===fast){
                return true
            }
        }
        return false;
        
    }
    remove(value){
        if(this.isEmpty()){
            console.log("List is empty")
            return;
        }
        if(this.head.value===value){
            this.head=this.head.next;
            this.size--;
            return
        }
        
        let prev,curr=this.head;
        while(curr&&curr.value!==value){
            prev=curr;
            curr=curr.next
        }
        prev.next=curr.next;
        this.size--;
    }
    removeDuplicates(){
        if(this.isEmpty()){
           console.log("List is empty")
           return;
       }
       let curr=this.head;
       let prev=null;
       let visited=new Set();
       while(curr){
           if(visited.has(curr.value)){
               prev.next=curr.next;
               this.size--;
           }else{
               visited.add(curr.value);
               prev=curr;
           }
           curr=curr.next;
       }
   }
    display(){
        if(this.isEmpty()){
            console.log("List is empty");
            return;
        }
        let curr=this.head;
        let output=""
        while(curr){
            output+=curr.value+" ";
            curr=curr.next
        }
        console.log(output)
    }
}

const linkedlist=new LinkedList();
linkedlist.append(10);
linkedlist.append(20);
linkedlist.append(30);
linkedlist.append(40);
linkedlist.append(50);
linkedlist.display()
linkedlist.head.next.next.next.next = linkedlist.head.next;
console.log(linkedlist.hasCycle())
console.log(linkedlist)

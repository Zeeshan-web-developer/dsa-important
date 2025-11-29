class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class SingleLinkedList { 

    constructor() {
        this.head=null;
    }

    add(data) {
        let node=new Node(data)
        if (!this.head) {
          this.head=node
        }
        else {
            let temp = this.head
            while (temp.next !== null) {
                temp = temp.next
            }
            temp.next=node
        }
    }
    prepend(data) {
        let node=new Node(data)
        if (!this.head) {
          this.head=node
        }
        else {
            node.next = this.head
            this.head = node
        } 
    }
    addAtPosition(data, position) { 
         let node=new Node(data)
        if(position === 0) {
            node.next = this.head
            this.head = node
        }
        else {
            let temp = this.head
           
            for(let i=1; i<position-1 && temp.next !== null; i++) {
                temp = temp.next
            }
            node.next = temp.next
            temp.next = node
            
        }
    
    }

    //delete first node
    deleteFirst() {
        if(this.head) {
            this.head = this.head.next
        }
    }
    deleteLast() { 
        if(this.head.next === null) {
            this.head = null
        }
        else {
            let temp = this.head
            while(temp.next.next!== null) {
                temp = temp.next
            }
            temp.next = null
        }
    }
    //delete at position

    deleteAtPosition(position) {
        if(position === 0) {
            this.head = this.head.next
        }
        else {
            let temp = this.head
           
            for(let i=0; i<position-1 && temp.next !== null; i++) {
                temp = temp.next
            }
            //if the postion is valid --not a last node --
            if(temp.next !== null) {
                temp.next = temp.next.next
            }
        }
    }
    search(key) { 
        if(!this.head) {
            return false
        }
        let temp = this.head
        while (this.head !== null) {
            while (temp.next !== null) {
                if(temp.data === key) {
                    return true
                }
            }
        }
    }

    reversList() {
        let current = this.head
        let prev = null
        let next = null

        while(current !== null) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    display() {
        let temp = this.head
        
        while(temp !== null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
    midNode() {
        let slow = this.head
        let fast = this.head

        while(fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow.data
    }


}


const list = new SingleLinkedList()
list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.add(50)
list.add(60)
list.display()
console.log("After adding at position 2")
list.addAtPosition(25, 2)
list.display()


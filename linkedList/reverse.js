//revers a linked list

class Node{
  constructor(data){
    this.data=data
    this.next=null
  }
}

class LinkedList{
  constructor(){
    this.head=null
  }
  add(data){
   let newnode=new Node(data) 
   if(!this.head){
     this.head=newnode
   }else{
     let current=this.head
     while(current.next!=null){
       current=current.next
     }
     current.next=newnode
   }
  }
  print(){
    let current = this.head
    let result = ""

    while(current !== null){
      result += current.data + " -> "
      current = current.next
    }

    result += "null"
       console.log(result)

  }
    reverse(){
        let prev=null
        let current=this.head
        let next=null
    
        while(current!==null){
        next=current.next
        current.next=prev
        prev=current
        current=next
        }
        this.head=prev
    }
}

let list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)

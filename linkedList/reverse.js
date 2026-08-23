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
        next=current.next // initially we have to store next , so we dont lose reference to the rest of the list after we change current.next to prev
        current.next=prev // reverse the link and without losing previous reference, we can move forward in the list
        prev=current // move prev and current one step forward
        current=next // move current to next, which we stored at the beginning of the loop, so we can continue reversing the rest of the list
        }
        this.head=prev
    }
}

let list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)

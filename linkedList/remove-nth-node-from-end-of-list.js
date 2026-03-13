/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0
    let current = head

    // find length
    while(current){
        length++
        current = current.next
    }

    // remove head case
    if(length === n){
        return head.next
    }

    let nodeToMove = length - n
    current = head

    for(let i = 1; i < nodeToMove; i++){
        current = current.next
    }

    current.next = current.next.next

    return head
};



class Node{
  constructor(data){
    this.data=data
    this.next=null
  }
}

class LinkedList{
  constructor(){
    this.head=null
    this.length=0
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
      this.length++
    }

    result += "null"
       console.log(result)

}
  removeEndNth(pos){
    if(this.length<pos){
      return -1
    }
    let nodetormove=this.length-pos
    let current=this.head
    let i=0
    while(i<nodetormove-1){
      current=current.next
      i++
    }
    
    current.next=current.next.next
    return this.head
  }
}

let list=new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.add(6)
list.add(7)


list.print()
list.removeEndNth(6)
list.print()

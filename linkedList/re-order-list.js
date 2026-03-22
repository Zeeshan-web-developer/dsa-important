/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow=head
    let fast=head

     //finding mid
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }

    //reverse
    let prev=null
    let curr=slow.next
    slow.next=null
    let next=null

    while(curr){
        next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    //merge list
    let first=head
    let second=prev

    while(second){
        let temp1=first.next
        let temp2=second.next
        
        first.next=second
        second.next=temp1

        first=temp1
        second=temp2
    }
    

};
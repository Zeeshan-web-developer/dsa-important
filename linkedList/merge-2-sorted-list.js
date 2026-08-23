// merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function(list1, list2) {
    let dummy=new ListNode() //dummy node to simplify edge cases
    let current=dummy //current pointer to build the new list

    while(list1!==null && list2!==null){
        if(list1.val<list2.val){
            current.next=list1 //attach the smaller node to the current pointer
            list1=list1.next //move the pointer of the list from which we took the node
        }else{
            current.next=list2 //attach the smaller node to the current pointer
            list2=list2.next //move the pointer of the list from which we took the node
        }
        current=current.next //move the current pointer forward
    }

    //if there are remaining nodes in either list, attach them to the end of the merged list
    if(list1!==null){
        current.next=list1
    }else{
        current.next=list2
    }

    return dummy.next //return the head of the merged list, which is the next node of the dummy
}
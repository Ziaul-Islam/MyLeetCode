/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode('Dummy', head);
    let right = head;
    let cur = dummy;
    let count = 1;
    while((count <= n) && right){
        right = right.next;
        count++;
    }
    while(right){
        cur = cur.next;
        right = right.next;
    }
    cur.next = cur.next.next;
    /*cur = head;
    while(cur){
        console.log(cur.val);
        cur = cur.next;
    }*/
    return dummy.next;
};
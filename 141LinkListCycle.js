/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    let cur = head; 
    while(cur){
        if(cur.val == 'done') return true;
        else cur.val = 'done';
        cur = cur.next;
    }
    return false;
};
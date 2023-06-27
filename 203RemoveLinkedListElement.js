/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode("dummy", head);
    let pre = dummy;
    let cur = dummy.next;
    while(cur){
        if(cur.val === val){
            pre.next = cur.next;
            delete(cur);
            cur = pre.next;
        }
        else{
            pre = cur;
            cur = cur.next;
        }
    }
    cur = dummy.next;
    return dummy.next;
};
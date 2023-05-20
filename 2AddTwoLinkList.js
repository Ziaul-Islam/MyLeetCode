/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head =new ListNode();
    let cur = head;
    let carry = 0;
    while (l1 || l2){
        let first = 0;
        let second = 0; 
        if(l1){
            first = l1.val;
            l1 = l1.next;
        }
        if(l2){
            second = l2.val;
            l2 = l2.next;
        }
        let sum = first + second + carry;
        let rem = sum % 10;
        carry = Math.floor(sum / 10);
        cur.next =new ListNode(rem, undefined);
        cur = cur.next;
    }
    if(carry > 0) cur.next = new ListNode(carry, undefined);
    /*cur = head.next;
    while(cur){
        console.log(cur.val);
        cur = cur.next;
    }*/
    if(head.next) return head.next;
    else null;
};
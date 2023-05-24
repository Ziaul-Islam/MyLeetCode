/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let cur = headA;
    let map = {};
    while(cur){
        if(!map.hasOwnProperty(cur.val))
            map[cur.val] = cur;
        cur = cur.next;
    }
    cur = headB;
    while(cur){
        if(map[cur.val] == cur) return cur;
        cur = cur.next;
    }
    return null;
};
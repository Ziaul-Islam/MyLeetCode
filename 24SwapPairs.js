/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let cur = head;
    let count = 0;
    while(cur.next.next != null){
        console.log(cur.val);
        let temp = cur.next;
        cur.next= cur.next.next;
        temp.next = cur;
        if(++count == 1){
            head.next = temp;
        }
        cur = cur.next;
    }
    cur = head.next;
    while(cur!= null){
        console.log(cur.val);
        cur = cur.next;
    }
};
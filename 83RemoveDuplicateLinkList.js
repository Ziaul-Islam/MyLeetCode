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
var deleteDuplicates = function(head) {
    //Empty Node
    if(head == null) return head;
    let cur = head;
    while((cur) && (cur.next != null)){
        if(cur.val == cur.next.val){
            let nodetomove = cur.next.next;
            let nodetodelete = cur.next;
            delete(nodetodelete);
            cur.next = nodetomove;
        }
        else{
            cur = cur.next;
        }
    }
    return head;
};
var iterate = function(cur){
    while(cur){
        console.log(cur.val);
        cur = cur.next;
    }
}
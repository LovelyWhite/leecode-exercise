/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * 由于需要父节点来删除当前节点，所以引入一个头节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let newHead = new ListNode(0, head);
  let p = newHead;
  while (p.next?.next != null) {
    if (p.next.val === p.next.next.val) {
      while (p.next.val === p.next.next?.val) {
        p.next.next = p.next.next.next;
      }
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return newHead.next;
};

let node = new ListNode(1, new ListNode(1));
deleteDuplicates(node);

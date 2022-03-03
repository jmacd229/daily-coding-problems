/** https://leetcode.com/problems/middle-of-the-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let tortoise = head;
	let hare = head;
	while(hare && hare.next) {
		tortoise = tortoise.next;
		hare = hare.next.next;
	}
	// The slow pointer will always be halfway by the time the fast pointer reaches the end
	return tortoise;
};

class Node {
	constructor(value, next=null){
	  this.value = value;
	  this.next = next;
	}
  }
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  
  console.log(`Middle Node: ${middleNode(head).value}`)
  
  head.next.next.next.next.next = new Node(6)
  console.log(`Middle Node: ${middleNode(head).value}`)
  
  head.next.next.next.next.next.next = new Node(7)
  console.log(`Middle Node: ${middleNode(head).value}`)
  
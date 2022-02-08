/**
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
var reverseList = function (head) {
	let previous = null;
	let current = head;
	while (current) {
		// We need to keep track of where we'll be moving next after swapping the current two nodes
		let next = current.next;
		// Set the current nodes next, to the node we previously processed (null if none are processed yet)
		current.next = previous;
		// Set the previous variable to now hold the currently processed node
		previous = current;
		// iterate to the next node (by taking our placeholder)
		current = next;
	}
	return previous;
};

const node4 = { val: 4, };
const node3 = { val: 3, next: node4 };
const node2 = { val: 2, next: node3 };
const node1 = { val: 1, next: node2 };

console.log(reverseList(node1));
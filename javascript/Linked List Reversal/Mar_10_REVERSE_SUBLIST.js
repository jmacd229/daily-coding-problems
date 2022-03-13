/** https://leetcode.com/problems/reverse-linked-list-ii/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	get_list() {
		let result = "";
		let temp = this;
		while (temp !== null) {
			result += temp.value + " ";
			temp = temp.next;
		}
		return result;
	}
};

const reverse_sub_list = function (head, p, q) {
	// If the linked list is only one node or if we're reversing only one node then we won't be doing anything
	if (!head.next || p === q) {
		return head;
	}

	// Keep track of the original start of our list because that will remain the start of our list
	// UNLESS if we reverse from the starting node
	const originalHead = head;


	let leftArrayTail = null;
	let midArrayHead = head;
	// Iterate through the list
	for (let i = 1; i <= q; i++) {
		// Once we find our p (leftIndex) we need to keep track of the tail of the left subarray
		// We also need the head of our subarray that will be reversed
		if (i === p - 1) {
			leftArrayTail = head;
			midArrayHead = head.next;
		}
		head = head.next;
	}

	// When we stop iterating through the list, we have surpassed our q (rightIndex) so we can keep track of the head of the right subarray
	const rightArrayHead = head;

	// Now we have all the pointers we need so we can reverse our middle array, so we reset head to the start of the middle array
	head = midArrayHead;
	// Since we're reversing the array, previous will be the start of the ending array
	let previous = rightArrayHead;
	while (head && head !== rightArrayHead) {
		// Next is used to make sure we don't lose track of the next node
		const next = head.next;
		// We now set the next pointer of the node to our previously processed node
		head.next = previous;
		// reset the previous variable to the currently processed node
		previous = head;
		// Move to the next node to be reversed
		head = next;
	}

	// If there was a left array then we need to reconnect it to the reversed array at the end
	if (leftArrayTail) {
		leftArrayTail.next = previous;
	} else { // If there wasn't a left array (reversed right from the start of the list) then we return the last processed node
		return previous;
	}

	return originalHead;
};


head = new Node(3)
head.next = new Node(5)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 1, 2).get_list()}`)

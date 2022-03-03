/** https://leetcode.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	// An empty or single element linked list is a palindrome
	if(head == null || head.next == null) return true;
	let tortoise = head,
		hare = head.next;
		// Use slow and fast pointer to find middle
	while (hare && hare.next) {
		tortoise = tortoise.next;
		hare = hare.next.next;
	}
	// Reverse 2nd half
	tortoise = reverse(tortoise.next);
	// Keep a record of where we reversed so that we can re-reverse
	let tail = tortoise;
	hare = head;
	let isPalindrome = true;
	while (tortoise)  {
		// If the values are ever not equal, then that means it is not a palindrome
		if (tortoise.val !== hare.val) {
			isPalindrome = false;
			break;
		}
		tortoise = tortoise.next;
		hare = hare.next;
	} 

	// re-reverse the array so it is unchanged
	reverse(tail);

	return isPalindrome;
};

const reverse = (node) => {
	let previous = null;
	while (node) {
		let next = node.next;
		node.next = previous;
		previous = node;
		node = next;
	}
	return previous;
}

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(2)
head.next.next.next = new Node(1)
// head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${isPalindrome(head)}`)

head.next.next = null
console.log(`Is palindrome: ${isPalindrome(head)}`)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/** https://leetcode.com/problems/linked-list-cycle/submissions/
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	// Use a slow pointer and a fast pointer, if they ever meet up, then that means that there is a cycle
	// Otherwise we know there is not a cycle
	let tortoise = head;
	let hare = head;
	while (tortoise?.next && hare?.next) {
		tortoise = tortoise.next;
		hare = hare.next;
		hare = hare?.next;
		if (tortoise === hare) {
			return true;
		}
	}
	return false;
};

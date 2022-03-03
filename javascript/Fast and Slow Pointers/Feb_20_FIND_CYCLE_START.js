class Node {
	constructor(value, next=null){
	  this.value = value;
	  this.next = next;
	}
  }
  
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/** https://leetcode.com/problems/linked-list-cycle-ii/
 * @param {ListNode} head
 * @return {ListNode}
 */
 var find_cycle_start = function(head) {
	 if(!head){
		 return null;
	 }
    let tortoise = head;
	let hare = head;
	while (tortoise.next && hare.next && hare.next.next){
		tortoise = tortoise.next;
		hare = hare.next.next;
		// Once the pointers have caught up, we know we are in a cycle
		if(tortoise === hare){
			// Next we need to find out the length of the cycle
			let count = get_cycle_length(tortoise, head);
			// We then reset both of our pointers to the start of the list
			hare = head;
			tortoise = head;
			// Move one of our pointers up by the length of the cycle
			while(count > 0){
				hare = hare.next;
				count--;
			}
			// Now move both pointers at the same speed until they meet, this will always be the cycle start
			// Why will they meet at the start? Think of it this way
			/*
			If the pointers are both moving up at the same speed, they would never meet
			o-o-o  -> o-o-o
			^ ^         ^ ^
			This still holds if there is a cycle, since they move at the same speed UNLESS if the head-start the pointer has
			is exactly equal to the length of the cycle, in which case they'll get in-synch once they enter the cycle together
			*/
			while(tortoise !== hare){
				hare = hare.next;
				tortoise = tortoise.next;
			}
			return tortoise;
		}
	}
	return null;
};

// Use the meeting point of the tortoise and hare as the new head of the list
const get_cycle_length = function(head) {
	// If we move forward one at a time, we know we're in a cycle so we can get the cycle length once they meet
	let tortoise = head.next;
	count = 1;
	while (head !== tortoise){
		tortoise = tortoise.next;
		count++;
	}
	return count;
};
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  
  head.next.next.next.next.next.next = head.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = head.next.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = null
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
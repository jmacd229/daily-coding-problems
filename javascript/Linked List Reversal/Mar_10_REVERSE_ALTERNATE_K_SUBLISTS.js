// UNFINISHED https://www.educative.io/courses/grokking-the-coding-interview/m2YYJJRP9KG
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

const reverse_alternate_k_elements = function (head, k) {
	// If the linked list is only one node or if we're reversing only one node then we won't be doing anything
	if (!head.next || k <= 1) {
		return head;
	}
	let previous, previousTail, originalhead, previousHead = null;
	while (head) {
		// Previous Head keeps track of where the head of our subarray was BEFORE reversing it
		previousHead = head;
		// Go through k elements and reverse as per normal, break if we hit the end of the array
		for (let i = 0; i < k && head; i++) {
			let next = head.next;
			head.next = previous;
			previous = head;
			head = next;
		}
		// If this was our first iteration of k then we need to keep track of the last processed element
		// Because that will be the new head of the entire list
		if (!originalhead) {
			originalhead = previous;
		}
		if (previousTail) {
			previousTail.next = previous;
		}

		previousHead.next = head;
		for (let i = 0; i < k && head; i++) {
			previous = head;
			head = head.next;
		}
		previousTail = previous;
	}
	// When we're done processing, previous head will always be our new tail so we need to set its next to null so that the list ends without a loop
	previousHead.next = null;
	return originalhead;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)
//head.next.next.next.next.next.next.next.next = new Node(9)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_alternate_k_elements(head, 2).get_list()}`)


/*
12345678 k=2

21


*/
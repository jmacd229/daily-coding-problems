// https://www.educative.io/courses/grokking-the-coding-interview/RMZylvkGznR

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

const reverse_every_k_elements = function (head, k) {
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
		// If we've already processed a sublist then we need to connect that one to the newly processed one
		if (previousTail) {
			// Previous will always be the head of the newly reversed list so we set that as the next from the tail of the previous sublist
			previousTail.next = previous;
		}
		// Since we've now reversed our array, the head prior to reversing becomes the tail
		previous = previousTail = previousHead;
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
console.log(`Nodes of reversed LinkedList are: ${reverse_every_k_elements(head, 3).get_list()}`)


/*
123 456789 k=3
321 654987


*/
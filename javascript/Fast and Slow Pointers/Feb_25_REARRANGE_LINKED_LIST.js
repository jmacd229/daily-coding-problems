class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	print_list() {
		let result = "";
		let temp = this;
		while (temp !== null) {
			result += temp.value + " ";
			temp = temp.next;
		}
		console.log(result);
	}
}

// https://www.educative.io/courses/grokking-the-coding-interview/YQJ4mr7yOrW
const reorder = function (head) {
	let slow = head,
		fast = head;
	// Find middle point
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	let next = slow.next;
	// Break the list into two by setting the middle point's next = null
	slow.next = null;
	// Reverse the 2nd half
	slow = reverse(next);
	fast = head;
	let slowNext;

	// "fast" acts as our forwards list, and "slow" acts as our reverse list
	while(slow){
		// keep track of the next element in our forwards list
		next = fast.next;
		// Then set that element to the currently selected reverse element
		fast.next = slow;
		// Now do the same for the reversed part of the list
		slowNext = slow.next;
		slow.next = next;
		// Now simply increment both lists using the references previously stored
		slow = slowNext;
		fast = next;
	}
}



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


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
// head.next.next.next.next.next = new Node(12)
reorder(head)
head.print_list()


/*
Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 
*/

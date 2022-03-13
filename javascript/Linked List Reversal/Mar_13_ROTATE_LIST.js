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


const rotateRight = function (head, rotations) {
	// If there are no rotations or if there is 1 or less nodes then we won't be doing any actions so just return
	if (rotations === 0 || !head?.next) {
		return head;
	}
	// Keep track of where the original start of the list is
	let originalHead = head;

	// Count the # of nodes in the list
	let i =1;
	while (head.next) {
		head = head.next;
		i++;
	}
	// If our # of rotations spans more than 1 full list length, we only care about the remainder
	rotations = rotations % i;
	// If it turns out our rotations are divisible by our length we can just return without any rotations
	if(rotations === 0){
		return originalHead;
	}
	// i now becomes the number of nodes we have to traverse to find the new end of our list
	// we know this because the tail (next = null) node will always shift left by the number of nodes we're shifting right
	// (ie 1-2-3 shifting right 1 causes the tail (null after 3) to move left 1 (null after 2))
	i = i - rotations;
	// Reset to the start of the list by connecting the tail to the head and creating a loop
	head.next = originalHead;
	for(i; i > 0; i--){
		head = head.next;
	}
	// keep track of the next node as we're about to break the new tail
	originalHead = head.next;
	head.next = null;
	return originalHead;
};


head = new Node(1)
head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of rotated LinkedList are: ${rotateRight(head, 1).get_list()}`)

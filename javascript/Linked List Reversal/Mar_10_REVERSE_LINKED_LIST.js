class Node {
	constructor(value, next=null){
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
  
  
  const reverse = function(head) {
	  // Previous keeps track of where we were last
	let previous = null;
	while(head){
		// Next is used to make sure we don't lose track of the next node
		const next = head.next;
		// We now set the next pointer of the node to our previously processed node
		head.next = previous;
		// reset the previous variable to the currently processed node
		previous = head;
		// Move to the next node to be reversed
		head = next;
	}
	return previous;
  };
  
  head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(6);
  head.next.next.next = new Node(8);
  head.next.next.next.next = new Node(10);
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)
  
  
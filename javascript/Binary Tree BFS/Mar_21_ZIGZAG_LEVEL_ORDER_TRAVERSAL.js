// https://www.educative.io/courses/grokking-the-coding-interview/m2N6GwARL8r
class TreeNode {

	constructor(value) {
		this.val = value;
		this.left = null;
		this.right = null;
	}
};



/** https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
	if (!root) {
		return [];
	}
	// We use a queue to process each node in order
	const queue = [root];
	const result = [];
	let isLeftToRightTraversal = true;
	// While we still have nodes to process
	while (queue.length) {
		const currentLevelNodeValues = [];
		// The number of nodes in the queue at the start of the iteration is the total number in that level
		// Therefore we will only loop that many times.. This is important because we will be pushing to the back of the queue for the next level as we process this level
		for (let numInLevel = queue.length; numInLevel > 0; numInLevel--) {
			const node = queue.shift();
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
			// if we're currently moving left to right then we push to the array as normal
			if (isLeftToRightTraversal) {
				currentLevelNodeValues.push(node.val);
			} else {
				currentLevelNodeValues.unshift(node.val);
			}
		}
		// Add the current level to teh final result array
		result.push(currentLevelNodeValues);
		isLeftToRightTraversal = !isLeftToRightTraversal;
	}
	return result;
};


var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${zigzagLevelOrder(root)}`)
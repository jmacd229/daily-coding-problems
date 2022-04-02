class TreeNode {

	constructor(value) {
		this.val = value;
		this.left = null;
		this.right = null;
	}
};


/** https://leetcode.com/problems/binary-tree-level-order-traversal/
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
var levelOrder = function (root) {
	if(!root){
		return [];
	}
	// We use a queue to process each node in order
	const queue = [root];
	const result = [];
	// While we still have nodes to process
	while (queue.length) {
		const currentLevelNodeValues = [];
		// The number of nodes in the queue at the start of the iteration is the total number in that level
		// Therefore we will only loop that many times.. This is important because we will be pushing to the back of the queue for the next level as we process this level
		for (let numInLevel = queue.length; numInLevel > 0; numInLevel--) {
			// Pop the first node from the queue to process
			const node = queue.shift();
			// Add any children to the end of the queue
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
			// Add the value to our result for this level
			currentLevelNodeValues.push(node.val);
		}
		// Add the current level to teh final result array
		result.push(currentLevelNodeValues);
	}
	return result;
};



var root = new TreeNode(1);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${levelOrder(root)}`);

  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
      }
}


function zigzagLevelOrder(root: TreeNode | null): number[][] {
    let result = [[]];
    if(root){
        traverse(root, result, 0);
    }
    return result;
};

function traverse(node: TreeNode | null, result: number[][], level: number ): void {
    if(!node){
        return;
    }
    if(result.length < level){
        result.push([]);
    }

if(level % 2 == 0) {
    result[level].push(node.val);
} else {
    result[level] = [node.val].concat(result[level]);
}

traverse(node.left, result, level + 1);
traverse(node.right, result, level + 1);
}
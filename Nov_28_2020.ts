// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

class Node2 {
  val: String;
  left: Node2;
  right: Node2;
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
// The following test should pass:

const node = new Node2(
  "root",
  new Node2("left", new Node2("left.left")),
  new Node2("right")
);

//assert deserialize(serialize(node)).left.left.val == 'left.left'

// function serialize(node: Node2): string {
//   let result = "{";
//   if (node) {
//     result += serialize(node.left) + ",";
//     result += `"${node.val}",`;
//     result += serialize(node.right);
//   }
//   return (result += "}");
// }

function serialize(node: Node2, values = []): string {
  if (!node) {
    values.push('?');
  } else {
    values.push(node.val);
    serialize(node.left, values);
    serialize(node.right, values);
  }
  return values.join(",");
}

let values = []

function deserialize(val: string): Node2 {
    values = val.split(',');
    const result = deserializeNode();
    return result;
  }

  function deserializeNode(): Node2{
    if(values[0] === '?'){
        values = values.slice(1);
        return null;
    } else {
        const node = new Node2(values[0])
        values = values.slice(1);
        node.left = deserializeNode();
        node.right = deserializeNode();
        return node;
    }
  }

  //[root,left,left.left,?,?,?,right,?,?]
  /*
Ro: -root-
[left,left.left,?,?,?,right,?,?]

Ro: L-root- 
L: -left-
[left.left,?,?,?,right,?,?]

Ro: L-root- 
L: LL-left-
LL: -left.left-
[?,?,?,right,?,?]

Ro: L-root-R
L: LL-left-null
LL: null-left.left-null
R: -right-
[right,?,?]
  */

console.log(deserialize(serialize(node)).left.left.val);
/*
{{{{},"left.left",{}},"left",{}},"root",{{},"right",{}}}
*/

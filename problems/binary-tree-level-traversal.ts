/* 
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

import { getTreeNode, TreeNode } from "../common/treeNode";

const root = getTreeNode<number>(100);
root.left = getTreeNode(20);
root.right = getTreeNode(150);
root.left.left = getTreeNode(10);
root.left.right = getTreeNode(30);
root.right.left = getTreeNode(110);
root.right.right = getTreeNode(200);
root.left.left.left = getTreeNode(5);
root.left.left.right = getTreeNode(15);
root.left.right.left = getTreeNode(25);
root.left.right.right = getTreeNode(35);
let queue: Array<TreeNode<number>> = [];

function binaryTreeLevelTraversal() {
  while (queue.length > 0) {
    const root = queue.shift() as TreeNode<number>;
    console.log("queue", queue.map((x) => x.value).join(" "), root.value);
    console.log(root.value);
    if (root.left) {
      queue.push(root.left);
    }
    if (root.right) {
      queue.push(root.right);
    }
  }
}
queue.unshift(root);
binaryTreeLevelTraversal();

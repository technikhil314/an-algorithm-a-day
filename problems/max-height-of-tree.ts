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

function findMaxHeightOfTree(root: TreeNode<number>) {
  if (!root) {
    return -1;
  }
  const leftSubTreeHeight: number =
    1 + findMaxHeightOfTree(root.left as TreeNode<number>);
  const rightSubTreeHeight: number =
    1 + findMaxHeightOfTree(root.right as TreeNode<number>);
  return Math.max(leftSubTreeHeight, rightSubTreeHeight);
}

console.log(findMaxHeightOfTree(root));

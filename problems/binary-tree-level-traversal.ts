import { getTreeNode, TreeNode } from "./common/treeNode";

const root = getTreeNode<number>(100);
root.left = getTreeNode(20);
root.right = getTreeNode(150);
root.left.left = getTreeNode(10);
root.left.right = getTreeNode(50);
root.right.left = getTreeNode(110);
root.right.right = getTreeNode(200);

let queue: Array<TreeNode<number>> = [];
function binaryTreeLevelTraversal(root: TreeNode<number>) {
  if (!root) {
    return;
  }
  if (root.left) {
    queue.push(root.left);
  }
  if (root.right) {
    queue.push(root.right);
  }
  if (root.left) {
    binaryTreeLevelTraversal(root.left);
  }
  if (root.right) {
    binaryTreeLevelTraversal(root.right);
  }
}
queue.push(root);
binaryTreeLevelTraversal(root);
for (let val of queue.values()) {
  console.log(val.value);
}

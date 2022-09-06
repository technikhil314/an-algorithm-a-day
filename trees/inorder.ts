import { getTreeNode, TreeNode } from "../common/treeNode";

function inorderTraversal(root: TreeNode<number>) {
  if (!root) {
    return;
  }
  inorderTraversal(root.left as TreeNode<number>);
  console.log(root.value);
  inorderTraversal(root.right as TreeNode<number>);
}

const root = getTreeNode<number>(1);
root.left = getTreeNode(2);
root.right = getTreeNode(3);
root.left.right = getTreeNode(5);
root.right.left = getTreeNode(4);

inorderTraversal(root);

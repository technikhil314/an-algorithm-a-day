import { getTreeNode, TreeNode } from "../common/treeNode";

function preorderTraversal(root: TreeNode<number>) {
  if (!root) {
    return;
  }
  console.log(root.value);
  preorderTraversal(root.left as TreeNode<number>);
  preorderTraversal(root.right as TreeNode<number>);
}

const root = getTreeNode<number>(1);
root.left = getTreeNode(2);
root.right = getTreeNode(3);
root.left.right = getTreeNode(5);
root.right.left = getTreeNode(4);

preorderTraversal(root);

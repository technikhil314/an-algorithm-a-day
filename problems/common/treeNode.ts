export interface TreeNode<T> {
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  value: T;
}

export function getTreeNode<T>(value: T): TreeNode<T> {
  return {
    left: null,
    right: null,
    value,
  };
}

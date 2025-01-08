class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    value: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Function to build a binary tree from an array (level order insertion)
function buildTree(values: (number | null)[]): TreeNode | null {
  if (values.length === 0 || values[0] === null) return null;

  const root = new TreeNode(values[0]);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (i < values.length) {
    const current = queue.shift();
    if (current) {
      if (values[i] !== null) {
        current.left = new TreeNode(values[i]!);
        queue.push(current.left);
      }
      i++;

      if (i < values.length && values[i] !== null) {
        current.right = new TreeNode(values[i]!);
        queue.push(current.right);
      }
      i++;
    }
  }

  return root;
}

// Level Order Traversal (returns array of arrays)
function levelOrderTraversal(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()!;
      currentLevel.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    result.push(currentLevel);
  }

  return result;
}

// Preorder Traversal (returns an array of node values)
function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function traverse(node: TreeNode | null) {
    if (!node) return;
    result.push(node.value); // Visit the root
    traverse(node.left); // Traverse left subtree
    traverse(node.right); // Traverse right subtree
  }

  traverse(root);
  return result;
}

const treeValues = [1, 2, 3, null, 4, 5, 6, 7];
const root = buildTree(treeValues);

console.log("Level Order Traversal:", levelOrderTraversal(root));
console.log("Preorder Traversal:", preorderTraversal(root));

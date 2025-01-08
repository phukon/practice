class BstNode {
  data: number;
  left: BstNode | null;
  right: BstNode | null;
  constructor(
    data: number,
    left: BstNode | null = null,
    right: BstNode | null = null,
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  root: BstNode | null = null;

  public insert(node: BstNode): void {
    this.root = this.insertHelper(this.root, node);
  }

  private insertHelper(root: BstNode | null, node: BstNode): BstNode {
    let data: number = node.data;
    if (!root) {
      root = node;
      return node;
    } else if (data < root.data) {
      root.left = this.insertHelper(root.left, node);
    } else if (data > root.data) {
      root.right = this.insertHelper(root.right, node);
    }
    return root;
  }

  public display(): void {
    this.displayHelper(this.root);
  }

  private displayHelper(root: BstNode | null): void {
    if (!root) {
      return;
    }
    this.displayHelper(root.left);
    console.log(`Visited ${root.data}`);
    this.displayHelper(root.right);
  }

  public search(data: number): boolean {
    return this.searchHelper(this.root, data);
  }

  private searchHelper(root: BstNode | null, data: number): boolean {
    if (!root) {
      return false;
    }
    if (root.data === data) {
      return true;
    } else if (root.data > data) {
      return this.searchHelper(root.left, data);
    } else {
      return this.searchHelper(root.right, data);
    }
  }

  public remove(data: number): void {
    const exists = this.search(data);
    if (!exists) {
      console.log(`${data} doesn't exist in the tree!`);
      return;
    }
    this.root = this.removeHelper(this.root, data);
  }

  private removeHelper(root: BstNode | null, data: number): BstNode | null {
    if (!root) {
      return null;
    }

    if (data < root.data) {
      root.left = this.removeHelper(root.left, data);
    } else if (data > root.data) {
      root.right = this.removeHelper(root.right, data);
    }

    // Node found!
    // Case 1: Leaf node
    if (!root.left && !root.right) {
      return null;
    }
    // Case 2: Node has right child
    else if (root.right) {
      // we are looking for the node with the smallest value and that will be a leaf node
      // it's easier to remove a leaf node, so we remove it, assign it as the successor
      // since the smallest value in the right subtree will always be greater than the node
      // we want to replace! it's so cool! draw it out. you will understand.

      root.data = this.successor(root);
      root.right = this.removeHelper(root.right, root.data);
    }
    // Case 3: Node has only left child
    else if (root.left) {
      root.data = this.predecessor(root);
      root.left = this.removeHelper(root.left, root.data);
    }

    return root;
  }

  private successor(root: BstNode): number {
    if (!root.right) {
      throw new Error("No right subtree exists for finding successor");
    }
    let current = root.right;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  private predecessor(root: BstNode): number {
    if (!root.left) {
      throw new Error("No left subtree exists for finding predecessor");
    }
    let current = root.left;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

let binTree = new BinarySearchTree();
binTree.insert(new BstNode(5));
binTree.insert(new BstNode(1));
binTree.insert(new BstNode(8));
binTree.insert(new BstNode(4));
binTree.insert(new BstNode(6));
binTree.insert(new BstNode(2));
binTree.display();
console.log(binTree.search(8));
binTree.remove(4);
binTree.display();

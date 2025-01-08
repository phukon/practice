class GraphError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GraphError";
  }
}

interface EdgeOperationResult {
  success: boolean;
  message: string;
}

interface IUndirGraph {
  addNode(node: string): void;
  addEdge(node1: string, node2: string): EdgeOperationResult;
  getNeighbours(node: string): string[];
  hasNode(node: string): boolean;
  hasEdge(node1: string, node2: string): boolean;
  getAllNodes(): string[];
  print(style?: "simple" | "visual"): string;
  printAsTree(rootNode?: string): string;
  visitNode(node: string): void;
}

class UndirGraph implements IUndirGraph {
  private readonly _adjacencyList: Map<string, Set<string>>;

  constructor() {
    // Using Set instead of Array to prevent duplicate edges
    this._adjacencyList = new Map();
  }

  /**
   * Validates if a node string is valid
   * @throws {GraphError} if node is invalid
   */
  private validateNode(node: string): void {
    if (typeof node !== "string" || node.trim().length === 0) {
      throw new GraphError("Node must be a non-empty string");
    }
  }

  /**
   * Checks if a node exists in the graph
   */
  public hasNode(node: string): boolean {
    try {
      this.validateNode(node);
      return this._adjacencyList.has(node);
    } catch {
      return false;
    }
  }

  /**
   * Returns all nodes in the graph
   */
  public getAllNodes(): string[] {
    return Array.from(this._adjacencyList.keys());
  }

  /**
   * Adds a new node to the graph
   * @throws {GraphError} if node is invalid
   */
  public addNode(node: string): void {
    this.validateNode(node);

    if (this.hasNode(node)) {
      throw new GraphError(`Node "${node}" already exists`);
    }

    this._adjacencyList.set(node, new Set());
  }

  /**
   * Checks if an edge exists between two nodes
   */
  public hasEdge(node1: string, node2: string): boolean {
    try {
      this.validateNode(node1);
      this.validateNode(node2);

      if (!this.hasNode(node1) || !this.hasNode(node2)) {
        return false;
      }

      return this._adjacencyList.get(node1)!.has(node2);
    } catch {
      return false;
    }
  }

  /**
   * Adds an edge between two nodes
   * @returns {EdgeOperationResult} Result of the operation
   */
  public addEdge(node1: string, node2: string): EdgeOperationResult {
    try {
      this.validateNode(node1);
      this.validateNode(node2);

      if (node1 === node2) {
        return {
          success: false,
          message: "Self-loops are not allowed",
        };
      }

      if (!this.hasNode(node1) || !this.hasNode(node2)) {
        return {
          success: false,
          message: `One or both nodes "${node1}" or "${node2}" do not exist`,
        };
      }

      if (this.hasEdge(node1, node2)) {
        return {
          success: false,
          message: "Edge already exists",
        };
      }

      // Add bidirectional edge
      this._adjacencyList.get(node1)!.add(node2);
      this._adjacencyList.get(node2)!.add(node1);

      return {
        success: true,
        message: "Edge added successfully",
      };
    } catch (error) {
      return {
        success: false,
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  }

  /**
   * Gets all neighbours of a node
   * @throws {GraphError} if node is invalid or doesn't exist
   */
  public getNeighbours(node: string): string[] {
    this.validateNode(node);

    if (!this.hasNode(node)) {
      throw new GraphError(`Node "${node}" does not exist`);
    }

    return Array.from(this._adjacencyList.get(node)!);
  }

  /**
   * Returns a formatted string representation of the graph
   * @param style 'simple' for basic representation, 'visual' for ASCII art style
   */
  public print(style: "simple" | "visual" = "simple"): string {
    if (this._adjacencyList.size === 0) {
      return "Empty graph";
    }

    return style === "simple" ? this.getSimplePrint() : this.getVisualPrint();
  }

  /**
   * Returns a simple text representation of the graph
   * @private
   */
  private getSimplePrint(): string {
    const lines: string[] = ["Graph Structure:"];
    const sortedNodes = Array.from(this._adjacencyList.keys()).sort();
    const maxNodeLength = Math.max(...sortedNodes.map((n) => n.length));
    const indent = "  ";

    sortedNodes.forEach((node) => {
      const neighbors = Array.from(this._adjacencyList.get(node)!).sort();
      const paddedNode = node.padEnd(maxNodeLength);

      if (neighbors.length === 0) {
        lines.push(`${indent}${paddedNode} → (no connections)`);
      } else {
        lines.push(`${indent}${paddedNode} → ${neighbors.join(", ")}`);
      }
    });

    return lines.join("\n");
  }

  /**
   * Returns a tree-like visualization of the graph
   * The representation is approximate since a graph can have cycles,
   * but we'll display it in a tree format starting from a given root node
   */
  public printAsTree(rootNode?: string): string {
    if (this._adjacencyList.size === 0) {
      return "Empty graph";
    }

    // If no root node specified, take the first node
    const root = rootNode || this.getAllNodes()[0];
    if (!this.hasNode(root)) {
      throw new GraphError("Root node does not exist");
    }

    const visited = new Set<string>();
    const lines: string[] = [];

    // Function to calculate the connections for ASCII art
    // const getConnector = (prefix: string, isLast: boolean): string => {
    //   const vertical = "│   ";
    //   const space = "    ";
    //   const connection = isLast ? "└── " : "├── ";
    //   return prefix + connection;
    // };

    // Recursive function to build tree representation
    const printNode = (
      node: string,
      prefix: string = "",
      isLast: boolean = true,
    ) => {
      // Add current node
      lines.push(`${prefix}${isLast ? "└── " : "├── "}(${node})`);
      visited.add(node);

      // Get unvisited neighbors
      const neighbors = this.getNeighbours(node)
        .filter((n) => !visited.has(n))
        .sort();

      // Process neighbors
      neighbors.forEach((neighbor, index) => {
        const isLastNeighbor = index === neighbors.length - 1;
        const newPrefix = prefix + (isLast ? "    " : "│   ");
        printNode(neighbor, newPrefix, isLastNeighbor);
      });
    };

    // Start with root node
    lines.push(`(${root})`);
    visited.add(root);

    // Process root's neighbors
    const neighbors = this.getNeighbours(root).sort();
    neighbors.forEach((neighbor, index) => {
      const isLast = index === neighbors.length - 1;
      printNode(neighbor, "", isLast);
    });

    return lines.join("\n");
  }

  /**
   * Returns a visual ASCII art style representation of the graph
   * @private
   */
  private getVisualPrint(): string {
    const lines: string[] = ["Graph Structure:"];
    const sortedNodes = Array.from(this._adjacencyList.keys()).sort();
    const indent = "    ";

    sortedNodes.forEach((node, nodeIndex) => {
      // Node representation
      const nodeRow = `${indent}[${node}]`;
      lines.push(nodeRow);

      // Get sorted neighbors
      const neighbors = Array.from(this._adjacencyList.get(node)!).sort();

      // Add connections
      if (neighbors.length > 0) {
        neighbors.forEach((neighbor, index) => {
          const isLast = index === neighbors.length - 1;
          const connector = isLast ? "└──" : "├──";
          lines.push(`${indent}${connector}→ [${neighbor}]`);
        });
      }

      // Add spacing between nodes except for the last node
      if (nodeIndex < sortedNodes.length - 1) {
        lines.push("");
      }
    });

    return lines.join("\n");
  }

  public visitNode(node: string): void {
    console.log("Visiting: ", node);
  }
}

function undirDFSIterative(graph: IUndirGraph, node: string) {
  let seen: Set<string> = new Set();
  let stack: string[] = [];
  stack.push(node);

  while (stack.length > 0) {
    let current_node: string = stack.pop()!;
    if (!seen.has(current_node)) {
      graph.visitNode(current_node);
      seen.add(current_node);

      for (const neighbor of graph.getNeighbours(current_node)) {
        if (!seen.has(neighbor)) stack.push(neighbor);
      }
    }
  }
}

function undirBFSIterative(graph: IUndirGraph, node: string) {
  let seen: Set<string> = new Set();
  let queue: string[] = [];
  queue.push(node);
  let result: string[][] = [];

  while (queue.length > 0) {
    let current_node: string = queue.shift()!;
    if (!seen.has(current_node)) {
      graph.visitNode(current_node);
      seen.add(current_node);

      for (const neighbor of graph.getNeighbours(current_node)) {
        if (!seen.has(neighbor)) queue.push(neighbor);
      }
    }
  }
}

function dfsRecursive(gr: IUndirGraph, vertex: string, seen = new Set()) {
  gr.visitNode(vertex);
  seen.add(vertex);

  for (const n of gr.getNeighbours(vertex)!) {
    if (!seen.has(n)) {
      dfsRecursive(gr, n, seen);
    }
  }
}

try {
  const graph = new UndirGraph();

  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  graph.addNode("E");
  graph.addNode("F");
  graph.addNode("G");
  graph.addNode("H");
  graph.addNode("I");
  graph.addNode("J");
  graph.addNode("K");
  graph.addNode("L");
  graph.addNode("M");
  graph.addNode("N");
  graph.addNode("O");
  graph.addNode("P");
  graph.addNode("Q");
  graph.addNode("R");
  graph.addNode("S");
  graph.addNode("T");
  graph.addNode("U");
  graph.addNode("V");
  graph.addNode("W");
  graph.addNode("X");
  graph.addNode("Y");
  graph.addNode("Z");

  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("A", "D");
  graph.addEdge("A", "E");
  graph.addEdge("A", "F");

  graph.addEdge("B", "G");
  graph.addEdge("B", "V");
  graph.addEdge("B", "U");

  graph.addEdge("C", "H");
  graph.addEdge("D", "I");
  graph.addEdge("E", "J");

  graph.addEdge("F", "K");
  graph.addEdge("F", "Q");
  graph.addEdge("F", "R");
  graph.addEdge("F", "S");
  graph.addEdge("F", "T");

  graph.addEdge("G", "L");
  graph.addEdge("K", "P");
  graph.addEdge("J", "O");
  graph.addEdge("I", "N");
  graph.addEdge("H", "M");
  graph.addEdge("X", "Z");

  graph.addEdge("L", "X");
  graph.addEdge("L", "W");
  graph.addEdge("L", "Y");

  // console.log("\nSimple Style:");
  // console.log(graph.print("simple"));

  // console.log("\nVisual Style:");
  // console.log(graph.print("visual"));
  console.log("=========== DFS Iterative ===========");
  undirDFSIterative(graph, "A");
  // dfsRecursive(graph, "A");
  console.log(graph.printAsTree("A"));
  console.log("===========BFS Iterative ===========");
  undirBFSIterative(graph, "A");
} catch (error) {
  if (error instanceof GraphError) {
    console.error("Graph operation failed:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}

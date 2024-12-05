class GraphMatrix2 {
  matrix: number[][];
  vertices: string[];

  constructor(vertices: string[]) {
    this.vertices = vertices;
    this.matrix = Array(vertices.length)
      .fill(0)
      .map(() => Array(vertices.length).fill(0));
  }

  // Add an edge
  addEdge(vertex1: string, vertex2: string) {
    const i = this.vertices.indexOf(vertex1);
    const j = this.vertices.indexOf(vertex2);

    if (i >= 0 && j >= 0) {
      this.matrix[i][j] = 1;
      // this.matrix[j][i] = 1;
    }
  }

  printMatrix() {
    console.log(" ", ...this.vertices);
    this.matrix.forEach((row, i) => {
      console.log(this.vertices[i], ...row);
    });
  }

  dfsRecursive(vertex: string, visited: Set<string> = new Set()) {
    const index = this.vertices.indexOf(vertex);
    if (index === -1) return;
    visited.add(vertex);
    console.log("Visited recursively: ", vertex);
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.matrix[index][i] === 1 && !visited.has(this.vertices[i])) {
        this.dfsRecursive(this.vertices[i], visited);
      }
    }
  }

  dfsIterative(vertex: string) {
    const index: number = this.vertices.indexOf(vertex);
    if (index === -1) return;

    const stack: number[] = [index];
    const visited: Set<string> = new Set();

    while (stack.length > 0) {
      const currrentIndex: number = stack.pop()!;
      const currentVertex: string = this.vertices[currrentIndex];

      if (!visited.has(currentVertex)) {
        visited.add(currentVertex);
        console.log("Visited iteratively: ", currentVertex);

        for (let i = 0; i < this.vertices.length; i++) {
          if (
            this.matrix[currrentIndex][i] === 1 &&
            !visited.has(this.vertices[i])
          ) {
            stack.push(i);
          }
        }
      }
    }
  }

  hasCycle(): boolean {
    const visited: Set<string> = new Set();
    const recursionStack: Set<string> = new Set();

    // Check each vertex as a starting point
    for (const vertex of this.vertices) {
      if (this.hasCycleUtil(vertex, visited, recursionStack)) {
        return true;
      }
    }
    return false;
  }

  private hasCycleUtil(
    vertex: string,
    visited: Set<string>,
    recursionStack: Set<string>
  ): boolean {
    const index = this.vertices.indexOf(vertex);
    
    // If vertex is already in recursion stack, we found a cycle
    if (recursionStack.has(vertex)) {
      return true;
    }
    
    // If vertex is already visited and not in recursion stack, 
    // no need to process it again
    if (visited.has(vertex)) {
      return false;
    }

    // Add vertex to both visited and recursion stack
    visited.add(vertex);
    recursionStack.add(vertex);

    // Check all adjacent vertices
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.matrix[index][i] === 1) {
        const adjacentVertex = this.vertices[i];
        if (this.hasCycleUtil(adjacentVertex, visited, recursionStack)) {
          return true;
        }
      }
    }

    // Remove vertex from recursion stack as we're done processing it
    recursionStack.delete(vertex);
    return false;
  }
}

const vertices2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const graphMatrix2 = new GraphMatrix2(vertices2);

graphMatrix2.addEdge("A", "B");
graphMatrix2.addEdge("A", "D");
graphMatrix2.addEdge("B", "C");
graphMatrix2.addEdge("B", "E");
graphMatrix2.addEdge("B", "G");
graphMatrix2.addEdge("B", "H");
graphMatrix2.addEdge("C", "D");
graphMatrix2.addEdge("C", "I");
graphMatrix2.addEdge("C", "J");
graphMatrix2.addEdge("D", "I");
graphMatrix2.addEdge("D", "J");
graphMatrix2.addEdge("E", "F");
graphMatrix2.addEdge("E", "G");
graphMatrix2.addEdge("E", "H");
graphMatrix2.addEdge("G", "H");

graphMatrix2.printMatrix();

graphMatrix2.dfsRecursive("A");
console.log(" ================= ");
graphMatrix2.dfsIterative("A");

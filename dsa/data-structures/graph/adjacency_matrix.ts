/**
 * DFS uses stack
 * BFS uses queue
 */

class GraphMatrix {
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
      this.matrix[j][i] = 1;
    }
  }

  // Print the adjacency matrix
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
}

const vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const graphMatrix = new GraphMatrix(vertices);
graphMatrix.addEdge("A", "B");
graphMatrix.addEdge("A", "D");
graphMatrix.addEdge("B", "C");
graphMatrix.addEdge("B", "E");
graphMatrix.addEdge("B", "G");
graphMatrix.addEdge("B", "H");
graphMatrix.addEdge("C", "D");
graphMatrix.addEdge("C", "I");
graphMatrix.addEdge("C", "J");
graphMatrix.addEdge("D", "I");
graphMatrix.addEdge("D", "J");
graphMatrix.addEdge("E", "F");
graphMatrix.addEdge("E", "G");
graphMatrix.addEdge("E", "H");
graphMatrix.addEdge("G", "H");

graphMatrix.printMatrix();

graphMatrix.dfsRecursive("A");
console.log(" ================= ");
graphMatrix.dfsIterative("A");

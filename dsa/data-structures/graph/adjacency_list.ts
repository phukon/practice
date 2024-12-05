class Graph {
  private adjacencyList: Map<string, string[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList.has(vertex)) this.adjacencyList.set(vertex, []);
  }

  addEdge(v1: string, v2: string) {
    if (!this.adjacencyList.get(v1)?.includes(v2)) {
      this.adjacencyList.get(v1)?.push(v2);
    }

    if (!this.adjacencyList.get(v2)?.includes(v1)) {
      this.adjacencyList.get(v2)?.push(v1);
    }
  }

  printGraph() {
    for (const [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} --> ${edges.join(", ")}`);
    }
  }
}

const gr = new Graph();
gr.addVertex("a");
gr.addVertex("b");
gr.addVertex("c");
gr.addVertex("d");
gr.addEdge("a", "b");
gr.addEdge("a", "c");
gr.addEdge("a", "d");
gr.printGraph();

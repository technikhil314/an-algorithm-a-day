export default class Graph {
  vertices: string[] = [];
  edges: {
    [index: string]: string[];
  } = {};
  addNode(vertex: string) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }
  addEdge(from: string, to: string) {
    this.edges[from].push(to);
  }
  display() {
    this.vertices.forEach((vertex) => {
      const vertexString = this.edges[vertex]
        .map((adjescentVertex) => {
          return `${vertex} -> ${adjescentVertex}`;
        })
        .join(" ");
      console.log(vertexString);
    });
  }
}

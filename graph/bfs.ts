import Graph from "../common/graph";

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");
graph.addNode("G");

graph.addEdge("A", "C");
graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("B", "G");

graph.display();

function bfs(graph: any, vertexToStart: string) {
  const queue: string[] = [];
  const visitedNodes = new Set();
  queue.unshift(vertexToStart);
  while (queue.length > 0) {
    const currentVertex: string = queue.shift() as string;
    console.log(currentVertex);
    visitedNodes.add(currentVertex);
    graph.edges[currentVertex].forEach((adjascentVertex: string) => {
      if (!visitedNodes.has(adjascentVertex)) {
        queue.push(adjascentVertex);
      }
    });
  }
}

bfs(graph, "A");

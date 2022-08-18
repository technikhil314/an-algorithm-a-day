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

function dfs(graph: any, vertexToStart: string) {
  const stack = [];
  const visitedNodes = new Set();
  stack.push(vertexToStart);

  while (stack.length > 0) {
    const currentVertex: string = stack.pop() as string;
    visitedNodes.add(currentVertex);
    console.log(currentVertex);
    graph.edges[currentVertex].forEach((adjascentVertex: string) => {
      if (!visitedNodes.has(adjascentVertex)) {
        stack.push(adjascentVertex);
      }
    });
  }
}

dfs(graph, "A");

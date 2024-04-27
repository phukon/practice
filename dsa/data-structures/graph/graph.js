const airports = 'PHK BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
  ['PHK', 'LAX'],
  ['PHK', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

const adjacencyList = new Map();

// add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// create graph
airports.forEach(addNode);
routes.forEach((rp) => addEdge(...rp));

console.log(adjacencyList);

// -- Traversal -----
// BFS

function bfs(start) {
  const visited = new Set();

  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift(); // mutates the queue

    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === 'BKK') {
        console.log(`BFS found Bangkok!`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}
bfs('BKK');

function dfs(start, visited = new Set()) {
  console.log(start)
  visited.add(start)

  const destinations = adjacencyList.get(start)

  for (const destination of destinations) {
    if (destination === 'BKK') console.log('DFS found Bangkok')

    if(!visited.has(destination)) {
      visited.add(destination)
      dfs(destination, visited)
    }

  }
}

dfs('BKK')
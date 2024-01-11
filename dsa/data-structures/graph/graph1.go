/**
* GRAPH
* - vertices are like the nodes in a tree
* - edges are the lines that connect each vertices
* - dense graph.: a lot of edges
* - sparese graph.: less edges
* - abstract data type

* - directed/undirected graph.:
*   - undirected.: every edge is bidirectional
* - tree structure is also a type of a graph, only that it has
*   restrictions on the number of edges each vertice can have,
*   it's directed, no cycles allowed, etc.

* Two common ways to represent a graph.:
* - Adjacency list
* - Adjacency matrix
*
* @see [GitHub](https://github.com/phukon/practice/blob/main/dsa/data-structures/graph/graph1.go)
*
**************************** Using Adjacency list ****************************
*                                                                            *
*                         Accessible from the outside                        *
*                                                                            *
*                              structure Graph                               *
*                             method.: AddVertex()                           *
*                             method.: Print()                               *
*                             method.: AddEdge()                             *
******************************************************************************
 */

package main

import "fmt"

// Graph structure, Adjacency list graph
type Graph struct {
	vertices []*Vertex
}

// Vertex structure
type Vertex struct {
	key      int
	adjacent []*Vertex
}

// Add Vertex
func (g *Graph) AddVertex(k int) {
	if contains(g.vertices, k) {
		err := fmt.Errorf("\nVertex %v not added beacause it's an existing key", k)
		fmt.Println(err.Error())
	} else {
		g.vertices = append(g.vertices, &Vertex{key: k})
	}
}

// prints the adjacent list for each Vertex of the graph
func (g *Graph) Print() {
	for _, i := range g.vertices {
		fmt.Printf("\nVertex %v: ", i.key)

		for _, a := range i.adjacent {
			fmt.Printf("%v ", a.key)
		}
	}
}

// Add Edge
func (g *Graph) AddEdge(from, to int) {
	// get Vertex
	fromVertex := g.getVertex(from)
	toVertex := g.getVertex(to)

	// check for errors (if edge already exists or adding edge to a non-existent vertice)
	if fromVertex == nil || toVertex == nil {
		err := fmt.Errorf("Invalid edge (%v ---> %v)", from, to)
		fmt.Println(err.Error())
	} else if contains(fromVertex.adjacent, to) {
		err := fmt.Errorf("Duplicate edge (%v ---> %v)", from, to)
		fmt.Println(err.Error())
	} else {
		fromVertex.adjacent = append(fromVertex.adjacent, toVertex)
	}

	// add edge
}

// getVertex
func (g *Graph) getVertex(k int) *Vertex {
	for i, v := range g.vertices {
		if v.key == k {
			return g.vertices[i]
		}
	}
	return nil
}

// contains
func contains(s []*Vertex, k int) bool {
	for _, v := range s {
		if k == v.key {
			return true
		}
	}
	return false
}

func main() {
	myGraph := &Graph{}

	for i := 0; i < 5; i++ {
		myGraph.AddVertex(i)
	}
	myGraph.AddEdge(1, 2)
	myGraph.AddEdge(1, 3)
	myGraph.AddEdge(1, 3)
	myGraph.AddEdge(1, 4)

	myGraph.AddEdge(500, 123)
	fmt.Println(myGraph)
	myGraph.Print()
}

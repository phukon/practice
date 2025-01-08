/**
* BINARY SEARCH TREE
* A tree that has nodes with no more than 2 children.
* Smaller child is on the left and larger on th right.
 */

package main

import "fmt"

var count int

// Node
type Node struct {
	key   int
	left  *Node
	right *Node
}

// Insert
// the key should not already be in the tree
func (n *Node) insert(key int) {
	if key > n.key {
		if n.right == nil {
			n.right = &Node{key: key}
		} else {
			n.right.insert(key)
		}
	} else if key < n.key {
		if n.left == nil {
			n.left = &Node{key: key}
		} else {
			n.left.insert(key)
		}
	} else {
	}
}

// Search
// return true if the key is present
func (n *Node) search(key int) bool {
	count++
	if n == nil {
		return false
	}
	if key > n.key {
		n.right.search(key)
	} else if key < n.key {
		n.left.search(key)
	}
	return true
}

func main() {
	myTree := &Node{key: 100}
	fmt.Println(myTree)
	myTree.insert(234)
	myTree.insert(34)
	myTree.insert(343)
	myTree.insert(4)
	myTree.insert(3324)
	myTree.insert(4545454534)
	fmt.Println(myTree)
	myTree.search(4)
	fmt.Println("the count.: ", count)
}

package main

import (
	"fmt"
)

type Node struct {
	Key   int
	Value interface{}
	Left  *Node
	Right *Node
}

type BSTMap struct {
	Root *Node
}

func (bst *BSTMap) insert(key int, value interface{}) {
	newNode := &Node{Key: key, Value: value}

	if bst.Root == nil {
		bst.Root = newNode
	} else {
		insertNode(bst.Root, newNode)
	}
}

func insertNode(node, newNode *Node) {
	if newNode.Key < node.Key {
		if node.Left == nil {
			node.Left = newNode
		} else {
			insertNode(node.Left, newNode)
		}
	} else {
		if node.Right == nil {
			node.Right = newNode
		} else {
			insertNode(node.Right, newNode)
		}
	}
}

func (bst *BSTMap) search(key int) interface{} {
	return searchNode(bst.Root, key)
}

func searchNode(node *Node, key int) interface{} {
	if node == nil {
		return nil
	}

	if key < node.Key {
		return searchNode(node.Left, key)
	} else if key > node.Key {
		return searchNode(node.Right, key)
	} else {
		return node.Value
	}
}

func main() {
	bst := &BSTMap{}

	bst.insert(5, "apple")
	bst.insert(3, "banana")
	bst.insert(7, "orange")
	bst.insert(2, "grape")
	bst.insert(4, "pear")

	fmt.Println(bst)
	fmt.Println(bst.search(3)) // Output: banana
	fmt.Println(bst.search(6)) // Output: <nil>

	bst1 := &BSTMap{}
	fmt.Println(bst1.search(3)) // Output: <nil>
}

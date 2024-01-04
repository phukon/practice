package main

import (
	"fmt"
)

type node struct {
	data int
	next *node
}

type linkedList struct {
	head   *node
	length int
}

// value receiver
func (l linkedList) printListData() {
	currentHead := l.head
	for l.length != 0 {
		fmt.Println(currentHead.data)
		currentHead = currentHead.next
		l.length--
	}
}

// pointer receiver
func (l *linkedList) prepend(n *node) {
	buffer := l.head
	l.head = n
	l.head.next = buffer
	l.length++
}

// pointer receiver
func (l *linkedList) deleteNode(value int) {
	// edge cases
	if l.length == 0 {
		fmt.Println("list is empty")
		return
	}

	if l.head.data == value {
		l.head = l.head.next
		l.length--
		fmt.Println("deleted head")
		return
	}

	prevNode := l.head
	for prevNode.next.data != value {
		if prevNode.next.next == nil {
			return
		}
		prevNode = prevNode.next
	}

	prevNode.next = prevNode.next.next
	l.length--
}

func main() {
	// create a list
	myList := linkedList{}

	// create nodes
	node1 := &node{data: 324}
	node2 := &node{data: 34}
	node3 := &node{data: 24}
	node4 := &node{data: 32344}

	// add nodes in the list, one-by-one
	myList.prepend(node1)
	myList.prepend(node2)
	myList.prepend(node3)
	myList.prepend(node4)

	fmt.Println(myList)
	myList.printListData()
	myList.deleteNode(24)

	fmt.Println("after deletion")
	myList.printListData()

	emptyList := linkedList{}
	emptyList.deleteNode(23)
	myList.deleteNode(32344)
}

package main

import "fmt"

type node struct {
	data int
	next *node
}

type linkedList struct {
	head   *node
	length int
}

func (ll *linkedList) addNode(data int) {
	newNode := &node{data: data, next: nil}

	if ll.head == nil {
		ll.head = newNode
		return
	}

	lastNode := ll.head
	for lastNode.next != nil {
		lastNode = lastNode.next
	}
	lastNode.next = newNode
}

func (ll *linkedList) display() {
	current := ll.head

	for current != nil {
		fmt.Printf("%d --> ", current.data)
		current = current.next
	}

	fmt.Println("nil")
}

func main() {
	list := linkedList{}

	list.addNode(214563)
	list.addNode(76)
	list.addNode(6473)
	list.addNode(437)
	list.addNode(242)
	list.addNode(23213)

	fmt.Println("The list.:")
	list.display()
}

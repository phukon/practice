/**
* STACK
* Last in First Out
* Ex.: Stack of books
 */

package main

import "fmt"

// holds a slice
type Stack struct {
	items []int
}

// push
func (s *Stack) push(i int) {
	s.items = append(s.items, i)
}

// pop
func (s *Stack) pop() int {
	l := len(s.items) - 1
	toRemove := s.items[l]
	s.items = s.items[:l]
	return toRemove
}

func main() {
	myStack := Stack{}
	fmt.Println(myStack)
	myStack.push(213)
	myStack.push(234)
	myStack.push(4313)
	fmt.Println(myStack)
	fmt.Println("removed.: ", myStack.pop())
	fmt.Println(myStack)
}

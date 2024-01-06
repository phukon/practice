/**
* QUEUE
 */
package main

import "fmt"

// QUEUE
type Queue struct {
	items []int
}

// Enqueue
func (q *Queue) Enqueue(d int) {
	q.items = append(q.items, d)
}

// Dequeue
func (q *Queue) Dequeue() int {
	toRemove := q.items[0]
	q.items = q.items[1:]
	return toRemove
}

func main() {
	myQueue := Queue{}
	fmt.Println(myQueue)
	myQueue.Enqueue(4352)
	myQueue.Enqueue(32)
	myQueue.Enqueue(12)
	myQueue.Enqueue(93580494574242)
	myQueue.Enqueue(43132)
	fmt.Println(myQueue)
	myQueue.Dequeue()
	myQueue.Dequeue()
	myQueue.Dequeue()

	fmt.Println(myQueue)
}

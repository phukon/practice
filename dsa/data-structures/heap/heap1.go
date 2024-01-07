/**
* HEAP
* - Given a node at index i, it's children are at indices 2i+1 and 2i+2
* - Parent can be found at (i-1)/2 [💡Integer division]
* - We insert a new key in the bottom to the right of the tree
* - Highest key is at the root node.
*
* If we remove the root, we fill the empty root with the last node. Then we start
* the swapping process from the top.
*
* Time complexity for Inserting and extracting is O(h) or O(log n) :--> h.: height of the tree.
* h and number of indices have a logarithmic relation
*
* @see [GitHub](https://github.com/phukon/practice/blob/main/dsa/data-structures/heap/heap1.go)
*
******************************** MAX HEAP ************************************
*                                                                            *
*                         Accessible from the outside                        *
*                                                                            *
*                         structure MaxHeap                                  *
*                         method.:  Insert()                                 *
*                         method.:  Extract()                                *
*                                                                            *
******************************************************************************
*                                                                            *
*                         method.:   maxHeapifyUp()                          *
*                         method.:   maxHeapifyDown()                        *
*                         method.:   swap                                    *
*                         function.: parent                                  *
*                         function.: left                                    *
*                         function.: right                                   *
*                                                                            *
******************************************************************************
 */package main

import "fmt"

// MaxHeap structure
type MaxHeap struct {
	array []int
}

// Inser adds an element to the heap
func (mh *MaxHeap) Insert(key int) {
	mh.array = append(mh.array, key)
	mh.maxHeapifyUp(len(mh.array) - 1)
}

// extract returns the largest key, and removes it from the heap
func (mh *MaxHeap) Extract() int {
	extracted := mh.array[0]
	lastIndex := len(mh.array) - 1

	if len(mh.array) == 0 {
		fmt.Println("Can't extract, array is empty!")
		return -1
	}

	mh.array[0] = mh.array[lastIndex]
	mh.array = mh.array[:lastIndex]

	mh.maxHeapifyDown(0)
	return extracted
}

// getting parent index
func parent(i int) int {
	return (i - 1) / 2
}

// get the left child index
func left(i int) int {
	return 2*i + 1
}

// get the right child index
func right(i int) int {
	return 2*i + 2
}

// swap keys in the array
func (mh *MaxHeap) swap(i1, i2 int) {
	mh.array[i1], mh.array[i2] = mh.array[i2], mh.array[i1]
	// We can do cool swaps!
	// @see [go.dev](https://go.dev/ref/spec#Assignment_statements:~:text=a%2C%20b%20%3D%20b,3%2C%205%2C%203%7D)
}

// maxHeapifyUp
func (mh *MaxHeap) maxHeapifyUp(index int) {
	for mh.array[parent(index)] < mh.array[index] {
		mh.swap(parent(index), index)
		index = parent(index)
	}
}

// maxHeapifyDown
//
//	CHECK CHECK CHECK CHECK CHECK!!!!!!!!!!!!!!!!!!
func (mh *MaxHeap) maxHeapifyDown(index int) {
	lastIndex := len(mh.array) - 1
	l, r := left(index), right(index)
	childToCompare := 0

	// do until the index/node has atleast one child
	for l <= lastIndex {
		// when left child is the only child
		if l == lastIndex {
			childToCompare = l
		} else if mh.array[l] > mh.array[r] { // or when left child larger
			childToCompare = l
		} else {
			// when right child is larger
			childToCompare = r
		}
		// compare
		if mh.array[index] < mh.array[childToCompare] {
			mh.swap(index, childToCompare)
			index = childToCompare
			l, r = left(index), right(index)
		} else {
			return
		}
	}
}

func main() {
	m := &MaxHeap{}
	fmt.Println(m)
	buildHeap := []int{12, 93, 42, 32, 33, 24, 54, 41, 13, 89, 43}

	for _, n := range buildHeap {
		m.Insert(n)
		fmt.Println(m)
	}

	for i := 0; i < 5; i++ {
		m.Extract()
		fmt.Println(m)
	}
}

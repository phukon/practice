/**
* HASH TABLE
* Collision resolution ↙
* - open addressing.: it basically scouts for another slot if the current one is occupied
* - separate chaining.: banger Array + linkedLists combo
*
* @see [GitHub](https://github.com/phukon/practice/blob/main/dsa/data-structures/hashtable/ht1.go)
*
*************** using separate chaining for Collision resolution *************
*                                                                            *
*                         HashTable part (Array)                             *
*                                                                            *
*                         structure HashTable                                *
*                         method.:  Insert()                                 *
*                         method.:  Search()                                 *
*                         method.:  Delete()                                 *
*                                                                            *
******************************************************************************
*                                                                            *
*                         Bucket part (linkedLists)                          *
*                                                                            *
*                         structure bucket                                   *
*                         structure bucketNode                               *
*                         method.:  insert()                                 *
*                         method.:  search()                                 *
*                         method.:  delete()                                 *
*                                                                            *
******************************************************************************
 */

package main

import "fmt"

const ArraySize int = 7

// hash function
// converts each character of the string into integers, sums up
// and then divides by the size of the array
func hash(key string) int {
	sum := 0
	for _, character := range key {
		sum += int(character)
	}

	return sum % ArraySize
}

// HashTable structure
type HashTable struct {
	array [ArraySize]*Bucket
}

// Bucket structure
type Bucket struct {
	head *BucketNode
}

// bucketNode structure
type BucketNode struct {
	key  string
	next *BucketNode
}

// Inserting will take a key and add it to the HashTable array
func (h *HashTable) Insert(key string) {
	index := hash(key)
	h.array[index].insert(key)
}

// Search
func (h *HashTable) Search(key string) bool {
	index := hash(key)
	return h.array[index].search(key)
}

// Delete
func (h *HashTable) Delete(key string) {
	index := hash(key)
	h.array[index].delete(key)
}

// insert
func (b *Bucket) insert(k string) {
	if !b.search(k) {
		newNode := &BucketNode{key: k}
		newNode.next = b.head
		b.head = newNode
	} else {
		fmt.Println("Key exists")
	}
}

// search
func (b *Bucket) search(k string) bool {
	currentNode := b.head

	for currentNode != nil {
		if currentNode.key == k {
			return true
		}
		currentNode = currentNode.next
	}
	return false
}

// delete
func (b *Bucket) delete(k string) {
	if b.head.key == k {
		b.head = b.head.next
		return
	}

	previousNode := b.head
	currentNode := previousNode.next

	for currentNode != nil {
		if currentNode.key == k {
			// deletes
			previousNode.next = currentNode.next
		}
		previousNode = previousNode.next // check
	}
}

// initialize each slot of the HashTable with a Bucket
func Init() *HashTable {
	result := &HashTable{}
	for i := range result.array {
		result.array[i] = &Bucket{}
	}
	return result
}

func main() {
	myHashTable := Init()
	list := []string{
		"Riki Phukon",
		"Linus Torvads",
		"Richard Stallman",
		"Chuck Yeager",
		"Dennis Ritchie",
		"Napolean Bonaparte",
		"Donald Duck",
	}

	for _, item := range list {
		myHashTable.Insert(item)
	}

	fmt.Println(myHashTable)

	myHashTable.Delete("Donald Duck")

	fmt.Println(myHashTable.Search("Donald Duck"))
}

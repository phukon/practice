/**
* ヾ(＠⌒ー⌒＠)ノ
* Array Slicing and Map Creation
*
* This code illustrates the usage of arrays, slices, and maps in Go.
* 
* The 'main' function demonstrates the following operations:
* - Declaring an array 'intArr' of size 4 with int32 elements.
* - Creating a slice 'mySlice' from an existing array and printing its contents.
* - Slicing 'mySlice' to create a new slice 'sliced' and displaying its elements.
* - Creating a slice 'makeSlice' using the 'make' keyword with a defined length and capacity.
* - Modifying 'sliced' slice and observing changes in the original 'mySlice'.
* - Creating an empty map 'myMap' with string keys and int values, and displaying it.
* - Populating 'intArr' elements and showcasing slicing operations on arrays.
* 
* The code serves as a basic illustration of array slicing, slice creation, modification,
* map initialization, and array slicing operations in Go.
* 
* @see [GitHub](https://github.com/phukon/practice/blob/main/golang/arrays/array-slice.go)
*/


package array 

import (
	"fmt"
)

func main() {
	var intArr [4]int32
	mySlice := []int{1, 2, 3, 4, 5}
	fmt.Println("Original slice:", mySlice)

	// Slicing the original slice to create a new slice
	sliced := mySlice[1:3]
	fmt.Println("Sliced slice:", sliced)

	makeSlice := make([]int, 5, 10) // length and capacity
	fmt.Println("This is made using the 'make' keyword: ", makeSlice)

	sliced[0] = 20
	fmt.Println("Modified sliced slice:", sliced)
	fmt.Println("Original slice after modification:", mySlice)

	// Maps
	myMap := make(map[string]int) // Creates an empty map with string keys and int values
	fmt.Println(myMap)

	intArr[0] = 0
	intArr[1] = 1
	intArr[2] = 2
	intArr[3] = 3
	fmt.Println(intArr)

	fmt.Println(intArr[0:1])

}

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

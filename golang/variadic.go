package main

import "fmt"

func sum(nums ...int) {
	fmt.Print(nums)
	total := 0

	for _, num := range nums {
		total += num
	}

	fmt.Println(total)
}

func main() {
	sum(32, 32)
	sum(1, 2, 3)
	intArr := [4]int{1, 2, 3, 4}

	// we can't pass an array, coverting it to slice
	sum(intArr[:]...) // variadic unpacking
}

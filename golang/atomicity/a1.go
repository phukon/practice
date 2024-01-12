package main

import "fmt"

func main() {
	var counter uint64

	for i := 0; i < 1000; i++ {
		go func() {
			counter++
		}()
	}

	fmt.Println(counter)
}

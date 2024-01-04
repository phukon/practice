package main

import (
	"fmt"
)

func main() {
	rewf := 12
	fmt.Println(fib(rewf))
}

func fib(n int) int {
	if n <= 1 {
		return n
	}
	return fib(n-1) + fib(n-2)
}

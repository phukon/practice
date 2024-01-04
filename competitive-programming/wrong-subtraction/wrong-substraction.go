/**
* Wrong Subtraction
* @see [codeforces](https://codeforces.com/problemset/problem/977/A)
 */

package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	n, err1 := strconv.Atoi(os.Args[1])
	k, err2 := strconv.Atoi(os.Args[2])

	if err1 != nil && err2 != nil {
		fmt.Println("Error occured in the parsing the arguments")
		return
	}

	fmt.Println(lfg(n, k))
}

func lfg(n int, k int) int {
	for i := 0; i < k; i++ {
		if n%10 == 0 {
			n /= 10
		} else {
			n--
		}
	}
	return n
}

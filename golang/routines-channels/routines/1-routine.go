/**
* ＜（＾－＾）＞
* CONCURRENT FUNCTION EXECUTION
*
* This code demonstrates the concurrent execution of functions using goroutines in Go.
* The 'main' function starts two goroutines:
*   1. Goroutine 'count1' with the argument "sheep".
*   2. Goroutine 'count1' with the argument "tree".
* 
* Each 'count1' goroutine prints the provided 'thing' argument at intervals of 500 milliseconds.
* These concurrent executions result in simultaneous printing of "sheep" and "tree" indefinitely.
* 
* This showcases how Go efficiently handles concurrent execution using goroutines, allowing the
* execution of multiple functions concurrently without blocking.
*
* @see [GitHub](https://github.com/phukon/practice/blob/main/golang/routines-channels/routines/1-routine.go)
*/

package main

import (
	"fmt"
	"time"
)

func main() {
	go count1("sheep")
	count1("tree")
}

func count1(thing string) {
	for i := 1; true; i++ {
		fmt.Println(thing)
		time.Sleep(time.Millisecond * 500)
	}
}

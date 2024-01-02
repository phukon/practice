/**
 * ¯\_(ツ)_/¯
 * Nuances
 * This will not print anything because the program exits when the main Go routine finishes.
 * Previously, the Go routine never finished because there was an infinite loop, BUT now we've
 * pushed our loop into its own Go routine, so the main function will immediately continue to
 * the next line. However, there are no more lines of code, so the program terminates. The Go
 * routines haven't had time to do anything.
 *
 * @see [GitHub](https://github.com/phukon/practice/blob/main/golang/routines-channels/routines/2-routine-problem.go)
 */

package main

import (
	"fmt"
	"time"
)

func main() {
	go count2("sheep")
	go count2("clock")
}

func count2(thing string) {
	for i := 1; true; i++ {
		fmt.Println(thing)
		time.Sleep(time.Millisecond * 500)
	}
}

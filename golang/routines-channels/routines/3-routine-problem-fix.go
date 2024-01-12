/**
* (☞ﾟヮﾟ)☞
* THE FIX: USING A WAIT GROUP
*
* This code demonstrates the implementation of a sync.WaitGroup in Go to ensure the completion
* of a goroutine before allowing the main function to exit, preventing premature termination
* of the program.
*
* The 'main' function initializes a sync.WaitGroup, adding one to its counter to wait for
* the completion of a goroutine. Inside the goroutine, the 'count3' function is executed to
* print "sheep" five times with a 500ms interval. Upon completion of the 'count3' function,
* the goroutine signals the sync.WaitGroup using 'wg.Done()' to decrement the counter.
*
* The 'wg.Wait()' call in the 'main' function blocks until the sync.WaitGroup counter becomes
* zero, allowing the 'main' function to exit only after the 'count3' goroutine has completed
* executing its task.
*
* This approach ensures that the program doesn't exit prematurely, giving the goroutine enough
* time to execute and print "sheep" five times before the program termination.
*
* @see [GitHub](https://github.com/phukon/practice/blob/main/golang/routines-channels/routines/3-routine-problem-fix.go)
 */

package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	var wg sync.WaitGroup
	wg.Add(1) // Increment the counter before starting a new goroutine

	go func() {
		count3("sheep")
		wg.Done() // Decrement the counter when the goroutine completes
	}()
	wg.Wait()
}

func count3(thing string) {
	for i := 1; i <= 5; i++ {
		fmt.Println(thing)
		time.Sleep(time.Millisecond * 500)
	}
}

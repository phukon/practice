/**
* We use WAITGROUP to wait for all the go routine to finish before completely
* executing the main function. It's kinda like AWAIT in Javascript
* But we have a major problem.: --> RACE CONDITION
* We solve by using the ATOMIC module in Golang
*
***************************** What's Atomicity? ******************************
*                                                                            *
*       Within the defined context, something is ATOMIC, IF it will          *
*       happen  in it's ENTIRETY, without anything else happening            *
*       simultaneously in the same CONTEXT                                   *
*                                                                            *
******************************************************************************
*
* Examples of atomic operations in programming include atomic reads and atomic
* writes, which ensure that the property being accessed or mutated cannot change
* during the operation. In multithreaded applications, atomic operations help
* prevent data inconsistencies and race conditions, ensuring that the program
* behaves correctly and consistently.
 */

package main

import (
	"fmt"
	"sync"
	"sync/atomic"
)

func main() {
	var counter uint64
	var wg sync.WaitGroup

	for i := 0; i < 1000; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			// counter++
			atomic.AddUint64(&counter, 1)
		}()
	}
	wg.Wait()

	fmt.Println(counter)
}

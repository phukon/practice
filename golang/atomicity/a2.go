/**
* We use WAITGROUP to wait for all the go routine to finish before comppletely executing the main function
* It's kinda like AWAIT in Javascript
* But we have a major problem.: --> RACE CONDITION
 */

package main

import (
	"fmt"
	"sync"
)

func main() {
	var counter uint64
	var wg sync.WaitGroup

	for i := 0; i < 1000; i++ {
		wg.Add(1)
		go func() {
			counter++
			wg.Done()
		}()
	}
	wg.Wait()

	fmt.Println(counter)
}

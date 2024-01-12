/**
* We use WAITGROUP to wait for all the go routine to finish before comppletely executing the main function
* It's kinda like AWAIT in Javascript
* But we have a major problem.: --> RACE CONDITION
* We solve by using Mutexes in Golang
 */

package main

import (
	"fmt"
	"sync"
)

func main() {
	var counter uint64
	var wg sync.WaitGroup
	var mu sync.Mutex

	for i := 0; i < 1000; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			mu.Lock()
			counter++
			mu.Unlock()
		}()
	}
	wg.Wait()

	fmt.Println(counter)
}

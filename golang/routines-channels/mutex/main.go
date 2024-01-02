package main

import (
	"fmt"
	"sync"
	"time"
)

var (
	count int
	lock  sync.Mutex
)

func main() {
	iterations := 1000

	for i := 0; i <= iterations; i++ {
		go increment()
	}

	time.Sleep(1 * time.Second)
	fmt.Println("The resulted count is: ", count)
}

func increment() {
	lock.Lock()
	count++
	lock.Unlock()
}

/**
* (⌐■_■)
* The Fibonacci numbers will not appear in sequential order due to concurrent execution
* across multiple goroutines (which utilize multiple threads under the hood).
* 
* Params:
* - 'jobs' channel is used solely for receiving data.
* - 'results' channel is used exclusively for sending data.
* 
* This code demonstrates concurrent calculation of Fibonacci numbers using goroutines
* and channels. Four worker goroutines are employed to process jobs sent through the
* 'jobs' channel and send results through the 'results' channel. Each worker executes
* Fibonacci calculations independently.
* 
* The 'main' function populates the 'jobs' channel with numbers from 0 to 100 and then
* closes the channel to signal that no more jobs will be sent.
* 
* Each worker receives numbers from 'jobs', calculates the Fibonacci value for each received
* number, and sends the result through the 'results' channel.
* 
* However, due to concurrent execution and the utilization of multiple threads by goroutines,
* the order in which Fibonacci numbers are calculated and sent through the 'results' channel
* isn't guaranteed to be sequential. Factors like scheduling, resources, and independent
* execution across multiple threads can lead to non-sequential printing of Fibonacci numbers
* in the 'main' function.
*
* @see [GitHub](https://github.com/phukon/practice/blob/main/golang/routines-channels/routines/3-routine-problem-fix.go)
*/

package main

import (
	"fmt"
)

func main() {
	jobs := make(chan int, 100)
	results := make(chan int, 100)

	go worker(jobs, results)
	go worker(jobs, results)
	go worker(jobs, results)
	go worker(jobs, results)

	for i := 0; i <= 100; i++ {
		jobs <- i
	}
	close(jobs)

	for j := 0; j <= 100; j++ {
		fmt.Println(<-results)
	}
}

/**
* Params
* We only receive on the 'jobs' channel
* We only send on the 'results' channel
 */

func worker(jobs <-chan int, results chan<- int) {
	for n := range jobs {
		results <- fib(n)
	}
}

func fib(n int) int {
	if n <= 1 {
		return n
	}

	return fib(n-1) + fib(n-2)
}

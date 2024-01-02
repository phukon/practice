/**
* ヾ(⌐■_■)ノ♪
* CHANNEL COMMUNICATION WITH SELECT
*
* This code demonstrates concurrent channel communication using goroutines and the 'select' statement.
* Two goroutines send messages to channels c1 and c2 respectively at different intervals.
* The first goroutine sends "Every 500ms" to channel c1 every half a second.
* The second goroutine sends "Every 1000ms" to channel c2 every two seconds.
* 
* The 'main' function uses the 'select' statement to receive messages from both channels without blocking.
* It continuously listens to both channels and prints the received message as soon as it becomes available,
* effectively handling non-blocking reception from multiple channels.
* 
* @see [GitHub](https://github.com/phukon/practice/blob/main/golang/routines-channels/channels/3-select.go)
*/

package main

import (
	"fmt"
	"time"
)

func main() {
	c1 := make(chan string)
	c2 := make(chan string)

	go func() {
		for {
			c1 <- "Every 500ms"
			time.Sleep(time.Millisecond * 500)
		}
	}()

	go func() {
		for {
			c2 <- "Every 1000ms"
			time.Sleep(time.Millisecond * 2000)
		}
	}()

	// This for loop will iterate only if it recieves data from both the channels
	//
	// for{
	//   fmt.Println(<- c1)
	//   fmt.Println(<- c2)
	// }

	/**
	 * This is why we use the SELECT statement, which allows
	 * to recieve from whichever channel is ready.
	 */
	for {
		select {
		case msg1 := <-c1:
			fmt.Println(msg1)
		case msg2 := <-c2:
			fmt.Println(msg2)
		}
	}

}

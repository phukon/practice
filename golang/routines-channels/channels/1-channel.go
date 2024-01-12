/**
* ψ(._. )>
* CHANNEL COMMUNICATION AND CLOSING SIGNALS
*
* To prevent a deadlock, we make sure to send a closing signal
* Never send a closing signal from the reciever.
*
* This code showcases channel communication in Go using goroutines and closing signals.
* The 'count' function sends messages to the channel 'c' a specified number of times, with delays.
* The 'main' function receives and prints these messages using a 'for range' loop.
*
* To avoid deadlock, the 'count' function closes the channel after sending all messages.
* The 'main' function utilizes a 'for range' loop to receive messages until the channel
* is closed, elegantly handling the loop termination.
*
* @see [GitHub](https://github.com/phukon/practice/blob/main/golang/routines-channels/channels/1-channel.go)
 */

package main

import (
	"fmt"
	"time"
)

func main() {
	c := make(chan string)
	go count("sheep", c)

	// infinite loop
	// for {
	//   msg, open := <- c
	//
	//   if !open {
	//     break // this line here breaks out of the loop
	//   }
	//
	//   fmt.Println(msg)
	// }

	// FANCY WAY
	for msg := range c {
		fmt.Println(msg)
	}
}

func count(thing string, c chan string) {
	for i := 1; i <= 5; i++ {
		c <- thing
		time.Sleep(time.Millisecond * 500)
	}
	close(c)
}

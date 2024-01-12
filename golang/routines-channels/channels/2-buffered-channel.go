/**
* /ᐠ｡ꞈ｡ᐟ\
* CHANNEL BUFFERS AND DEADLOCK
*
* This code demonstrates the usage of buffer channels in Go. A buffer channel
* allows sending specified messages without an immediate corresponding receiver.
* In this code, a channel 'c' with a buffer size of 2 is created.Two messages
* ("hello" and "world") are sent into the buffer channel without an immediate receiver.
*
* The first message is received and printed from the channel, and the second
* message is received and printed subsequently.
*
* We can fill up a BUFFER CHANNEL without a
* corresponding reciever and it won't block
* until the channel is full. Below I've made
* a channel with a buffer of 2. But if I try
* send data across the channel one more time,
* it will block and we'll go into a deadloack.
*
* However, attempting to send another message across the channel without an available receiver will cause a deadlock.
* This scenario leads to the program getting stuck as there's no space in the buffer to accommodate the additional message.
*
* @see [GitHub](https://github.com/phukon/practice/blob/main/golang/routines-channels/channels/2-buffered-channel.go)
 */

package main

import (
	"fmt"
)

func main() {
	c := make(chan string, 2)
	c <- "hello"
	c <- "world"

	msg := <-c
	fmt.Println(msg)

	msg1 := <-c
	fmt.Println(msg1)
}

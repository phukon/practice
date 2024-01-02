package main 

import (
  "fmt"
  
)

/**
* CHANNEL BUFFERS
* We can fill up a BUFFER CHANNEL without and
* corresponding reciever and it won't block
* until the channel is full. Below I've made
* a channel with a buffer of 2. But if I try
* send data across the channel one more time,
* it will block and we'll go into a deadloack.
*/

func main() {
  c := make(chan string, 2)
  c <- "hello"
  c <- "world"

  msg := <- c
  fmt.Println(msg)
  
  msg := <- c
  fmt.Println(msg)

}

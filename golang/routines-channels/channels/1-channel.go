/**
* COMMUNICATING WITH THE MAIN FUNC
* To prevent a deadlock, we make sure to send a closing signal
* Never send a closing signal from the reciever.
*/
package main 

import (
  "fmt"
  "time"
)

func main() {
  c := make(chan string)
  go count("sheep", c)

  // for {
  //   msg, open := <- c
  //   
  //   if !open {
  //     break
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
  for i := 1; i <=5; i++ {
    c <- thing 
    time.Sleep(time.Millisecond * 500)
  }
  close(c)
}

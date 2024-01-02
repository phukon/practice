/**
* THE FIX
* We use a wait-group
*/
package main 

import (
  "fmt"
  "time"
  "sync"
)

func main() {
  var wg sync.WaitGroup
  wg.Add(1)
  
  go func() {
    count3("sheep")
    wg.Done()
  }()
  wg.Wait()
 } 

func count3(thing string) {
  for i := 1; i <=5; i++ {
    fmt.Println(thing)
    time.Sleep(time.Millisecond * 500)
  }
}

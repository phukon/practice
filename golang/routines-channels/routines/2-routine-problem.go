/**
* Nuances
* This will not print anything because the program exits when the main Go routine finishes
* Previously, the Go routine never finished because their was an infinite loop, BUT now we've
* pushed our loop into it's own Go routine, so the main function will immediately continue to
* the next line, but there are no more lines of code, so the program terminates. The Go routi
* -nes haven't had time to do anything.
*/
package main 

import (
  "fmt"
  "time"
)

func main() {
  go count2("sheep")
  go count2("clock")
} 

func count2(thing string) {
  for i := 1; true; i++ {
    fmt.Println(thing)
    time.Sleep(time.Millisecond * 500)
  }
}

package main 

import (
  "fmt"
  "time"
)

func main() {
  go count1("sheep")
  count1("tree")
}

func count1(thing string) {
  for i := 1; true; i++ {
    fmt.Println(thing)
    time.Sleep(time.Millisecond * 500)
  }
}

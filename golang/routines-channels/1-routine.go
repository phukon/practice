package main

import (
  "fmt"
  "time"
)

func main() {
  go count("sheep")
  count("tree")
}



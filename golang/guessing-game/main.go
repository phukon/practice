package main

import (
	"fmt"
	"math/rand"
)

func main() {
	secret := getRandomNumber()
	fmt.Println(secret)

	// get user input
	guess := getUserInput()
}

func getUserInput() int {
	fmt.Print("please enter a number")
	fmt.Scan()
}

func getRandomNumber() int {
	return rand.Int()%11
}
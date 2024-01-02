package control 

import (
	"fmt"
)

func main() {
	var printValue int
	var flag bool

	fmt.Print("Pass something yo: ")
	_, err := fmt.Scanln(&printValue)
	if err != nil {
		flag = false
		fmt.Printf("I got this error yo: %v", err)
	} else {
		flag = true
		printMe(printValue, flag)
	}

}

func printMe(pv int, f bool) {
	fmt.Printf("this was passed: %v. I dunno what to make of it lol %v", pv, f)
}

/**
* ψ(._. )>
* User Input Handling
*
* This code showcases basic user input handling in Go. It prompts the user to enter an integer,
* reads the input, and then prints the entered integer along with a boolean flag indicating
* the success of the input operation.
* 
* The 'main' function prompts the user to input an integer. It reads the input and checks for
* any potential errors during the input operation. If an error occurs, it sets the flag to false
* and prints the encountered error. Otherwise, it sets the flag to true and calls the 'printMe'
* function to display the entered integer and the flag value.
* 
* The 'printMe' function displays the passed integer value and a boolean flag indicating the
* success of the user input operation.
* 
* This code serves as a basic demonstration of handling user input in Go using the fmt package
* for input/output operations and basic error handling with conditional branching.
* 
* @see [GitHub](https://github.com/phukon/practice/blob/main/golang/control-structure/control.go)
*/

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

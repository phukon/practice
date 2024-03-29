/**
* (^._.^)ﾉ
* Error Handling and switch statement
*
* This code demonstrates error handling and conditional branching using 'switch' statements
* to handle different division outcomes and potential errors in division operations.
* 
* The 'printMe' function displays a given string on the console.
* 
* The 'main' function prompts the user for a numerator and denominator, handling input errors.
* It performs integer division using the 'intDivision' function, which returns the division
* result, remainder, and potential errors like division by zero.
* 
* The 'main' function utilizes 'switch' statements to handle different division scenarios:
* - Checks for errors in division, exiting with an error message if encountered.
* - Displays division results with or without remainders, based on the division outcome.
* - Uses another 'switch' to categorize divisions as 'exact', 'close', or 'not close'
*   based on their remainders.
* 
* @see [GitHub](https://github.com/phukon/practice/blob/main/golang/errors-n-switch/main.go)
*/

package main

import (
	"errors"
	"fmt"
	"os"
)

func main() {
	var printValue string = "yo wassup!"
	printMe(printValue)

	var numerator, denominator int

	fmt.Println("Enter the numerator:")
	_, inputErr := fmt.Scan(&numerator)
	if inputErr != nil {
		fmt.Println("Invalid input for numerator:", inputErr)
		os.Exit(1)
	}

	fmt.Println("Enter the denominator:")
	_, inputErr = fmt.Scan(&denominator)
	if inputErr != nil {
		fmt.Println("Invalid input for denominator:", inputErr)
		os.Exit(1)
	}

	var result, remainder, err = intDivision(denominator, numerator)

	switch {
	case err != nil:
		fmt.Println(err.Error())
		os.Exit(1)
	case remainder == 0:
		fmt.Printf("The result of the division is %v.\n", result)
	default:
		fmt.Printf("The result of the division is %v with remainder %v.\n", result, remainder)
	}

	switch remainder {
	case 0:
		fmt.Println("Division was exact")
	case 1, 2:
		fmt.Println("Division was close")
	default:
		fmt.Println("Division was not close")
	}
}

func printMe(pv string) {
	fmt.Println(pv)
}

func intDivision(d int, n int) (int, int, error) {
	var err error
	if d == 0 {
		err = errors.New("cannot divide by zero")
		return 0, 0, err
	}

	var result int = n / d
	var remainder = n % d
	return result, remainder, err
}

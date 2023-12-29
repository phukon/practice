package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
    // Seed the random number generator
    rand.Seed(time.Now().UnixNano())

    // Generate a random number between 1 and 100
    randomNumber := rand.Intn(100) + 1

    // Initialize variables
    var guess int
    attempts := 0
    maxAttempts := 5

    fmt.Println("Welcome to the Guessing Game!")
    fmt.Println("Try to guess the number between 1 and 100.")

    // Game loop
    for {
        fmt.Print("Enter your guess: ")
        _, err := fmt.Scanf("%d", &guess)
        if err != nil {
            fmt.Println("Please enter a valid number.")
            continue
        }

        // Check if the guess is correct
        if guess < randomNumber {
            fmt.Println("Too low! Try again.")
        } else if guess > randomNumber {
            fmt.Println("Too high! Try again.")
        } else {
            fmt.Println("Congratulations! You guessed the correct number!")
            break
        }

        attempts++
        if attempts >= maxAttempts {
            fmt.Println("Sorry, you've reached the maximum number of attempts.")
            fmt.Printf("The number was %d.\n", randomNumber)
            break
        }
    }
}

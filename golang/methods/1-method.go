package main

import (
	"fmt"
)

// Define a struct for a Rectangle
type Rectangle struct {
	Width  float64
	Height float64
}

// Method for calculating area of Rectangle
func (r Rectangle) Area() float64 {
	return r.Width * r.Height
}

// Method for calculating perimeter of Rectangle
func (r Rectangle) Perimeter() float64 {
	return 2 * (r.Width + r.Height)
}

// Define a struct for a Circle
type Circle struct {
	Radius float64
}

// Method for calculating area of Circle
func (c Circle) Area() float64 {
	return 3.14 * c.Radius * c.Radius
}

func main() {
	rect := Rectangle{Width: 5.0, Height: 10.0}
	circ := Circle{Radius: 7.0}

	// Calculate area and perimeter of the rectangle
	rectArea := rect.Area()
	rectPerimeter := rect.Perimeter()

	// Calculate area of the circle
	circArea := circ.Area()

	// Display calculated values
	fmt.Println("Rectangle Area:", rectArea)
	fmt.Println("Rectangle Perimeter:", rectPerimeter)
	fmt.Println("Circle Area:", circArea)
}

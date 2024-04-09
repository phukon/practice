/**
 * ************ CONSTRUCTOR FUNCTION ************
 * These are used with the new keyword to create instances of objects.
 * They are essentially JavaScript functions that are used as classes
 * to create objects with a similar structure.
 * 
 * In JavaScript, every function (including constructor functions like Student)
 * has a prototype property by default. This prototype property is an object
 * that has a constructor property pointing back to the function itself.
 *
 * @see [GitHub](https://github.com/phukon/practice/tree/main/javascript/constructor-function.js)
 */

/**
 * Represents a SuperElement that creates elements and appends them to the body.
 * @constructor
 * @param {string} type - The type of HTML element to create.
 * @param {string} text - The text content to set for the element.
 */
function SuperElement(type, text) {
  // Create the HTML element and set its text content
  this.el = document.createElement(type);
  this.el.innerText = text;
  
  // Append the element to the document body
  document.body.append(this.el);
  
  // Add a click event listener to log when the element is clicked
  this.el.addEventListener("click", () => {
    console.log("Clicked!", this.el);
  });
}

// Create an array of text
const arrayOfText = [
  "s",
  "dea",
  "wef",
  "ewde",
  "dwed",
  "dewdw",
  "wdewwd",
  "dewd",
];

// Create instances of SuperElement using the array of text
const myElements = arrayOfText.map((text) => {
  return new SuperElement("ul", text);
});

// ---------- more 

// Constructor function for creating Person objects
/**
 * Represents a Person with a name and age.
 * @constructor
 * @param {string} name - The name of the person.
 * @param {number} age - The age of the person.
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the Person prototype
/**
 * Greets the person.
 * @method
 */
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating instances using the Person constructor
let person1 = new Person('Wolfram', 30);
let person2 = new Person('Ada', 25);

// Accessing object properties and methods
console.log(person1.name); // Output: Wolfram
person2.sayHello(); // Output: Hello, my name is Ada and I am 25 years old.

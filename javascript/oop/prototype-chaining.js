/**
 * Represents a person with a name and age.
 * @constructor
 * @param {string} name - The name of the person.
 * @param {number} age - The age of the person.
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

/**
 * Greets the person.
 * @method
 */
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Define a Person constructor function
// Add a method to the Person prototype
// Create a new object using the Person constructor
let person1 = new Person('Wolfram', 30);

// Access the sayHello method on person1
person1.sayHello(); // Output: Hello, my name is Wolfram and I am 30 years old.


function Student(name, age, grade) {
  // Call the Person constructor to set the name and age properties
  Person.call(this, name, age);
  this.grade = grade;
}

// Set up prototype chain for inheritance
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

// Add a method specific to Student
/**
 * Study method for students.
 * @method
 */
Student.prototype.study = function() {
  console.log(`${this.name} is studying hard for the exams.`);
};

// Create a new Student object
let student1 = new Student('Ada', 25, 'A');

// Access properties and methods from both Person and Student
student1.sayHello(); // Output: Hello, my name is Ada and I am 25 years old.
student1.study();    // Output: Ada is studying hard for the exams.

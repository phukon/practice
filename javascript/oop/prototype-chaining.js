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

// Let's demonstrate prototype chaining
// Create a Student constructor that inherits from Person
/**
 * Represents a student who is a person and has a grade.
 * @constructor
 * @param {string} name - The name of the student.
 * @param {number} age - The age of the student.
 * @param {string} grade - The grade of the student.
 * @augments Person
 * @notes
 * Setting up a prototype chain here
 * 
 * What the heck is happening?
 * -> By default, when we create a function in JavaScript, it automatically gets a prototype object,
 * -> and this object has a property called constructor that points back to the function itself.
 * -> However, when we set Student.prototype to a new object using Object.create(), it creates a
 * -> new object with a different constructor property (pointing to Person instead of Student).
 * -> To correct this behavior and ensure that Student.prototype.constructor points to Student,
 * -> we explicitly set it in this line.
 */
function Student(name, age, grade) {
  // Call the Person constructor to set the name and age properties
  Person.call(this, name, age);
  this.grade = grade;
}

// Set up a prototype chain here
// Set up prototype chain for inheritance

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

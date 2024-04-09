/**
 * A constructor in object-oriented programming (OOP) is a special method or function
 * that is automatically called when a new instance (object) of a class is created.
 * Its primary purpose is to initialize the object's properties or perform any setup
 * necessary for the object to function properly.
 */

/**
 * Represents a person with a name and age.
 * @class
 */
class Person {
  /**
   * Creates an instance of Person.
   * @constructor
   * @param {string} name - The name of the person.
   * @param {number} age - The age of the person.
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Creating an instance of the Person class
let person1 = new Person("John Doe", 30);
console.log(person1.name); // Output: John Doe
console.log(person1.age);  // Output: 30

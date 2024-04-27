function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log("Hello, I'm %s and I'm %d years old!", this.name, this.age);
};

function Student(name, age, subject) {
  Person.call(this, name, age); // it makes the state with name and age props
  this.subject = subject; // and now we define the extra state that comes with the student
}

/**
 * Seting up the prototype chain
 * What the heck is happening?
 * -> By default, when we create a function in JavaScript, it automatically gets a prototype object,
 * -> and this object has a property called constructor that points back to the function itself.
 * -> However, when we set Student.prototype to a new object using Object.create(), it creates a
 * -> new object with a different constructor property (pointing to Person instead of Student).
 * -> To correct this behavior and ensure that Student.prototype.constructor points to Student,
 * -> we explicitly set it in this line.
 */
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

Student.prototype.study = function () {
  console.log("I'm studying", this.subject);
};

let pooh = new Person('Pooh', 69)
let winnie = new Student('Winnie', 20, 'Maths')


pooh.sayHello()

winnie.sayHello()
winnie.study()
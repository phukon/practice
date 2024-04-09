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

// Setup the prototype chain
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
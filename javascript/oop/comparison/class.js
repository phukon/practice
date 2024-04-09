class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log("Hello, I'm %s and I'm %d years old!", this.name, this.age)
  }
}

class Student extends Person {
  constructor(name, age, subject) {
    super(name, age) // calling the parent's constructor
    /**
     * Its primary purpose of a constructor is to initialize the object's
     * state or set up the object with initial values or configurations.
     */
    this.subject = subject
  }

  study() {
    console.log("I'm studying", this.subject)
  }
}

let pooh = new Person('Pooh', 69)
let winnie = new Student('Winnie', 20, 'Maths')


pooh.sayHello()

winnie.sayHello()
winnie.study()

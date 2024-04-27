const person = {
  name: 'Riki',
  job: 'Data Engineer',
  interests: ['Engineering', 'Calithenics', 'Radios'],

  /*
   ********************************************************
   *           The getter setter pattern                  *
   ********************************************************
   */
  get getterHeadline() {
    return `${this.name} is a ${this.job} and is mainly interested in ${this.interests[0]}.`;
  },
  set setterPrimaryInterest(val) {
    this.interests.unshift(val);
  },
  /*
   ********************************************************
   *      The normal way of defining a method             *
   ********************************************************
   */
  methodHeadline() {
    return `${this.name} is a ${this.job} and is mainly interested in ${this.interests[2]}.`;
  },
  methodPrimaryInterest(val) {
    this.interests.unshift(val);
  },
};

console.log(person.getterHeadline); // getter. Use like it were a property on the object
console.log(person.methodHeadline()); // used like a normal method


console.log('\nchanging primary interest')
person.setterPrimaryInterest = "Running"
console.log(person.getterHeadline); 

console.log('\nchanging primary interest')
person.methodPrimaryInterest("Rock climbing")
console.log(person.getterHeadline);


// -------------------- CLASS BASED EXAMPLE -------------------------
class Person {
  #name; // Private property

  constructor(name) {
    this.name = name; // Calls the setter method
  }

  // Getter for name
  get name() {
    return this.#name.toUpperCase();
  }

  // Setter for name
  set name(val) {
    // Add any additional validation logic if needed
    this.#name = val;
  }
}

const riki = new Person('riki');
console.log(riki.name); // Outputs: "RIKI"

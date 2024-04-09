class Circle {
  static #SECRET_KEY = 'abc123'; // Private static field

  static getSecretKey() {
    return Circle.#SECRET_KEY; // Accessing private static field
  }
}

// console.log(Circle.#SECRET_KEY); // Error: Private field '#SECRET_KEY' is not accessible outside class
console.log(Circle.getSecretKey()); // Accessing private static field via method

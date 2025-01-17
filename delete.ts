class LOLERROR extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LOLERROR";

    Object.setPrototypeOf(this, LOLERROR.prototype);
  }
}

function innerFunction() {
  try {
    // Simulate an error
    throw new LOLERROR("Something went wrong in innerFunction");
  } catch (err) {
    // console.log("Caught in innerFunction:", err);
    // Rethrow the error to be handled by the outer function
    throw err;
  }
}

function outerFunction() {
  try {
    innerFunction();
  } catch (err) {
    console.log("Caught in outerFunction:", err);
    // Handle the error or log it
    console.log("Handling error in outerFunction and recovering");
    throw err;
  }
}

function main() {
  try {
    outerFunction();
  } catch (err) {
    console.log("Caught in main:", err);
  }
}

// Run the main function
main();

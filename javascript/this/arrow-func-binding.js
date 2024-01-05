// constructor function

function Person(n) {
  this.name = n;
  this.talk = function () {
    console.log("The value of 'this' .:\n", this);
  };

  /**
   * Callback functions are written in an entirely different context
   * Just because it's inside the constructor function, doesn't mean
   * that it's gonna autmatically have the binding.
   */
  setTimeout(function () {
    console.log(this);
  }, 200);
}

const p = new Person("Linus Torvalds");
p.talk();

// -------------
function betterPerson(n) {
  this.name = n;
  this.talk = function () {
    console.log("The value of 'this' .:\n", this);
  };

  /**
   * Callback functions are written in an entirely different context
   * Just because it's inside the constructor function, doesn't mean
   * that it's gonna autmatically have the binding.
   */
  setTimeout(
    function () {
      console.log(
        "This is manually binded to the object passed into it.",
        this,
      );
    }.bind(this),
    200,
  );
}

const me = new betterPerson("Riki Phukon");

/** ------ OR ------
 * I can use an arrow function, and it's bound to the execution context.
 */

function arrowPerson(n) {
  this.name = n;
  this.talk = function () {
    console.log("The value of 'this' .:\n", this);
  };

  /**
   * Callback functions are written in an entirely different context
   * Just because it's inside the constructor function, doesn't mean
   * that it's gonna autmatically have the binding.
   */
  setTimeout(
    () =>
      console.log(
        "This is manually binded to the object passed into it.",
        this,
      ),
    200,
  );
}

const you = new arrowPerson("Sean Strickland");

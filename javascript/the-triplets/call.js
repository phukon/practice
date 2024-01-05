/**
 * The call method is used to call/borrow(use) a function from someone else.
 * Or should I say invoke a METHOD with an owner object passed as an argument to it.
 */

let name1 = {
  firstname: "riki",
  lastname: "phukon",
  printFullname: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};

name1.printFullname();

let name2 = {
  firstname: "alan",
  lastname: "turing",
};

name1.printFullname.call(name2); // doing this I pointed the 'THIS' to 'name2'

/** ---------------- ----------------- --------------
 * We don't usually keep our reusable methods/functions inside an object.
 * Instead, we do something like this ↘
 */

let fullnameWithSugar = function () {
  console.log(
    "Here is one great engineer/scientist.: ",
    this.firstname + " " + this.lastname,
  );
};

fullnameWithSugar.call(name1);

// Passing Arguments

let moreInfo = function (s, d, c) {
  console.log(
    `${this.firstname} is from ${s} and has two pets. Namely ${d} and ${c}`,
  );
};

// Now we pass the arguments, comma separated
let buffer = moreInfo.call(name1, "Assam", "Fudu", "Luki");

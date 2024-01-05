/**
 * BIND doesn't directly invoke the method unlike CALL and APPLY.
 * It gives the copy of the method to be invoked later.
 * IT RETURNS A FUNCTION.
 *
 * @see [GitHub](https://github.com/phukon/practice/tree/main/javascript/this/the-triplets)
 */

let name1 = {
  firstname: "riki",
  lastname: "phukon",
};

let moreInfo = function (s, d, c) {
  console.log(
    `${this.firstname} is from ${s} and has two pets. Namely ${d} and ${c}`,
  );
};

// However we can't pass it as a list/array of arguments

let buffer = moreInfo.bind(name1, "Assam", "Fudu", "Luki");
buffer();

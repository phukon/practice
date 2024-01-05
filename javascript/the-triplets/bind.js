/**
 * BIND doesn't directly invoke the method unlike CALL and APPLY.
 * It gives the copy of the method to be invoked later
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

let buffer = moreInfo.bind(name1, "Assam", "Fudu", "Luki");
buffer();

/**
 * In the CALL method we passed the arguments individually, comma separated.
 * However in APPLY method, we pass the arguments as a second argument as an array list.
 */

let name1 = {
  firstname: "riki",
  lastname: "phukon",
};

let name2 = {
  firstname: "alan",
  lastname: "turing",
};

let moreInfo = function (s, d, c) {
  console.log(
    `${this.firstname} is from ${s} and has two pets. Namely ${d} and ${c}`,
  );
};

moreInfo.apply(name1, ["Assam", "Luki", "Fudu"]);
moreInfo.apply(name2, ["UK", "Spot", "Lilly"]);

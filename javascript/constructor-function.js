/**
 * ************ CONSTRUCTOR FUNCTION ************
 * These are used with the new keyword to create instances of objects.
 * They are essentially JavaScript functions that are used as classes
 * to create objects with a similar structure.
 *
 * @see [GitHub](https://github.com/phukon/practice/tree/main/javascript/constructor-function.js)
 */

function SuperElement(type, text) {
  this.el = document.createElement(type);
  this.el.innerText = text;
  document.body.append(this.el);
  this.el.addEventListener("click", () => {
    console.log("Clicked!", this.el);
  });
}

const arrayOfText = [
  "s",
  "dea",
  "wef",
  "ewde",
  "dwed",
  "dewdw",
  "wdewwd",
  "dewd",
];

const myElements = arrayOfText.map((text) => {
  return new SuperElement("ul", text);
});

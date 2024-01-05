/**
 * Factory Functions
 * It's used to create and return objects or instances of other functions or classes.
 * Instead of using constructors or directly creating objects, a factory function acts
 * as a centralized way to produce instances based on certain parameters or conditions.
 *
 * ******* Footnote *******
 * We already have a DOM api(s) that can do the stuff this function is doing.
 * function
 *
 * @see [GitHub](https://github.com/phukon/practice/tree/main/javascript/factory-function.js)
 */

function createElement(type, text, color) {
  const element = document.createElement(type);
  element.innerText = text;
  element.style.color = color;
  document.append(element);

  return {
    setText(text) {
      element.innerText(text);
    },
    setColor() {
      element.style.color = color;
    },
  };
}

const h1 = createElement("h1", "Heading in h1", "green");

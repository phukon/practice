const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: {
    h: 5,
  },
};

function flatten_object(obj: any, parent_key = "") {
  let flat_obj = Object.create(null);

  for (let key in obj) {
    let new_key = parent_key ? `${parent_key}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      Object.assign(flat_obj, flatten_object(obj[key], new_key));
    } else {
      flat_obj[new_key] = obj[key];
    }
  }

  return flat_obj;
}

let obj = flatten_object(nestedObject);
console.log(obj);

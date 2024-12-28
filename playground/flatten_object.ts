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

// function flatten_object(
//   obj: Record<string, any>,
//   parentKey: string = "",
// ): Record<string, any> {
//   let flatObject: Record<string, any> = Object.create(null);
//
//   for (let key in obj) {
//     let newKey = parentKey ? `${parentKey}++${key}` : key;
//
//     if (
//       typeof obj[key] === "object" &&
//       obj[key] !== null &&
//       !Array.isArray(obj[key])
//     ) {
//       flatObject = { ...flatObject, ...flatten_object(obj[key], newKey) };
//     } else {
//       flatObject[newKey] = obj[key];
//     }
//   }
//
//   return flatObject;
// }

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

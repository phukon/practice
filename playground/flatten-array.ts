const lol = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number,
): MultiDimensionalArray {
  const flattened_array: MultiDimensionalArray = [];

  function helper(arrray: MultiDimensionalArray, depth = 0) {
    for (const element of arrray) {
      if (Array.isArray(element) && depth < n) {
        helper(element, depth + 1);
      } else {
        flattened_array.push(element);
      }
    }
  }

  helper(arr, 0);
  return flattened_array;
};

console.log(flat(lol, 1));

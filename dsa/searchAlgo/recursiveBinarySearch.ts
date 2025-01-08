function binarySearchRec(nums: number[], target: number): number {
  function helper(left: number, right: number) {
    let mid: number = Math.floor((left + right) / 2);

    if (left > right) return -1;

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      return helper(mid + 1, right);
    } else {
      return helper(left, mid - 1);
    }
  }

  return helper(0, nums.length - 1);
}
// function recursivebinarysearch(arr, target) { if (arr.length === 0) return -1;
//   return search(arr, target, 0, arr.length - 1);
// }
//
// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) return -1;
//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if (target === arr[middleIndex]) return middleIndex;
//   if (target < arr[middleIndex])
//     return search(arr, target, leftIndex, middleIndex - 1);
//   else return search(arr, target, middleIndex + 1, rightIndex);
// }
//
let arr1: number[] = [-7, -6, -4, 3, 4, 34];

console.log(binarySearchRec(arr1, -5));
console.log(binarySearchRec(arr1, -4));
console.log(binarySearchRec(arr1, -55));
console.log(binarySearchRec(arr1, 3));
console.log(binarySearchRec(arr1, 34));
//
// you forgot to return the results to the callstack
// When you make a recursive call, you need to return the result of that call back up the call stack.
// O(log(n))

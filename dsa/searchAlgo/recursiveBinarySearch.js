function recursivebinarysearch(arr, target) {
  if (arr.length === 0) return -1
  return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (target === arr[middleIndex]) return middleIndex
  if (target < arr[middleIndex])
    return search(arr, target, leftIndex, middleIndex - 1)
  else return search(arr, target, middleIndex + 1, rightIndex)
}

console.log(recursivebinarysearch([-7, -6, -4, 3, 4, 34], -5))
console.log(recursivebinarysearch([-7, -6, -4, 3, 4, 34], -7))
console.log(recursivebinarysearch([-7, -6, -4, 3, 4, 34], 34))
console.log(recursivebinarysearch([-7, -6, -4, 3, 4, 34], 3))

// you forgot to return the results to the callstack
// When you make a recursive call, you need to return the result of that call back up the call stack.
// O(log(n))
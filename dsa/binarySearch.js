function binarySearch(arr, target) {
  if (arr.length === 0) return -1
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) return middleIndex
    if (target < arr[middleIndex]) rightIndex = middleIndex - 1
    else leftIndex = middleIndex + 1
  }
  return -1
}

console.log(binarySearch([-7, -6, -4, 3, 4, 34], -5))
console.log(binarySearch([-7, -6, -4, 3, 4, 34], -7))
console.log(binarySearch([-7, -6, -4, 3, 4, 34], 34))
console.log(binarySearch([-7, -6, -4, 3, 4, 34], 3))

// O(log(n))

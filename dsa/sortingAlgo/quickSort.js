console.time('quickSort') // Start the timer

function quickSort(arr) {
  if (arr.length < 2) return arr
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    else right.push(arr[i])
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [-1, -6, -4, 312, 4, 34]
sortedArray = quickSort(arr)

console.timeEnd('quickSort') // Stop the timer and log the elapsed time

console.log(sortedArray)

// worst case: O(n^2)
// O(n X logn)

function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let nti = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = nti
  }
}

const arr = [-1, -6, -4, 312, 4, 34]
insertionSort(arr)
console.log(arr)

// O(n^2)
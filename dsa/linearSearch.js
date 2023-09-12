function linearSearch(arr, target) {
  for(i = 0; i <= arr.length; i++) {
    if(arr[i] === target ) return i
  }
  return -1
}

console.log(linearSearch([-5, -6, -4, 3, 4, 34], -5))
console.log(linearSearch([-5, -6, -4, 3, 4, 34], 3))
console.log(linearSearch([-5, -6, -4, 3, 4, 34], 34))
console.log(linearSearch([-5, -6, -4, 3, 4, 34], 9))

// O(n)
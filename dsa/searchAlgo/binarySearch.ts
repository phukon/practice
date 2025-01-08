function binarySearch(nums: number[], target: number): number {
  let left: number = 0,
    right: number = nums.length - 1;

  let mid: number;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let arr: number[] = [-7, -6, -4, 3, 4, 34];

console.log(binarySearch(arr, -5));
console.log(binarySearch(arr, -4));
console.log(binarySearch(arr, -55));
console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 34));

// O(log(n))

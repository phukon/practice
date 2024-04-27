function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midVal = arr[mid];

        if (midVal === target) {
            return mid; // Found the target element
        } else if (midVal < target) {
            left = mid + 1; // Continue searching in the right half
        } else {
            right = mid - 1; // Continue searching in the left half
        }
    }

    return -1; // Target not found
}

function binarySearchRecursive(arr, target, start=0, end = arr.length -1) {
  if(start > end) {
    return -1
  }

  const middle = Math.floor((start + end) / 2)
  if(arr[middle] === target) return middle
  if(arr[middle] < target) return binarySearchRecursive(arr, target, middle + 1, end)
  if(arr[middle] > target) return binarySearchRecursive(arr, target, start, middle - 1)
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetElement = 7;
const index = binarySearch(sortedArray, targetElement);
const index1 = binarySearchRecursive(sortedArray, targetElement)

if (index !== -1) {
    console.log(`Found ${targetElement} at index ${index}`);
} else {
    console.log(`${targetElement} not found in the array`);
}

if (index1 !== -1) {
    console.log(`Found ${targetElement} at index ${index1}`);
} else {
    console.log(`${targetElement} not found in the array`);
}

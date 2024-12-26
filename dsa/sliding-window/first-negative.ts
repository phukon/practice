function first_negative(): number[] {
  const array: number[] = [12, -1, -7, 8, -15, 30, 16, 28];
  const k = 3;
  const result: number[] = [];
  const queue: number[] = []; // Queue to store indices of negative numbers

  // building the window
  for (let i = 0; i < k; i++) {
    if (array[i] < 0) {
      // storing the index of the negative numbers because we want to filter
      // maintain the window size by filtering over the indexes (removing all elements till `i-k` ... inclusive)
      queue.push(i);
    }
  }

  // Process the remaining windows
  for (let i = k; i <= array.length; i++) {
    // Add the first negative number of the current window to the result
    if (queue.length > 0) {
      result.push(array[queue[0]]);
    } else {
      result.push(0);
    }

    // Remove elements that are out of this window
    while (queue.length > 0 && queue[0] <= i - k) {
      queue.shift();
    }

    // Add the current element if it's negative
    if (i < array.length && array[i] < 0) {
      queue.push(i);
    }
  }

  return result;
}

console.log(first_negative());

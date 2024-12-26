# Sliding Window technique

### Fixed length widow

- Make a window of fixed size
- A state to maintain in the window
- A way to derive the next state using only the current state and the stuff that enters or leaves the window.

### Variable length window

Initialize Variables:

Two pointers l (left) and r (right).
A tracking data structure (e.g., Set, Map).
A result to store the optimal outcome.
Expand the Window:

Iterate with r over the input.
Add the current element to the tracking structure.
Shrink the Window:

While the window is invalid, increment l to shrink the window and update the tracking structure.
Update Result:

After each valid window, update the result based on the current window size or condition.
Return the Result.

<b> Template Code </b>

```typescript
function slidingWindow(arr: any[]): number {
  let l = 0,
    result = 0;
  let windowData = new Set();

  for (let r = 0; r < arr.length; r++) {
    while (windowData.has(arr[r])) {
      windowData.delete(arr[l]);
      l++;
    }
    windowData.add(arr[r]);
    result = Math.max(result, r - l + 1);
  }

  return result;
}
```

```typescript
/**
 * Generic Dynamic Sliding Window Template
 *
 * @template T - Type of array elements
 * @param arr - Input array to process
 * @param constraintFn - Function to check window constraint
 * @returns Optimal result based on problem requirements
 */
function dynamicSlidingWindow<T>(
  arr: T[],
  constraintFn: (window: T[]) => boolean,
  resultFn: (window: T[]) => number,
): number {
  let windowStart = 0;
  let windowEnd = 0;
  let bestResult = Number.MIN_SAFE_INTEGER;
  const currentWindow: T[] = [];

  while (windowEnd < arr.length) {
    // Expand window
    currentWindow.push(arr[windowEnd]);

    // Check if window violates constraint
    while (!constraintFn(currentWindow)) {
      // Shrink window from start
      currentWindow.shift();
      windowStart++;
    }

    // Update best result
    bestResult = Math.max(bestResult, resultFn(currentWindow));

    windowEnd++;
  }

  return bestResult;
}
```

function prefixSum() {
  const from: number = 5;
  const to: number = 8;

  const arr: number[] = [8, 3, -2, 4, 10, -1, 0, 5, 3];
  const prefixSumArray: number[] = [0];
  let sum: number = 0;
  let consecutive_sum: number = 0;

  for (let element of arr) {
    sum += element;
    prefixSumArray.push(sum);
  }
  console.log("Prefic sum array\n", prefixSumArray);

  consecutive_sum = prefixSumArray[to + 1] - prefixSumArray[from];

  console.log(`Sum from index ${from} to ${to} : `, consecutive_sum);
}

prefixSum();

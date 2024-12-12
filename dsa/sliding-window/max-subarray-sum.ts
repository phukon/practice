function max_sub_sum() {
  const input_array: number[] = Array.from({ length: 42 }, (_, i: number) =>
    Math.ceil(Math.random() * (i + 1)),
  );

  let max_sum: number = 0;

  const k: number = 5;
  let window_sum: number = 0;

  for (let i = 0; i < k; i++) {
    window_sum += input_array[i];
  }

  for (let i = k; i < input_array.length; i++) {
    window_sum = window_sum + input_array[i] - input_array[i - k];
    if (window_sum > max_sum) max_sum = window_sum;
  }

  return max_sum;
}

console.log(max_sub_sum());

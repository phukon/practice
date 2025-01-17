function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    let value = nums[index];
    let complement = target - value;

    if (map.has(complement)) {
      return [map.get(complement)!, index];
    }
    map.set(value, index);
  }

  throw new Error("No two sum solution");
}

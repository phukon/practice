/**
 * https://www.youtube.com/watch?v=xbYr9JOC2Lk&pp=ygUUcHJlZml4IHN1bSBhbGdvcml0aG0%3D
 * Normally, we would calculate the sum of the index i4 to i8 by doing:
 * i8 - i3 --> we are trying to remove the sum up until i3
 * Therefore for sum from ix to iy (where x > y)
 * sum => ix - i(y-1)
 *
 * So for sum from index 4 to index 7
 * indices         => [ 0,  1,  2,   3,  4,  5,  6,   7,  8]
 * originalArray   => [ 8,  3, -2, >4<, 10, -1,  0, >5<,  3]
 * prefixSumArray  => [ 8, 11,  9,  13, 23, 22, 22,  27, 30]
 *
 * sum             => 27 - 13 = 14
 *
 * But what if iy = 0 ?! i(y - 1) will then be negative!
 * One elegant solution is to add an additional zero at the beginning of the prefixSumArray.
 * So the solution becomes
 * sum             => i(x + 1) - iy
 * indices         => [ 0,  1,  2,  3,  4,  5,  6,  7,  8]
 * originalArray   => [ 8,  3, -2,  4, 10, -1,  0,  5,  3]
 * prefixSumArray  => [ 0,  8, 11,  9, 13, 23, 22, 22, 27, 30]
 */

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

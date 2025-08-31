/*
An Addicted Data Scientist
Let's pretend that I'm a data scientist that absolutely loves chocolate. As a data scientist, I naturally keep track of the number of chocolates that I eat on a daily basis. One day I wondered — how many chocolates do I eat on average over any consecutive 3 day period? (an every-day question to ask, of course).

I could do this by hand, but I'm lazy. I also want it to work with any period of consecutive days and with any number of data points I may have. So I decide to write an algorithm to answer this question for me.

The algorithm takes in two parameters — a list of data points chocolates, where each number represents the number of chocolates I ate on a given day, and a number period that represents the period of consecutive days I want to take the average from. The algorithm should output another list of numbers, where each number represents the average number of chocolates eaten over a consecutive period number of days.

averageChocolatesEaten(chocolates: number[], period: number): number[]
For example, if we give the algorithm the list [1, 2, 3, 4] and the period 3, the algorithm's going to return the list [2, 3]. [1, 2, 3, 4] breaks down into two 3-day periods, [1, 2, 3], and [2, 3, 4], with an average of 2 and 3 respectively.
*/

let sublist_size = 3;
let averages: number[] = [];
let sublists: number[][] = [];
// let data: number[] = [80, 36, 16, 34, 15, 96, 71, 15, 55, 19];
let arrayLength = 10000000;
// Generate an array with random numbers between 1 and 100
let data: number[] = [];

for (let i = 0; i < arrayLength; i++) {
  data.push(Math.floor(Math.random() * 100) + 1); // Random numbers between 1 and 100
}
// chunking the array into subarrays
// for (let i = 0; i < data.length; i += sublist_size) {
//   let list = [];
//   for (let j = i; j < i + sublist_size && j < data.length; j++) {
//     list.push(data[j]);
//   }
//   sublists.push(list);
// }
//
// console.log(sublists);

// Trying to find the averages of three consecutive numbers in an array
console.time("Inefficient Approach");
for (let i = 0; i <= data.length - sublist_size; i++) {
  let avg: number =
    data.slice(i, i + sublist_size).reduce((acc, curr) => acc + curr, 0) /
    sublist_size;
  averages.push(Math.round(avg));
}
console.timeEnd("Inefficient Approach");
console.log("Inefficient approach \n", averages);

/*
 * [x] need a window of fixed size
 * [x] a state to maintain in the window
 * [x] a way to derive the next state using only the
 *    current state and the stuff that enters or leaves the window.
 */
console.time("Sliding Window Approach");
let sliding_window_averages: number[] = [];
let window_sum: number = 0;
for (let i = 0; i < sublist_size; i++) {
  window_sum += data[i];
}

sliding_window_averages.push(Math.round(window_sum / 3));

for (let i = sublist_size; i < data.length; i++) {
  window_sum = window_sum + data[i] - data[i - sublist_size];
  sliding_window_averages.push(Math.round(window_sum / 3));
}
console.timeEnd("Sliding Window Approach");
console.log("Sliding window \n", sliding_window_averages);

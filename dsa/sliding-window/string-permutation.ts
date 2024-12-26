/**
567. Permutation in String

Given two strings s1 and s2, return true if s2 contains a 
permutation
 of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
 */
function checkInclusion(): boolean {
  let s1: string = "ab";
  let s2: string = "eidboaoo";
  const s1_array = Array.from(s1);
  const s2_array = Array.from(s2);

  /*
   * Initialize the frequency difference table
   * Initialize the table on the initial window
   * Slide the window
   *
   * === ===
   * Initialize the a count of number of zeroes needed, call it zero_count
   * Character enters the window -> decrement the char key's value in frequency difference table
   * Character leaves the window -> increment the char key's value in frequency difference table
   * When zero_count === 0 that means permutation exists
   *
   * Ideal value is a 0 in all the char's key's in the frequency difference table
   * */

  let zero_count: number = 0;
  let frequency_difference_table: Record<string, number> = {};

  for (const char of s1_array) {
    frequency_difference_table[char] =
      (frequency_difference_table[char] || 0) + 1;
  }

  for (const _ in frequency_difference_table) {
    zero_count++;
  }

  for (let i = 0; i < s1_array.length; i++) {
    const char = s2_array[i];
    if (char in frequency_difference_table) {
      frequency_difference_table[char]--;
      if (frequency_difference_table[char] === 0) zero_count--;
      if (frequency_difference_table[char] === -1) zero_count++;
    }
  }

  if (zero_count === 0) return true;

  for (let i = s1_array.length; i < s2_array.length; i++) {
    const new_char = s2_array[i];
    const old_char = s2_array[i - s1_array.length];

    if (new_char in frequency_difference_table) {
      frequency_difference_table[new_char]--;
      if (frequency_difference_table[new_char] === 0) zero_count--;
      if (frequency_difference_table[new_char] === -1) zero_count++;
    }

    if (old_char in frequency_difference_table) {
      frequency_difference_table[old_char]++;
      if (frequency_difference_table[old_char] === 0) zero_count--;
      if (frequency_difference_table[old_char] === -1) zero_count++;
    }

    if (zero_count === 0) return true;
  }
  return false;
}

console.log(checkInclusion());

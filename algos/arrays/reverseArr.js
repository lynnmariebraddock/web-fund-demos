/* 
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
const expected2 = ["b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];

const arr4 = [];
const expected4 = [];

/**
 * Reverses the given arr in place without built in methods.
 * - Time: O(n/2) linear -> simplified to O(n) linear, n = arr.length, loops
 *    half the length.
 * - Space: O(1) constant.
 * @param {Array<any>} arr
 * @return {Array<any>} The given arr after being reversed.
 */
function reverseArr(arr) {
  // Without Math.floor the middle item would be swapped with itself. Wouldn't
  // cause a problem but is unnecessary.
  for (let leftIdx = 0; leftIdx < Math.floor(arr.length / 2); leftIdx++) {
    const rightIdx = arr.length - 1 - leftIdx;
    const temp = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = temp;
  }
  return arr;
}

// destructure array syntax, similar to py syntax for swapping
// idx vars to make the swap using destructure syntax more obvious
function revArr(arr) {
  for (let leftIdx = 0; leftIdx < Math.floor(arr.length / 2); leftIdx++) {
    const rightIdx = arr.length - 1 - leftIdx;
    [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];
  }
  return arr;
}

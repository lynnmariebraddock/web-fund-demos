/* 
  Given array and an additional value, insert this value at the beginning of the array by making space for it at the beginning of the array.
  return the new length of the array.
  
  Do this without using any built-in array methods.
*/

const arr1 = [1, 2, 3];
const newItem1 = 0;
const expected1 = 4;
// after function is called, arr1 should be:
const arr1Expected = [0, 1, 2, 3];

const arr2 = [];
const newItem2 = "a";
const expected2 = 1;
// after function is called, arr2 should be:
const arr2Expected = ["a"];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(n) linear, n = arr.length.
 * - Space: O(1) constant.
 * @param {Array<any>} arr
 * @param {any} newItem To add to front.
 * @return {number} New array length.
 */
function unshift(arr, newItem) {
  // shift every item to the right by 1 starting from the back
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = newItem;
  return arr.length;
}

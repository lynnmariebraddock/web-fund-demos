/* 
  Given an array, move the minimum value to the front
  return the array after done.

  No built in methods.
*/

const nums1 = [1, 5, 2, 9];
const expected1 = [1, 5, 2, 9];

const nums2 = [5, 1, 0, 2, 3, 0];
const expected2 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(2n) -> O(n) linear. n = nums.length.
 *    Drop the constant (2) to simplify.
 * - Space: O(1) constant because this algo doesn't take up any extra
 *    memory (space) as the length of the input arr grows. No new object or
 *    array is created that grows in size as the input grows.
 * @param {Array<number>} nums
 * @return {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
  if (nums.length === 0) {
    return nums;
  }

  let idxOfMin = 0;
  let min = nums[idxOfMin];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      idxOfMin = i;
    }
  }

  // starting from where the min is, shift to the right to overwrite the min
  // which will leave an empty space at the beginning
  //  i>= 1 so i - 1 doesn't go below 0
  for (let i = idxOfMin; i >= 1; i--) {
    nums[i] = nums[i - 1];
  }

  nums[0] = min;
  return nums;
}

// If we re-use other functions, this function can be easier to build and read
function minToFrontFunctional(nums) {
  const minIdx = findMinIdx(nums);

  if (minIdx > -1) {
    const min = removeAt(nums, minIdx);
    unshift(nums, min);
  }
  return nums;
}

function findMinIdx(nums) {
  let minIdx = -1;

  for (let i = 0; i < nums.length; i++) {
    if (minIdx === -1) {
      minIdx = i;
    } else if (nums[i] < nums[minIdx]) {
      minIdx = i;
    }
  }
  return minIdx;
}

function removeAt(arr, idx) {
  if (idx < 0 || idx >= arr.length) {
    return null;
  }

  let removed = arr[idx];

  for (let i = idx; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  // when the loop is done the 2nd to last item is set to the last item
  // so there is a duplicate that needs to be removed
  arr.pop();
  return removed;
}

function unshift(arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = val;
  return arr.length;
}

// If we use the built in methods
function moveMinFrontBuiltIn(nums) {
  if (nums.length === 0) {
    return null;
  }

  const minVal = Math.min(...nums);
  const idxOfMin = nums.indexOf(minVal);
  nums.splice(idxOfMin, 1);
  return minVal;
}

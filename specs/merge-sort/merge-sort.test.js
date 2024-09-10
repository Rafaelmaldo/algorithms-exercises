/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  const merge = (sortedArray, mergingArray) => {
    for(num of mergingArray){
      let j;
      for (j = sortedArray.length - 1; num < sortedArray[j] && j >= 0; j--) {
          sortedArray[j + 1] = sortedArray[j];
      }
      sortedArray[j + 1] = num;
    }
    return sortedArray;
  }
  
  if (nums.length === 1) {
    return nums;
  }

  return merge(mergeSort(nums.slice(0, Math.floor(nums.length / 2))), mergeSort(nums.slice(Math.floor(nums.length / 2))))
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

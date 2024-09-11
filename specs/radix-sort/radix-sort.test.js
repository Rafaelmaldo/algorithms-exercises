/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

const getDigit = (number, place, _longestNumber) => {
  if ((number.toString().length <= place)) {
    return 0;
  }

  const numberAsArray = (number.toString()).split("");
  const digit = Number(numberAsArray[(numberAsArray.length - 1) - place]);
  return digit;
}


const getLongestNumber = (array) => {
  let highestDigits = 1;
  
  for (num of array) {
    let digits = num.toString().length;
    if (digits > highestDigits) {
      highestDigits = digits;
    }
  }

  return highestDigits;
}

const radixSort = (array) => {
  if (array.lenth < 2) {
    return array;
  }

  const longestNumber = getLongestNumber(array);
  for (let i = 0; i < longestNumber; i++) {
    const buckets = []
    for (let j = 0; j <= 9; j++){
      buckets.push([]);
    }

    while (array.length) {
      let addToBucket = array.shift();
      let bucketNumber = getDigit(addToBucket, i);
      buckets[bucketNumber].push(addToBucket);
    }

    for (let bucket of buckets) {
      array = [...array, ...bucket]
    }

  }
  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});

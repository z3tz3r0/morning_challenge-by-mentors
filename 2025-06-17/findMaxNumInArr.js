function findMaxNumInArr(nums) {
  let maxNum = 0;

  for (const num of nums) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

function findMinNumInArr(nums) {
  let minNum = Infinity;

  for (const num of nums) {
    if (num < minNum) {
      minNum = num;
    }
  }
  return minNum;
}

const number = [1, 2, 31, 4, 15, 6, 7, 22, 9, 10];

console.log(findMaxNumInArr(number));

console.log(findMinNumInArr(number));

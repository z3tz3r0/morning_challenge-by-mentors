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

console.log(findMinNumInArr(number));

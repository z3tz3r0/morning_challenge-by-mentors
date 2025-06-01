function findMaxNum(nums: number[]): number {
  let currMaxNum = -Infinity;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] > currMaxNum) {
      currMaxNum = nums[i];
    }
  }
  return currMaxNum;
}

const number = [1, 2, 31, 4, 15, 6, 7, 22, 9, 10];
console.log(findMaxNum(number));

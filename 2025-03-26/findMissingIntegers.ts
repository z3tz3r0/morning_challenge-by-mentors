function findMissingInteger(nums: number[]) {
  const n = nums.length;
  const missingArr: number[] = [];

  const sortedNum = nums.sort((a, b) => a - b);
  for (let i = 1; i < n; i++) {
    if (sortedNum[i - 1] !== i) {
      missingArr.push(i);
    }
  }
  return missingArr;
}

const nums12 = [1, 2, 6, 7, 8, 20]; // expected [3,4,5]
console.log(findMissingInteger(nums12));

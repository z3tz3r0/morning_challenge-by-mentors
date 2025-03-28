// สมมติ ให้ array มา ชุด เดียว เหมือน โจทย์ ก่อน เลย จริง ๆ แต่ ต้อง แปลง ค่า เอา เอง
/*
 * @param {number[]} nums
 */
let nums = [-2, -1, -3, -4, 0, 4, 1, -2, -3, 0];

function absoluteSumDiff(nums) {
  // Calculate sum of positive numbers
  const positiveNums = nums.filter(num => num > 0).reduce((acc, prev) => acc + prev, 0); // Added initial value 0 for reduce

  // Calculate sum of absolute values of negative numbers
  const negativeNums = nums.filter(num => num < 0).reduce((acc, prev) => acc + Math.abs(prev), 0);

  let diff = positiveNums - negativeNums;

  if (diff > 0) {
    // Clarified Set 1 and Set 2 for better understanding
    return `Nums set 1 (Positives) got sum total of ${positiveNums} which is higher than Nums set 2 (Abs Negatives) by ${diff}`;
  } else if (diff < 0) {
    // Clarified Set 1 and Set 2 for better understanding
    return `Nums set 2 (Abs Negatives) got sum total of ${negativeNums} which is higher than Nums set 1 (Positives) by ${Math.abs(diff)}`;
  } else {
    // Simplified the message for the equal case
    return `Both sets have the same sum total of ${negativeNums}`;
  }
}

console.log(absoluteSumDiff(nums));
/*
 * @param {number[]} nums
 */

// สมมติ กรณี ใน array ไม่ เรียง และ มี ตัว ลบ มากกว่า และ มี เลข 0 อยู่ ใน นั้น


function findMaxCount(nums) {
  const positive = nums.filter(num => num > 0);
  const negative = nums.filter(num => num < 0);

  const diff = positive.length - negative.length;

  if (diff > 0) {
    return `Positive numbers are higher by ${diff}`;
  } else if (diff < 0) {
    return `The count of negative numbers is higher by ${Math.abs(diff)}`;
  } else {
    return `The count of both numbers is the same.`;
  }
}

let nums = [-2, -1, -3, -4, 0, 4, 1, -2, -3, 0];

console.log(findMaxCount(nums));

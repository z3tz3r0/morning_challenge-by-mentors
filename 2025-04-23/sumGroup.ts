function sumDigits(num: number): number {
  let currentNum = num;
  let sum = 0;
  while (currentNum > 0) {
    sum += currentNum % 10;
    currentNum = Math.floor(currentNum / 10);
  }
  return sum;
}

function sumGroup(num: number): number {
  if (num <= 0) {
    return 0;
  }

  const sumCount: Map<number, number> = new Map();

  for (let i = 1; i <= num; i++) {
    const digitSum = sumDigits(i);
    console.log(digitSum);
    sumCount.set(digitSum, (sumCount.get(digitSum) || 0) + 1);
  }
  console.log(`n = ${num}`);
  console.log(sumCount);
  const counts = [...sumCount.values()];
  const maxCount = Math.max(...counts);

  const groupsWithMaxCount = counts.filter(
    (count) => count === maxCount
  ).length;
  console.log(`Result = ${groupsWithMaxCount}`);
  return groupsWithMaxCount;
}

console.log(sumGroup(10000)); // expect: 4
// console.log(sumGroup(3));   // expect: 3
// console.log(sumGroup(1));   // expect: 1
// console.log(sumGroup(10)); // ผลรวม 1 มี [1, 10] (2 ตัว), ที่เหลือ 1 ตัว -> max=2, count=1 -> expect: 1
// console.log(sumGroup(20));

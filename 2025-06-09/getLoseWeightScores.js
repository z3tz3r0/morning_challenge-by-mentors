function getLoseWeightScore(weights) {
  if (!weights || weights.length === 0) {
    return 0;
  }

  const n = weights.length;
  // สร้าง array 'dp' เพื่อเก็บความยาวของลำดับที่ลดลงที่ยาวที่สุด ณ แต่ละ index
  // ทุกตัวเริ่มต้นที่ 1 (เพราะตัวมันเองคือน้ำหนัก 1 เดือน)
  const dp = Array(n).fill(1);

  // วนลูปจากเดือนที่สอง (i=1) ไปจนถึงเดือนสุดท้าย
  for (let i = 1; i < n; i++) {
    // วนลูปย้อนกลับเพื่อเปรียบเทียบกับเดือนก่อนหน้าทั้งหมด (j)
    for (let j = 0; j < i; j++) {
      // หากน้ำหนักเดือนก่อนหน้า (j) มากกว่าน้ำหนักเดือนปัจจุบัน (i)
      // หมายความว่าเราสามารถสร้างลำดับที่ลดลงต่อกันได้
      if (weights[j] > weights[i]) {
        // อัปเดต dp[i] ให้เป็นค่าที่ยาวที่สุดที่เป็นไปได้
        // คือค่าเดิมของมัน หรือ ความยาวของลำดับก่อนหน้า (dp[j]) + 1
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // หาความยาวที่มากที่สุดจาก dp array ทั้งหมด
  const longestLength = Math.max(...dp);

  // คะแนนคือ "จำนวนสเต็ป" ซึ่งเท่ากับ "ความยาวของลำดับ - 1"
  return longestLength > 0 ? longestLength - 1 : 0;
}

const weight1 = [80, 75, 79, 77, 74, 78];
const weight2 = [60, 65, 64, 67, 63, 63];
const weight3 = [83, 75, 74, 82, 81, 80];

console.log(getLoseWeightScore(weight1));
console.log(getLoseWeightScore(weight2));
console.log(getLoseWeightScore(weight3));

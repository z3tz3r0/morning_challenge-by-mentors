function sumDigits(num: number): number {
  let currentNum = num;
  let sum = 0;
  while (currentNum > 0) {
    sum += currentNum % 10;
    currentNum = Math.floor(currentNum / 10);
    // currentNum = (currentNum / 10) | 0; เขียนแบบนี้เพื่อตัดทศนิยมทิ้ง
  }
  return sum;
}

function sumGroup(num: number): number {
  // ด้วยความที่ตัวเลขมันไม่เกิน 10000 แน่ ๆ และ 10000 มันรวมกัน ได้ 1
  // ค่าอีกอันคือ 9999 ซึ่งรวมกันได้ 9+9+9+9 ได้ 36
  // เพราะงั้น ตัวเลขโดดรวมกันยังไงก็ไม่เกิน 36 แน่ ๆ
  // ขั้นตอนคือ
  // 0. เช็ค edge case เราไม่อยากได้ input ที่ไม่ต้องการเข้ามา
  // ถ้า num เป็น string จะติด error อยู่แล้ว แต่เพื่อความชัวร์เราจะเช็คด้วย
  if (num <= 0 || typeof num !== "number") {
    return 0;
  }

  // 0.1 เช็คอีกขั้นตอนนึงทำ early return
  // ถ้าเป็นเลขตัวเดียวก็คืนค่านั้นไปเลย
  if (num <= 9) return num;

  // 1. เราต้อง loop ทีละตัว โดยเอา Array ที่มีแต่ 0 ยาว 36 ตัวมารับ
  const group = new Array(36).fill(0);

  for (let i = 1; i <= num; i++) {
    // 2. วิ่งหาผลรวมของเลขโดด
    let sum = sumDigits(i);
    // 3. จัดผลรวมที่ได้จากเลขโดดแต่ละตัวเข้ากลุ่ม
    group[sum]++;
  }
  console.log("หน้าตาของกลุ่มออกมาประมาณนี้\n", group);

  // 4. หากลุ่มที่มีจำนวนผลรวมในกลุ่มมากที่สุด
  const maxNum = Math.max(...group);
  console.log("กลุ่มที่มีค่าซ้ำกันมากที่สุด = ", maxNum);
  return group.filter((item) => item === maxNum).length;

  // ในที่นี้เราไม่ต้องสร้าง array มาจัดกลุ่มให้ตัวเลขแต่ละชุด แต่เรา + เลขเข้าไปตรง ๆ ได้เลย
  // เราใช้ Hashmap ก็ได้ แต่วิธีที่น่าสนใจอีกอันคือ Array เพราะเราไม่ได้จะเอา Key มาใช้อยู่แล้ว
}

//console.log(sumGroup(13)); // expect: 4
// console.log(sumGroup(3)); // expect: 3
// console.log(sumGroup(1)); // expect: 1
// console.log(sumGroup(10)); // expect: 1
console.log(sumGroup(20)); // expect: 1

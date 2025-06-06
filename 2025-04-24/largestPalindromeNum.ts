function largestPalindromeNumIn(str: string): string {
  // ตอนนี้ผมลองเขียนควาคิดผมลงมาก่อนที่จะเริ่มเพื่อให้เป็นไปตาม explore, brainstorm, plan, execute ที่พี่ ๆ เคยพูดถึง
  // step คือจะเขียนขั้นตอนที่คิดจากบนลงล่าง ถ้ามีต้องกลับมาเขียนขั้นตอนก่อนหน้าจะใส่เลขไล่ตามลำดับ (เช่น edge case มานั่งคิดทีหลังในกรณีนี้)
  // สร้าง string ที่เป็นชุดตัวเลข เป็น paliddrome ที่มีค่ามากที่สุด
  // เราจะลองทำ case ใจดีก่อน
  // num="1234567890987654321"
  // output: "9876543210123456789"
  // เท่าที่สังเกตคือ input เข้ามาเป็นชุดตัวเลขจาก 0 - 9
  // แต่ output ตัวอย่างคือเรียงจาก เลขที่มากที่สุดมากไปน้อย แล้วก็จากน้อยไปมากอีกทีเป็น palindrome
  // คิดตามหลักความเป็นจริง ก็ใช่ ตัวเลขนี้คือจำนวนที่มากที่สุดแล้ว และ ยังเป็น palindrome อยู่
  // แปลว่าเราอาจจะต้องสร้าง palindrome ขึ้นมาโดยที่ให้เป็น structure ลักษณะนี้
  // สิ่งที่ต้องทำ
  // 5. เช็ค edge case ว่าเป็น string ว่างไหม return string ว่าง ๆ นั้นออกไปเลย
  if (str.trim() === "") return str;
  // 1. วิ่ง loop เพื่อนับจำนวนของตัวเลขแต่ละตัวก่อน << สร้าง ตัวแปรมารับการนับ เพราะค่าอาจจะเป็นตัวอักษรก็ได้

  const map = new Map(); // ใช้ map เพื่อความ flex

  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // หน้าตามันน่าจะได้ออกมาประมาณนี้
  // { 0:1,
  //  1: 2,
  // 2: 2, ...}
  // แปลว่าหน้าตาของสิ่งที่เราวิ่งนับเป็นเลขคู่ ตัวเลขพวกนั้นคือจะสามารถอยู่ได้ทั้งหน้าและหลังประกอบเป็น palindrome ได้
  // แต่ถ้าออกมาเป็นเลขคี่ แปลว่ามันจะมี 1 ตัวในนั้นเป็นตัวที่ต้องอยู่ตรงกลาง
  // เช่น num="444947137" map = {1: 1, 3: 1, 4:4, 7:2, 9: 1}
  // output: "7449447"
  // แสดงว่าตัวเลขมีโอกาสที่จะมีเลขที่อยู่ตรงกลางได้หลายตัว แต่สุดท้าย ถ้าค่าจะมากที่สุด ตัวที่อยู่ตรงกลางควรจะมีค่าที่มากที่สุดเช่นกัน
  // 2. เริ่มประกอบ palindrome ชุดหน้า โดยวิ่งจาก ตัวหลังสุดขึ้นมาตัวหน้าแล้วประกอบจำนวนแค่ครึ่งเดียวของ จำนวนที่เรานับมา
  const numString = [...map.keys()].sort((a, b) => b - a);
  let middleNum = "";
  let firstHalf = "";

  for (const num of numString) {
    const numAmount = map.get(num);
    // 3. ก่อนจะประกอบเราจะต้องเช็คว่าเลขที่เรากำลังจะประกอบ นับแล้วมีจำนวนเป็นเลขคู่หรือเลขคี่
    // ถ้าเป็นเลขคี่เราจะเช็คอีก ว่าเป็นค่าที่มากกว่าที่ทดอยู่แล้วไหม << เราต้องสร้างตัวแปรตั้งต้น ซึ่งคือ ""
    if (numAmount > middleNum && numAmount % 2 !== 0) {
      middleNum = num;
    }
    if (numAmount === 1) continue;

    for (let i = 0; i < numAmount / 2; i++) {
      firstHalf += num;
    }
  }
  // 4. หลังจากประกอบครึ่งหน้าแล้ว ก็สร้างชุดหลัง แล้วประกอบทั้งชุดอีกที แบบ ชุดหน้า + ตัวกลาง + ชุดหลัง return ออกมา
  return firstHalf + middleNum + firstHalf.split("").reverse().join("");
}

console.log(largestPalindromeNumIn("444947137"));

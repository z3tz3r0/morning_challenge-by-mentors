function findMostFrequentChar(string) {
  // ค่าที่เข้ามาเป็น ตัวอักษร
  // คืนค่าเป็น ตัวอักษร โดยไม่สนใจว่าตัวเลขเป็นยังไง

  // ต้องนับจำนวนตัวอักษรอย่างเดียว ไม่นับตัวอักษรพิเศษ

  // ถ้าเจอตัวที่ซ้ำกันจำนวนเท่ากันให้คืนค่าตัวอักษรที่มาก่อน
  const newStr = string.toLowerCase().replace(/[^a-z]/g, "");

  const map = {};

  for (const char of newStr) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  }

  const entries = Object.entries(map);
  let maxChar = entries[0];
  for (let i = 1; i < entries.length; i++) {
    if (entries[i][1] > maxChar[1]) {
      maxChar = entries[i];
    }
  }
  return maxChar[0];
}

console.log(findMostFrequentChar("testAASDASTttTTtD!@!#"));

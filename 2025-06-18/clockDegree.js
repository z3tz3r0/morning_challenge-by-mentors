// input
// hour = 12 or 0, minute = 20, output = 120
// hour = 3 or 15, minute = 0, output = 270
// hour = 6 or 18, minute = 0, output = 180

// minute = 0 - 59 คือ 60 ตัวเลข แต่ละตัวเลขคิดเป็น 6 องศา
// เช่น 6 * 15 = 90 องศา
// แปลว่าที่เราต้องหาคือ จำนวนช่อง ระหว่าง เข็มสั้นกับเข็มยาว
// เอาเข็มสั้นเป็นตัวตั้ง

function clockDegree(hour, minute) {
  if (hour >= 12) {
    hour -= 12;
  }
  if (minute >= 30) {
    hour += 1;
  }
  hour *= 5;
  const minuteLen = minute - hour;
  return minuteLen * 6;
}

console.log(clockDegree(18, 59));

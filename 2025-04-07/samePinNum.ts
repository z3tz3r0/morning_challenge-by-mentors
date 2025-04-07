// input: "0", "88", "101", "689", "11011", expected: true
// input: "12345", "666", "747", "787", expected: false

function samePinNum(input: string): boolean {
    // ทดความยาวไว้กับตัวแปรชื่อ inputLength
    let inputLength: number = input.length;

    // ถ้าความยาวเป็น 0 ให้ return false (เหมือนหยิบกระดาษเปล่ามา)
    if (inputLength === 0) return false;

    // ถ้าความยาว มากกว่าหรือเท่ากับ 1 แล้วเริ่มด้วย 0 ให้ return false
    if (inputLength > 1 && input[0] === "0") return false;

    // ถ้าด้านบนผ่านมาได้ แสดงว่า ความยาวมากกว่า 1 และไม่ได้เริ่มด้วยเลข 0 แล้ว
    // ประกาศตัวแปร 2 ตัวคือ
    // index ของ left (เริ่มที่ 0)
    // และ index ของ right (เริ่มที่ความยาว - 1 เป็น index สุดท้าย)
    let leftIdx: number = 0;
    let rightIdx: number = inputLength - 1;

    // ประกาศ set ใหม่ เก็บเลขที่กลับหัวยังไงก็อ่านไม่ได้ (มีเลข 3 4 และ 7) เพื่อเอามาเช็ค ว่าแต่ละเลขมันอ่านกลับหัวได้เท่านั้น
    const inValidAmbigramNum: Set<string> = new Set(["3", "4", "7"]);

    // ประกาศ loop ให้ทำไปเรื่อย ๆ จนกว่าตัวเลข index ทั้งสองฝั่งมันข้ามกัน
    while (leftIdx < rightIdx) {
        // log ดูซักนิดนึง
        console.log(input[leftIdx], input[rightIdx]);

        // เริ่มเช็ค condition ถ้า input ที่รับมาฝั่งซ้าย หรือ ฝั่งขวา เป็นตัวเลขที่อยู่ใน set (ตัวเลขที่อ่านกลับหัวไม่ได้) ให้ return false ทันที (เพราะยังไงก็อ่านกลับหัวไม่ได้)
        if (
            inValidAmbigramNum.has(input[leftIdx]) ||
            inValidAmbigramNum.has(input[rightIdx])
        ) {
            return false;
        }

        // ถ้าผ่านเงื่อนไขบนมาได้ เหลือเลขที่อ่านกลับหัวได้อย่างเดียวแล้ว แต่เลข 6 กับ 9 มันอ่านกลับหัวซึ่งกันและกันได้อยู่ เราเลยต้องเช็คด้วย
        // ถ้าเลขฝั่งซ้าย ไม่เท่ากับ เลขฝั่งขวา
        if (input[leftIdx] !== input[rightIdx]) {
            // เราจะดูว่า ซ้ายหรือขวาเป็นเลข 6 หรือ 9 แล้วกลับกัน ซึ่งถุ้าเข้าเงื่อนไขนี้ ถือว่าโอเค ให้ขยับไปเลขถัดไปได้
            if (
                (input[leftIdx] === "6" && input[rightIdx] === "9") ||
                (input[leftIdx] === "9" && input[rightIdx] === "6")
            ) {
                leftIdx++;
                rightIdx--;
                continue;
            }

            // ถ้าตัวเลขแค่ไม่เท่ากันเฉย ๆ กลับบ้านไป
            return false;

            // เราเช็คต่ออีก ถ้าฝั่งซ้ายเป็นเลข 6 หรือ 9 แบบเดียวกับฝั่งขวา ก็ให้กลับบ้านไป
        } else if (
            (input[leftIdx] === "6" && input[rightIdx] === "6") ||
            (input[leftIdx] === "9" && input[rightIdx] === "9")
        ) {
            return false;
        }
        // จากด้านบน ถ้าตัวเลขสองฝั่งเท่ากัน (0 1 2 5 8) ก็ให้ขยับเลข ไปเช็คตัวถัดไป (ขยับเข้าตรงกลาง)
        leftIdx++;
        rightIdx--;
    }

    // ถ้าออกจาก while loop มาได้ แปลว่าฝั่งซ้ายฝั่งขวาอ่านกลับหัวได้หมด เพราะงั้นให้ return true
    return true;
}

const nums = "115505521";

console.log(samePinNum(nums)); // true

function samePinNum2(input: string): boolean {
    const inputLength = input.length;

    if (inputLength === 0) {
        console.log("input is empty");
        return false;
    }

    if (inputLength > 1 && input[0] === "0") {
        console.log("input start with 0");
        return false;
    }

    const map: Map<string, string> = new Map([
        ["0", "0"],
        ["1", "1"],
        ["2", "2"],
        ["5", "5"],
        ["6", "9"],
        ["8", "8"],
        ["9", "6"],
    ]);

    let left: number = 0;
    let right: number = inputLength - 1;

    while (left < right) {
        if (!map.has(input[left]) || map.get(input[left]) !== input[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

const nums2 = "11011";

console.log(samePinNum(nums2));

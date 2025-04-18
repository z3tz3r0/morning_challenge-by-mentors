function isCorrectTechAbbr(word: string, abbr: string): boolean {
    // ตั้งตัวแปร 4 ตัว เพราะเราต้องเช็ค 2 ตัวแปรพร้อม ๆ กัน
    const wordLen: number = word.length;
    const abbrLen: number = abbr.length;
    let wordPointer: number = 0;
    let abbrPointer: number = 0;

    // เราจะ loop ไปเรื่อย ๆ จนกว่า Pointer ของ abbr วิ่งจนถึงตัวสุดท้ายของ abbr จริง ๆ
    while (abbrPointer < abbrLen) {
        // Logic สำคัญ ถ้า เป็นตัวอักษร ให้เพิ่ม Pointer ทั้ง word และ abbr เพราะมันไม่มีอะไรต้องทำ
        if (abbr[abbrPointer] >= "a" && abbr[abbrPointer] <= "z") {
            // แต่เราจะเช็คด้วยว่า word pointer มันวิ่งเกิน ปริมาณตัวอักษรทั้งหมดของ word ไปหรือยัง
            // หรีอ ถ้า ตัวอักษรนั้น ๆ ของ word ไม่ตรงกับ ตัวอักษร ของ abbr เมื่อไหร่
            // ให้ return false
            if (
                wordPointer >= wordLen ||
                word[wordPointer] !== abbr[abbrPointer] // <- ตัวนี้สำคัญ
            ) {
                return false;
            }
            wordPointer++;
            abbrPointer++;
        }

        // ที่นี้ถ้า ตัวที่ loop หลักเราเจอมันเป็นตัวเลขแทนมันจะเข้า condition นี้
        else if (abbr[abbrPointer] >= "0" && abbr[abbrPointer] <= "9") {
            // เราเช็คตาม constraint ก่อน ถ้าตัวแรกดันเป็น 0 ก็ return false ไปเลย
            if (abbr[abbrPointer] === "0") {
                return false;
            }

            // ที่นี้เราจะต้อง track จำนวนตัวอักษรที่เราจะข้ามใน word ก็เลยเก็บเลขไว้ในตัวแปรตัวนึงชั่วคราว
            let skipCount: number = 0;

            // ซึ่งจะข้ามกี่ตัวก็ไม่รู้แหล่ะ เราเลยใช้ while เพื่อนับไปเรื่อย ๆ ถ้าตัวที่เราวิ่งเช็ตยังเป็นตัวเลขอยู่ไปเรื่อย ๆ
            while (abbr[abbrPointer] >= "0" && abbr[abbrPointer] <= "9") {
                // ที่นี้ ตอนที่เราเพิ่มเลขเข้าไปใน skipCount มันเป็นการเพิ่มหลักของตัวเลขด้วย
                // เพราะงั้นต้อง * 10 ให้เสมอ (ตอนแรกสุดมันเป็น 0 * 10 ก็ได้ 0 ตามหลัก PEMDAS)
                skipCount = skipCount * 10 + parseInt(abbr[abbrPointer]);
                // เพิ่ม abbr pointer ด้วย เพราะเราจะไปตัวถัดไป จนกว่ามันจะไม่มีตัวเลข
                abbrPointer++;
            }

            // พอเราวิ่ง loop จบ เรามาเพิ่ม wordPointer ด้วยจำนวนตัวเลขที่เราข้าม
            wordPointer += skipCount;
        } else {
            // เขียนไว้เผื่อว่ามันมีตัวอักษรแปลก ๆ ที่ไม่ใช่ ตัวเลขหรือตัวอักษร
            return false;
        }
    }

    // สุดท้าย วิ่งจนสุด ๆ ๆ ละ ใน loop นอก loop ใน ตัวเลขของ wordPointer มันควรจะเท่ากับ ความยาวของ word
    return wordPointer === wordLen;
}

const word = "internationalization";
const abbr = "i12iz4n"; // true

const word2 = "apple";
const abbr2 = "a2e"; // false

console.log(isCorrectTechAbbr(word, abbr));
console.log(isCorrectTechAbbr(word2, abbr2));

function popularYear(logs: number[][]): number {
    const trackingYear: Map<number, number> = new Map();

    for (const log of logs) {
        // Array destructuring
        const [birth, death] = log;

        // ยัดของใส่ Map trackingYear สำหรับปีเกิดให้แปะ +1 ถ้าปีตายให้แปะ -1 ไว้กับแต่ละปี
        trackingYear.set(birth, (trackingYear.get(birth) || 0) + 1);
        trackingYear.set(death, (trackingYear.get(death) || 0) - 1);
    }

    /* ถึงตรงนี้ trackingYear จะมีหน้าตาประมาณว่า { ปี : +เลข ไม่ก็ -เลข }
    จินตนาการเหมือนว่าเป็นประเทศ ๆ นึง ในปีนั้น มีคนเกิด จำนวนนึง มีคนตายจำนวนนึงบวกลบกันไปแต่ละปี
    ซึ่งถ้าปีซ้ำกัน เช่น ปีเกิด 1930 ปีตาย 1930 ปีนั้นจำนวนประชากรควรจะเป็น 0 เกิดตายเท่ากัน */

    // เอามาแต่ key ของ Map เรียงจากน้อยไปมาก
    const sortedYear = [...trackingYear.keys()].sort((a, b) => a - b);

    // ประกาศตัวแปร 3 ตัว
    // maxPopulation ไว้ track จำนวนประชากรที่มากที่สุด
    let maxPopulation: number = 0;
    // currentPopulation ไว้ใช้วิ่งจำนวนประชากรปัจจุบันใน loop
    let currentPopulation: number = 0;

    // currentMaxPopulationYear ปีที่มีจำนวนประชากรสูงสุดในตอนน้
    let currentMaxPopulationYear: number = 0;

    // เราจะวิ่ง loop เช็คแต่ละปี จากปีที่เรียงมาแล้ว
    for (const year of sortedYear) {
        // เปิดมาให้ประชากรปัจจุบันที่เรา track มารับค่า +1 หรือ -1 (แล้วแต่ว่าปีนั้นเป็นปีเกิดหรือปีตาย)
        currentPopulation += trackingYear.get(year) || 0;

        // มาเช็ค condition ว่า ถ้าปีที่เราวิ่งเช็คอยู่นี้ จำนวนประชากรมากขึ้น
        // แต่ต่อให้เป็นปีที่มีคนเกิด แต่ก่อนหน้านั้นตายไม่รู้เท่าไหร่ condition ด้านล่างนี้จะไม่เกิด
        if (currentPopulation > maxPopulation) {
            // แปลว่าปีนั้นมีจำนวนคนเพิ่มขึ้นเป็นปีที่ยังมีประชากรมากที่สุดอยู่
            maxPopulation = currentPopulation;

            // เพราะงั้นบรรทัดนี้เราก็จะเอาปีที่เรา loop อยู่ มา assign ใส่ currentMaxPopulationYear
            currentMaxPopulationYear = year;
        }
    }

    // หลังจากที่เรา loop ไปเรื่อย ๆ เราจะได้ปีที่มีประชากรที่มากที่สุดมาก
    // บรรทัดที่ 30 - 45 เป็น logic สำคัญ อาจจะต้องอ่านวนหลาย ๆ รอบ
    return currentMaxPopulationYear;
}

const logs = [
    [1990, 2000],
    [1992, 2002],
    [1994, 2004],
    [1996, 2006],
    [1998, 2008],
    [1990, 1995],
    [1995, 2000],
    [1995, 2005],
    [1990, 2010],
    [1980, 1995],
];
// expected: 1998

console.log(popularYear(logs)); // 1998

// 1 <= points.length <= 1000
// -1000 <= points[i] <= 1000
// 1 <= min, max <= points.length

function minSum(points: number[], min: number, max: number): number {
    const n = points.length;

    // เช็ค edge case ถ้าความยาวแค่ 1 เรา return ของได้เลย
    // เพราะ constraint กำหนดว่า array อาจจะมีความยาวเป็น 1 ได้
    if (n === 1) return points[0];

    const prefixSum: number[] = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + points[i];
    }

    console.log("Prefix Sum is: ", prefixSum);

    let minPositiveNum = Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = i + min - 1; j < Math.min(i + max, n); j++) {
            console.log("Current J: ", j);
            const currentSum = prefixSum[j + 1] - prefixSum[i];
            console.log("currentSum: ", currentSum);

            if (currentSum > 0) {
                minPositiveNum = Math.min(minPositiveNum, currentSum);
            }
        }
    }

    // ไม่ว่าผลรวมจะหน้าตาเป็นยังไง ถ้ามันมากกว่า 0 return ตัวเลขนั้นไป น้อยกว่าก็ return -1 ไป
    return minPositiveNum === Infinity ? -1 : minPositiveNum;
}

const points = [4, 3, -2, 1];
const min = 2;
const max = 3;

console.log(minSum(points, min, max));

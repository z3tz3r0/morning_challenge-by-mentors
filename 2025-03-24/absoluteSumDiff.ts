// ## Absolute sum different

// -   จากข้อที่ 1 ถ้าหากทุก element ที่เป็น negative กลายเป็น positive ความต่างของผลรวมฝั่งไหนมากกว่ากัน และมากกว่าเท่าไหร่

interface Result {
    winnerGroup: string;
    sumDiff: number;
}

function absSumDiff(nums: number[]): Result {
    const n = nums.length;
    if (!nums || n === 0) {
        throw new Error("Error: Not a valid input (expected number array)");
    }

    let positiveNums = 0;
    let negativeNums = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            positiveNums += nums[i];
        } else if (nums[i] < 0) {
            negativeNums = nums[i] * -1;
        }
    }

    if (positiveNums - negativeNums === 0) {
        return {
            winnerGroup: "N/A",
            sumDiff: 0,
        };
    }

    return {
        winnerGroup: positiveNums > negativeNums ? "positive" : "negative",
        sumDiff: Math.abs(positiveNums - negativeNums),
    };
}

const numsArr: number[] = [-2, -1, -3, -4, 0, 4, 1, -2, -3, 0];

console.log(absSumDiff(numsArr));

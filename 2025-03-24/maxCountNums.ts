// Revisit at 2025-04-19
// Have some improvement
// that I'm surprise I wrote near what mentor answer provided.
// And now I'm using TypeScript! but didn't announce the type / interface first.

function findMaxCounts(nums: number[]): string {
    const n = nums.length;

    // I forgot to check edge case here
    // if (!nums || n === 0) {
    //     return "Not a valid input";
    // }

    let negativeNums: number = 0;
    let positiveNums: number = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            positiveNums++;
        }
        if (nums[i] < 0) {
            negativeNums++;
        }
    }
    let result: string = "";
    let comparisonStr: string = "higher";
    if (positiveNums > negativeNums) {
        result = "positive";
    } else if (positiveNums < negativeNums) {
        result = "negative";
    } else {
        result = "both";
        comparisonStr = "equally the same";
    }

    return `The sum of ${result} number are ${comparisonStr}${
        positiveNums - negativeNums !== 0
            ? " by " + Math.abs(positiveNums - negativeNums)
            : ""
    }`;
}

const numArr: number[] = [-2, -1, -3, -4, 0, 4, 1, 2, 3, 0]; // 4

console.log(findMaxCounts(numArr));

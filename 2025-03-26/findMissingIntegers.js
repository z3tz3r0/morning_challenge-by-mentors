"use strict";

function findMissingInt(nums) {
    const missingNums = [];
    let numSet = new Set(nums);

    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            missingNums.push(i);
        }
    }
    return missingNums;
}

const nums1 = [1,2,6,7,8,20]; // expected [3,4,5]
console.log(findMissingInt(nums1));
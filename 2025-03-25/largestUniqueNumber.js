"use strict";

// initial Attemp, inefficient
function returnOneNum(nums) {
    if (nums.length === 1) return nums[0];
    let map = {};

    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    for (const [key,value] of Object.entries(map).reverse()) {
        if (value === 1) return key;
    }
    return -1;
}

// others solution
function returnLargestWithoutAdditionalMemory(nums) {
    // start by sorting it ... O(n)
    nums.sort((a,b) => a - b);
    if (nums.length === 1) return nums[0];

    let i = nums.length - 1; // get the length in index;

    while (i >= 0) {
        // check if current position and previous position being a duplicate
        if (nums[i] === nums[i - 1]) {
            // if it's a duplicate but still more than limit
            while (i >= 0 && nums[i] === nums[i - 1]) {
                // decrease main tracking index;
                i--;
            }
        } else {
            return nums[i]; // this one probably has only 1 number;
        }
        // after skipping duplicates
        // i will be pointing to the most left of duplicate of the current number
        // move to the next number;
        i--;
    }
    return -1;
}

const nums = [5, 5, 5, 7, 7, 3, 9, 9, 4, 8, 8, 3, 1, 1];

console.log(returnLargestWithoutAdditionalMemory(nums));
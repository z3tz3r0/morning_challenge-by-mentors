"use strict";

function moveZeroes(nums) {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        /* This block is initial answer but inefficient
        let tempNum = nums[right];
        if (tempNum !== 0) {
            nums[right] = nums[left];
            nums[left] = tempNum;
            left++
        } 
            */
        if (nums[right] !== 0) {
            [nums[left],nums[right]] = [nums[right],nums[left]];
            left++;
        }

    }
    return nums;
}

const nums = [0,1,0,3,12]; // expected [1,3,12,0,0]

console.log(moveZeroes(nums));

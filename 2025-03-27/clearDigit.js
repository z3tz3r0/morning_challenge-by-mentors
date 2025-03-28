"use strict";

function clearDigits(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (!parseInt(str[i])) {
            res += str[i];
        } else {
            res = res.slice(0, -1);
        }
    }
    return res;
}


const text1 = "po49" // expected ""
const text2 = "49po" // expected "po"
const text3 = "asd8sx5a961os3" // expected: "ao"
const text4 = "d9pao59" // expected "p"

// console.log(clearDigits(text1));
// console.log(clearDigits(text2));
// console.log(clearDigits(text3));
console.log(clearDigits(text4));
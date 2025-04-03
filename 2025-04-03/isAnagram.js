"use strict";

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let map = new Map();

    for (let i = 0; i < str1.length; i++) {
        map.set(str1[i], (map.get(str1[i]) || 0) + 1)
        map.set(str2[i], (map.get(str2[i]) || 0) - 1)
    }

    return map.length === undefined;
}

const str1 = "listen";
const str2 = "silent";

console.log(isAnagram(str1,str2)); //Output: true
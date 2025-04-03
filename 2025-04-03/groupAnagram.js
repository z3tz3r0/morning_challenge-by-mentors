"use strict";

function groupAnagram(strs) {
    if (strs.length === 0) return [];
    if (strs.length === 1) return [strs];

    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        let newStr = strs[i].split('').sort().join('');
        if (map.has(newStr)) {
            map.get(newStr).push(strs[i]);
        } else {
            map.set(newStr, [strs[i]]);
        }
    }

    return Array.from(map.values())
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(groupAnagram(strs)); // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
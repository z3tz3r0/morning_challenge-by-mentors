"use strict";

function moneyTrigger1(str) {
    return str.replace(/u/ig,"$&$");
}

function moneyTrigger2(str) {
    return str.replace(/u/ig,(matched => matched + "$"));
}

function moneyTrigger3(str) {
    let newStr = '';
    let n = str.length;
    let i = 0
    while (i < n) {
        if (str[i] === 'u' || str[i] === 'U') {
            newStr = newStr + str[i] + "$";
        } else {
            newStr += str[i];
        }
        i++
    }
    return newStr
}

const test = "uiia iUiiiau"

console.log(moneyTrigger1(test))
console.log(moneyTrigger2(test))
console.log(moneyTrigger3(test))
function smallestPalindrome(str: string): string {
    const n: number = str.length;
    if (n === 0 || typeof str !== "string") return "Non-sense string";
    if (n === 1) return str;

    if (str !== str.split("").reverse().join("")) {
        return "This is not a valid palindrome";
    }

    const map: Record<string, number> = {};

    for (const char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    const firstHalf: string[] = [];
    let middleChar: string = "";

    // const sortedChar: string[] = Object.keys(map).sort();
    const sortedChar: string = "abcdefghijklmnopqrstuvwxyz";

    for (const char of sortedChar) {
        const count = map[char];

        if (count >= 2) {
            firstHalf.push(char.repeat(Math.floor(count / 2)));
        }

        if (count % 2 === 1) {
            middleChar = char;
        }
    }

    const firstHalfStr = firstHalf.join("");
    const secondHalfStr = firstHalf.reverse().join("");

    return firstHalfStr + middleChar + secondHalfStr;
}

const empty = "";
const rat = "rat";
const tenet = "tenet";
const racecar = "racecar";
const dadkdakadkdad = "dadkdakadkdad";

console.log(smallestPalindrome(empty)); // 'Non-sense string'
console.log(smallestPalindrome(rat)); // 'This is not a valid palindrome'
console.log(smallestPalindrome(tenet)); // 'etnte'
console.log(smallestPalindrome(racecar)); // 'acrerca'
console.log(smallestPalindrome(dadkdakadkdad)); // 'aadddkkkdddaa'

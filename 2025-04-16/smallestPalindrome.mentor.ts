const smallestPalindrome = (str) => {
  const a = "a".charCodeAt(0);
  console.log(a);
  const counts = new Array(26).fill(0);

  for (const ch of str) {
    counts[ch.charCodeAt(0) - a]++;
  }
  console.log(counts);
  let prefix = "";
  let suffix = "";
  let middle = "";
  for (let i = 0; i < 26; i++) {
    if (counts[i] === 0) continue;

    const ch = String.fromCharCode(i + a);
    const count = counts[i];
    if (count % 2 === 1) {
      middle = ch;
    }

    const half = count >> 1;
    const str = ch.repeat(half);
    prefix += str;
    suffix = str + suffix;
  }

  return prefix + middle + suffix;
};

console.log(smallestPalindrome("racecar"));

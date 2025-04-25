function largestPalindrome(str: string): string {
  if (str.trim() === "") return str;

  const counts: number[] = new Array(10).fill(0);
  for (const char of str) {
    counts[char]++;
  }

  let prefix = "";
  let suffix = "";
  let middle = "";

  for (let i = 0; i <= 9; i++) {
    if (counts[i] === 0) continue;

    const count = counts[i];
    const char = i.toString();

    if (count % 2 !== 0 && i > Number(middle)) {
      middle = char;
    }
    if (i === 0) continue;
    const strs = char.repeat(count / 2);
    prefix = strs + prefix;
    suffix += strs;
  }
  const words = prefix + middle + suffix;
  return words !== "0" ? words : "";
}

console.log(largestPalindrome("1234567890987654321"));

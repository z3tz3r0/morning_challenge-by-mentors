function alphabetScore(str) {
  let res = "";
  let score = 0;
  let vowels = new Map([
    ["a", 2],
    ["e", 3],
    ["i", 4],
    ["o", 5],
    ["u", 6],
  ]);

  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      score += vowels.get(str[i]);
      res += str[i].toUpperCase();
    } else {
      res += str[i];
      score++;
    }
  }

  return `${res} ${score}`;
}

console.log(alphabetScore("connex"));
console.log(alphabetScore("intouch"));

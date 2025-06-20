function findPrime(num) {
  const prime = [];

  for (let i = 2; i <= num; i++) {
    if (i <= 1) return [];
    if (i === 2 || i === 3) {
      prime.push(i);
      continue;
    }
    if (i % 2 === 0 || i % 3 === 0) {
      continue;
    }

    prime.push(i);
  }
  return prime;
}

console.log(findPrime(50));

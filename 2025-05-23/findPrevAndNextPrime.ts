function findPrevAndNextPrime(num: number): string {
  let prevPrime = 0;
  let nextPrime = 0;

  // check Previous Prime first
  for (let i = num - 1; i > 1; i--) {
    if (isPrime(i)) {
      prevPrime = i;
      break;
    }
  }

  // check Next Prime
  for (let i = num + 1; i < Infinity; i++) {
    if (isPrime(i)) {
      nextPrime = i;
      break;
    }
  }

  return `Current Number ${num} => Previous Prime Number ${prevPrime}, Next Prime Number ${nextPrime}`;
}

function isPrime(num: number): boolean {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(findPrevAndNextPrime(4)); // Current Number 4 => Previous Prime Number 3, Next Prime Number 5
console.log(findPrevAndNextPrime(20)); // Current Number 20 => Previous Prime Number 19, Next Prime Number 23
console.log(findPrevAndNextPrime(37)); // Current Number 37 => Previous Prime Number 31, Next Prime Number 41
